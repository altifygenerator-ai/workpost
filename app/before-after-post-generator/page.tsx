import Link from "next/link";
import PostBuilder from "@/components/PostBuilder";

export const metadata = {
  title:
    "Before and After Post Generator for Contractors | Facebook & Google Posts",
  description:
    "Create before and after posts for contractors in seconds. Turn job notes into Facebook and Google posts that show your work, build trust, and bring in more local calls.",
};

export default function BeforeAfterPostGenerator() {
  return (
    <main>
      <section className="hero">
        <nav className="nav">
          <Link href="/" className="logo">ShowYourWork</Link>

          <div className="navActions">
            <Link href="/faq" className="navLink">FAQ</Link>
            <a href="#builder" className="navBtn">Try It</a>
          </div>
        </nav>

        <div className="heroGrid">
          <div>
            <p className="eyebrow">Before & after posts</p>

            <h1>Turn before-and-after work into a post worth sharing.</h1>

            <p className="heroText">
              Got a job that looked rough before and cleaned up good after?
              Type what changed and turn it into a simple post you can use on
              Facebook or Google.
            </p>

            <div className="heroTags">
              <span>Before & after jobs</span>
              <span>Cleanups</span>
              <span>Repairs</span>
              <span>Finished work</span>
            </div>
          </div>

          <div className="previewCard">
            <p className="previewLabel">Example</p>

            <div className="previewInput">
              Before: driveway was washed out and rutted bad. After: brought in
              fresh gravel, shaped it, packed it down, and cleaned up the edges.
            </div>

            <div className="previewOutput">
              This driveway was washed out and rutted pretty bad before we got
              started. We brought in fresh gravel, shaped it back up, packed it
              down, and cleaned up the edges so it looks better and holds up
              better when it rains.
            </div>
          </div>
        </div>
      </section>

      <section id="builder" className="builderSection">
        <div className="sectionIntro">
          <p className="eyebrow dark">Before & After Builder</p>

          <h2>Show the problem, the work, and the result.</h2>

          <p>
            Before-and-after posts work because people can see the difference.
            Just type what the job looked like before and what changed after.
          </p>
        </div>

        <PostBuilder defaultFormat="Before & After Post" />
      </section>

      <section className="infoSection">
        <div className="infoCard">
          <h3>Show the change</h3>
          <p>
            People respond to visible results. Before-and-after posts make the
            value of your work easy to understand.
          </p>
        </div>

        <div className="infoCard">
          <h3>Build trust fast</h3>
          <p>
            Real project posts help new customers see that you actually do the
            kind of work they need.
          </p>
        </div>

        <div className="infoCard">
          <h3>Keep it simple</h3>
          <p>
            You don’t need fancy wording. Just explain what was wrong, what you
            fixed, and how it turned out.
          </p>

          <Link
            href="/contractor-facebook-post-generator"
            className="inline-block mt-6 rounded-xl bg-orange-600 px-6 py-3 font-bold text-white"
          >
            Try Facebook Post Generator
          </Link>
          <Link
  href="/google-business-post-generator"
  className="inline-block mt-4 rounded-xl bg-orange-600 px-6 py-3 font-bold text-white"
>
  Google Business Post Generator
</Link>
        </div>
      </section>

      <section className="builderSection">
        <div className="sectionIntro">
          <p className="eyebrow dark">Posting tips</p>

          <h2>Why before-and-after posts work for contractors</h2>

          <p>
            Before-and-after posts are some of the easiest content for
            contractors and local service businesses because they show proof.
            A customer can quickly see the problem, understand the work, and
            picture what you could do for them.
          </p>

          <p>
            These posts work especially well for landscaping, gravel driveways,
            roofing repairs, remodeling, concrete, cleanup work, painting,
            pressure washing, and property maintenance.
          </p>
        </div>
      </section>

            <footer className="mt-20 border-t border-neutral-800 py-10 text-sm text-neutral-400">
  <div className="max-w-5xl mx-auto px-6 flex flex-col gap-6">

    <div className="flex flex-col gap-2">
      <p className="text-white font-bold">ShowYourWork</p>
      <p>Simple post builder for contractors and local service businesses.</p>
    </div>

    <div className="flex flex-col gap-2">
      <p className="text-white font-semibold">Links</p>
      <div className="flex flex-col gap-1">
        <a href="/contractor-facebook-post-generator">Facebook Post Generator</a>
        <a href="/before-after-post-generator">Before & After Generator</a>
        <a href="/google-business-post-generator">Google Business Posts</a>
        <a href="/job-completed-post-generator">Job Completed Posts</a>
        <a href="/faq">FAQ</a>
      </div>
    </div>

    <div className="flex flex-col gap-2">
      <p className="text-white font-semibold">Contact</p>
      <p>Questions or feedback?</p>
      <a href="mailto:altifygenerator@gmail.com" className="underline">
        altifygenerator@gmail.com
      </a>
    </div>

    <p className="text-xs text-neutral-500 mt-4">
      © {new Date().getFullYear()} ShowYourWork
    </p>

  </div>
  </footer>
    </main>
  );
}