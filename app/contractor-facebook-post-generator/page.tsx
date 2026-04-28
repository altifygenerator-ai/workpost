import Link from "next/link";
import PostBuilder from "@/components/PostBuilder";

export const metadata = {
  title:
    "Contractor Facebook Post Generator | Create Posts That Get More Calls",
  description:
    "Create Facebook posts for contractors in seconds. Turn job notes into simple posts that show your work, build trust, and bring in more local customers.",
};

export default function ContractorFacebookPostGenerator() {
  return (
    <main>
      <section className="hero">
        <nav className="nav">
          <Link href="/" className="logo">
            ShowYourWork
          </Link>

          <div className="navActions">
            <Link href="/faq" className="navLink">
              FAQ
            </Link>

            <a href="#builder" className="navBtn">
              Try It
            </a>
          </div>
        </nav>

        <div className="heroGrid">
          <div>
            <p className="eyebrow">Facebook posts for contractors</p>

            <h1>Turn job notes into Facebook posts people actually read.</h1>

            <p className="heroText">
              Finished a job, cleaned up a property, poured concrete, fixed a
              roof, or knocked out a driveway? Type what happened and turn it
              into a simple post you can copy and put on Facebook.
            </p>

            <div className="heroTags">
              <span>Finished job posts</span>
              <span>Before & after posts</span>
              <span>Local service updates</span>
              <span>More consistent posting</span>
            </div>
          </div>

          <div className="previewCard">
            <p className="previewLabel">Example</p>

            <div className="previewInput">
              Repaired a leaking roof in Glenwood today. Customer had water
              coming in around flashing. Replaced bad section, sealed it up, and
              checked the surrounding area.
            </div>

            <div className="previewOutput">
              Took care of a roof leak in Glenwood today. This one had water
              sneaking in around the flashing, so we replaced the bad section,
              sealed everything back up, and checked the area around it to make
              sure it was good. If you’ve got a leak showing up after rain, it’s
              better to catch it early.
            </div>
          </div>
        </div>
      </section>

      <section id="builder" className="builderSection">
        <div className="sectionIntro">
          <p className="eyebrow dark">Facebook Post Builder</p>

          <h2>Write a Facebook post without staring at a blank screen.</h2>

          <p>
            Just type what you did on the job. ShowYourWork turns it into a
            natural post that sounds like a real local business, not a marketing
            agency.
          </p>
        </div>

        <PostBuilder defaultFormat="Finished Job Post" />
      </section>

      <section className="infoSection">
        <div className="infoCard">
          <h3>Post real work</h3>
          <p>
            Finished jobs, repairs, cleanups, driveways, roofs, remodels, and
            service calls all make good Facebook posts.
          </p>
        </div>

        <div className="infoCard">
          <h3>Stay visible</h3>
          <p>
            When people see recent work on your page, they’re more likely to
            remember you when they need help.
          </p>
        </div>

        <div className="infoCard">
          <h3>Keep it natural</h3>
          <p>
            No weird sales copy. No over-polished wording. Just a clean post you
            can copy, tweak, and use.
          </p>

          <Link
            href="/#builder"
            className="inline-block mt-6 rounded-xl bg-orange-600 px-6 py-3 font-bold text-white"
          >
            Try the Main Builder
          </Link>
        </div>
      </section>

      <section className="builderSection">
        <div className="sectionIntro">
          <p className="eyebrow dark">Why it helps</p>

          <h2>What should contractors post on Facebook?</h2>

          <p>
            Most contractors already have something worth posting. The problem
            is usually figuring out how to word it. Finished jobs,
            before-and-afters, service reminders, seasonal updates, and quick
            jobsite notes all help customers see that you’re active and doing
            real work.
          </p>

          <p>
            A simple Facebook post can help past customers remember you, give
            new customers confidence, and make your business page look alive
            when someone checks you out before calling.
          </p>
        </div>
      </section>

      <footer>
        ShowYourWork — contractor Facebook post generator for local service
        businesses.
      </footer>
    </main>
  );
}