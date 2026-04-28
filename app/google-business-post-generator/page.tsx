import Link from "next/link";
import PostBuilder from "@/components/PostBuilder";

export const metadata = {
  title: "Google Business Post Generator for Contractors | ShowYourWork",
  description:
    "Create simple Google Business Profile posts for contractors and local service businesses. Turn your work into updates that help you get found.",
};

export default function GoogleBusinessPostGenerator() {
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
            <p className="eyebrow">Google Business posts</p>

            <h1>Turn your work into Google updates that help you get found.</h1>

            <p className="heroText">
              Keep your Google Business Profile active by posting updates about
              your work. Type what you did and turn it into a clean, simple post
              customers can see when they search for your services.
            </p>

            <div className="heroTags">
              <span>Google updates</span>
              <span>Local visibility</span>
              <span>Service posts</span>
              <span>Quick updates</span>
            </div>
          </div>

          <div className="previewCard">
            <p className="previewLabel">Example</p>

            <div className="previewInput">
              Installed a new gravel driveway in Hot Springs. Customer needed a
              more stable surface that wouldn’t wash out.
            </div>

            <div className="previewOutput">
              Just wrapped up a gravel driveway installation in Hot Springs.
              This one needed a more stable surface that holds up better through
              rain. If you’re dealing with washout or rough access, we can help
              get it cleaned up.
            </div>
          </div>
        </div>
      </section>

      <section id="builder" className="builderSection">
        <div className="sectionIntro">
          <p className="eyebrow dark">Google Post Builder</p>

          <h2>Keep your Google listing active without overthinking it.</h2>

          <p>
            Regular updates help your business stay visible. This tool helps you
            turn everyday jobs into quick Google posts that show customers
            you’re active and working in their area.
          </p>
        </div>

        <PostBuilder defaultFormat="Google Business Post" />
      </section>

      <section className="infoSection">
        <div className="infoCard">
          <h3>Stay visible locally</h3>
          <p>
            Posting updates helps your business show up stronger when people
            search for services in your area.
          </p>
        </div>

        <div className="infoCard">
          <h3>Show recent work</h3>
          <p>
            Customers are more likely to reach out when they see recent jobs and
            updates tied to real work.
          </p>
        </div>

        <div className="infoCard">
          <h3>Keep it simple</h3>
          <p>
            No need for long posts. Just quick updates about what you’ve done
            and where.
          </p>

          <Link
            href="/contractor-facebook-post-generator"
            className="inline-block mt-6 rounded-xl bg-orange-600 px-6 py-3 font-bold text-white"
          >
            Facebook Post Generator
          </Link>
          <Link
  href="/job-completed-post-generator"
  className="inline-block mt-4 rounded-xl bg-orange-600 px-6 py-3 font-bold text-white"
>
  Job Completed Post Generator
</Link>
        </div>
      </section>

      <section className="builderSection">
        <div className="sectionIntro">
          <p className="eyebrow dark">Why it matters</p>

          <h2>Why post on your Google Business Profile?</h2>

          <p>
            Google Business Profile posts are a simple way to show that your
            business is active. When someone searches for your service, seeing
            recent updates can make them more confident reaching out.
          </p>

          <p>
            Posting regularly also helps reinforce your services and location,
            which can improve how your business shows up over time.
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