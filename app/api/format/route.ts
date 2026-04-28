const usageMap = new Map<string, number>();
const MAX_FREE_USES = 15;

export async function POST(req: Request) {
  try {
    // Get IP
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const isPaid = req.headers.get("x-paid-user") === "true";

    // Usage limit check
    if (!isPaid) {
      const currentUses = usageMap.get(ip) || 0;

      if (currentUses >= MAX_FREE_USES) {
        return Response.json(
          { error: "Free limit reached" },
          { status: 403 }
        );
      }

      usageMap.set(ip, currentUses + 1);
    }

    // Parse body
    const { text, format, businessType, location, tone } = await req.json();

    if (!text) {
      return Response.json(
        { error: "No text provided" },
        { status: 400 }
      );
    }

    // Prompt logic
    let instruction = "";

    if (format === "Finished Job Post") {
      instruction = `
Write a natural Facebook post for a local service business about a finished job.
Do not mention AI.
Sound like a real local business owner.
Keep it casual, clear, and human.
Mention the work done, the result, and invite people to reach out.
Avoid corporate marketing fluff.
`;
    } else if (format === "Before & After Post") {
      instruction = `
Write a before-and-after style post for a local service business.
Do not mention AI.
Focus on the problem, the work done, and the final result.
Keep it natural and easy to post on Facebook.
`;
    } else if (format === "Service Promo") {
      instruction = `
Write a short promotional post for a local service business.
Do not mention AI.
Sound helpful, not pushy.
Make the service clear.
Give people a reason to call or message.
`;
    } else if (format === "Google Business Post") {
      instruction = `
Write a short Google Business Profile update.
Do not mention AI.
Keep it professional but natural.
Mention the service and area if provided.
End with a simple call to action.
`;
    } else if (format === "Facebook Ad Starter") {
      instruction = `
Write a simple Facebook ad starter for a local service business.
Do not mention AI.
Hook attention fast.
Focus on the customer problem.
Keep it short and direct.
End with a clear call to action.
`;
    } else {
      instruction = `
Clean this into a natural post for a local service business.
Do not mention AI.
Keep it human, simple, and useful.
`;
    }

    const finalPrompt = `
${instruction}

Business type: ${businessType || "local service business"}
Location: ${location || "local area"}
Tone: ${tone || "casual and trustworthy"}

User notes:
${text}

Your job:
Rewrite the user's notes into a finished post.

Rules:
1. The user's notes are the source of truth.
2. Keep the same facts, job details, service type, and location.
3. Do not invent anything.
4. Do not add claims like licensed, insured, affordable, best, top-rated, family-owned, or years of experience unless the user wrote it.
5. If details are missing, write around them naturally instead of making them up.
6. Make it sound like a real local business owner wrote it.
7. Keep it clear, useful, and easy to copy.

Final post:
`;

    // OpenAI request
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        input: finalPrompt,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return Response.json(
        { error: data.error?.message || "OpenAI request failed" },
        { status: response.status }
      );
    }

    const output =
      data.output_text ||
      data.output?.[0]?.content?.[0]?.text ||
      "No response.";

    return Response.json({ output });

  } catch (error: any) {
    return Response.json(
      { error: error.message || "Server error" },
      { status: 500 }
    );
  }
}