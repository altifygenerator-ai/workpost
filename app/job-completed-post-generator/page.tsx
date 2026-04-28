import Link from "next/link";
import PostBuilder from "@/components/PostBuilder";

export const metadata = {
  title: "Job Completed Post Generator for Contractors | ShowYourWork",
  description:
    "Turn finished jobs into simple posts for contractors and local service businesses. Show your work and stay visible.",
};

export default function JobCompletedPostGenerator() {
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
            <p className="eyebrow">Finished job posts</p>

            <h1>Turn completed jobs into posts that bring in more calls.</h1>

            <p className="heroText">
              Just wrapped up a job? Type what you did and turn it into a clean,
              simple post you can use on Facebook or Google. No overthinking,
              just something you can actually post.
            </p>

            <div className="heroTags">
              <span>Finished jobs</span>
              <span>Daily work</span>
              <span>Local updates</span>
              <span>Quick posts</span>
            </div>
          </div>

          <div className="previewCard">
            <p className="previewLabel">Example</p>

            <div className="previewInput">
              Finished a concrete pad in Glenwood today. Customer needed a
              cleaner area for parking. Prepped the ground, formed it, poured,
              and cleaned everything up.
            </div>

            <div className="previewOutput">
              Knocked out a concrete pad in Glenwood today. This one was for a
              cleaner parking spot, so we prepped the ground, set forms, poured
              it, and cleaned everything up. If you’ve been needing something
              like this done, feel free to reach out.
            </div>
          </div>
        </div>
      </section>

      <section id="builder" className="builderSection">
        <div className="sectionIntro">
          <p className="eyebrow dark">Job Post Builder</p>

          <h2>Finished the job? Turn it into something you can post.</h2>

          <p>
            Most jobs are already good content. This tool helps you turn them
            into simple posts so people can see your work and know what you do.
          </p>
        </div>

        <PostBuilder defaultFormat="Finished Job Post" />
      </section>

      <section className="infoSection">
        <div className="infoCard">
          <h3>Show what you’re doing</h3>
          <p>
            Posting finished jobs keeps your page active and shows customers
            the kind of work you handle every day.
          </p>
        </div>

        <div className="infoCard">
          <h3>Stay top of mind</h3>
          <p>
            When people need your service later, they remember the businesses
            they’ve seen recently.
          </p>
        </div>

        <div className="infoCard">
          <h3>Keep it simple</h3>
          <p>
            No need to write long posts. Just explain what you did and where,
            and you’re good.
          </p>

          <Link
            href="/contractor-facebook-post-generator"
            className="inline-block mt-6 rounded-xl bg-orange-600 px-6 py-3 font-bold text-white"
          >
            Facebook Post Generator
          </Link>
        </div>
      </section>

      <section className="builderSection">
        <div className="sectionIntro">
          <p className="eyebrow dark">Why it works</p>

          <h2>Why posting completed jobs matters</h2>

          <p>
            Most customers check your page before calling. Seeing real,
            finished work gives them confidence that you actually do the kind
            of job they need.
          </p>

          <p>
            Posting regularly also helps keep your business visible and makes
            it easier for people to reach out when they’re ready.
          </p>
        </div>
      </section>

      <footer>
        ShowYourWork — job completed post generator for local service businesses.
      </footer>
    </main>
  );
}