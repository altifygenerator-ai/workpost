"use client";

import { useEffect, useState } from "react";
const MAX_FREE_USES = 15;
const STRIPE_LINK = "https://buy.stripe.com/14A8wP6xugdhfItg4p7N600";

const postTypes = [
  "Finished Job Post",
  "Before & After Post",
  "Service Promo",
  "Google Business Post",
  "Facebook Ad Starter",
];

const tones = [
  "Casual and trustworthy",
  "Short and direct",
  "Friendly small-town",
  "More professional",
];

export default function PostBuilder() {
  const [text, setText] = useState("");
  const [format, setFormat] = useState(postTypes[0]);
  const [businessType, setBusinessType] = useState("");
  const [location, setLocation] = useState("");
  const [tone, setTone] = useState(tones[0]);
  const [output, setOutput] = useState("Your finished post will appear here.");
  const [loading, setLoading] = useState(false);

  const [usageCount, setUsageCount] = useState(0);
  const [isPaid, setIsPaid] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("paid") === "true") {
      localStorage.setItem("isPaid", "true");
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    setUsageCount(parseInt(localStorage.getItem("usageCount") || "0"));
    setIsPaid(localStorage.getItem("isPaid") === "true");
  }, []);

  const remainingUses = Math.max(0, MAX_FREE_USES - usageCount);

  async function handleGenerate() {
    if (!text.trim()) {
      setOutput("Type a few notes about the job or service first.");
      return;
    }

    if (usageCount >= MAX_FREE_USES && !isPaid) {
  setShowPaywall(true);
  setOutput("Free limit reached. Unlock full access to keep building posts.");
  return;
}

    setLoading(true);
    setShowPaywall(false);
    setOutput("Building your post...");

    try {
      const res = await fetch("/api/format", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-paid-user": isPaid ? "true" : "false",
        },
        body: JSON.stringify({
          text,
          format,
          businessType,
          location,
          tone,
        }),
      });

      const data = await res.json();

      if (res.status === 403) {
        setShowPaywall(true);
        setOutput(data.error || "Free limit reached. Unlock full access to keep building posts.");
        return;
      }

      if (!res.ok) {
        setOutput(data.error || "Something went wrong. Check your API route and key.");
        return;
      }

      setOutput(data.output || "No response.");

      if (!isPaid) {
        const newCount = usageCount + 1;
        setUsageCount(newCount);
        localStorage.setItem("usageCount", String(newCount));
      }
    } catch {
      setOutput("Error processing request. Check your API route and key.");
    } finally {
      setLoading(false);
    }
  }

  async function copyOutput() {
    await navigator.clipboard.writeText(output);
  }

  return (
    <div className="toolWrap">
      <div className="inputPanel">
        {isPaid && <div className="paidBadge">✓ Unlimited Access Enabled</div>}

        <div className="fieldGrid">
          <div>
            <label>Business type</label>
            <input
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              placeholder="roofing, gravel, concrete..."
            />
          </div>

          <div>
            <label>Area</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Hot Springs, Glenwood..."
            />
          </div>
        </div>

        <div className="fieldGrid">
          <div>
            <label>Type of post</label>
            <select value={format} onChange={(e) => setFormat(e.target.value)}>
              {postTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Tone</label>
            <select value={tone} onChange={(e) => setTone(e.target.value)}>
              {tones.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label>What did you do?</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Example: Finished a 20x30 concrete pad today. Customer needed a cleaner spot for parking. We graded it, formed it, poured it, and cleaned everything up..."
          />
          <div className="smallRow">
            <span>{text.length} characters</span>
            <span>{isPaid ? "Unlimited uses" : `${remainingUses} uses remaining`}</span>
          </div>
        </div>

        <button onClick={handleGenerate} disabled={loading} className="mainBtn">
          {loading ? "Building..." : "Build My Post"}
        </button>

        {!isPaid && (
          <div className="unlockBox">
            <p>Need more than 5 uses?</p>
            <button onClick={() => (window.location.href = STRIPE_LINK)}>
              Unlock Full Access
            </button>
          </div>
        )}

        {showPaywall && !isPaid && (
          <div className="paywall">
            <h3>Free Limit Reached</h3>
            <p>Unlock unlimited post building and skip the limits.</p>
            <button onClick={() => (window.location.href = STRIPE_LINK)}>
              Unlock for $12
            </button>
          </div>
        )}
      </div>

      <div className="outputPanel">
        <div className="outputTop">
          <div>
            <p>Finished result</p>
            <h3>Ready to copy</h3>
          </div>

          <button onClick={copyOutput}>Copy</button>
        </div>

        <div className="outputBox">{output}</div>
      </div>
    </div>
  );
}