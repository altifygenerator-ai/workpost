import PostBuilder from "@/components/PostBuilder";
import Link from "next/link";
export const metadata = {
  title: "What to Post as a Contractor | Simple Post Builder",
  description:
    "Not sure what to post? Turn your finished jobs, services, and daily work into simple posts that bring in more calls and local customers.",
};
export default function Home() {
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
            <p className="eyebrow">For contractors & local service businesses</p>

            <h1>Turn today’s work into a post that gets seen.</h1>

            <p className="heroText">
              Type what you did, choose the kind of post you need, and get
              something ready to copy, paste, and publish. Simple, fast, and
              built for real businesses that don’t have time to overthink
              content.
            </p>

            <div className="heroTags">
              <span>Finished jobs</span>
              <span>Service promos</span>
              <span>Google posts</span>
              <span>Facebook ads</span>
            </div>
          </div>

          <div className="previewCard">
            <p className="previewLabel">Example</p>
            <div className="previewInput">
              Finished a gravel driveway outside Hot Springs. Customer had
              washout issues after every rain. Added fresh gravel, shaped it
              up, and cleaned up the edges.
            </div>

            <div className="previewOutput">
              Knocked out a gravel driveway outside Hot Springs today. This one
              had been washing out pretty bad after rain, so we brought in fresh
              gravel, shaped it back up, and cleaned the edges so water can move
              better. If your driveway is getting rough, holler at us and we can
              take a look.
            </div>
          </div>
        </div>
      </section>

      <section id="builder" className="builderSection">
        <div className="sectionIntro">
          <p className="eyebrow dark">Post Builder</p>
          <h2>Tell it what happened. Get a post worth using.</h2>
          <p>
            No fancy setup. No content calendar. Just a simple tool for turning
            real work into something you can post.
          </p>
        </div>

        <PostBuilder />
      </section>

      <section className="infoSection">
        <div className="infoCard">
          <h3>Built for busy owners</h3>
          <p>
            Most people know they should post more. They just don’t know what to
            say after a long day.
          </p>
     <Link
  href="/before-after-post-generator"
  className="inline-block mt-4 rounded-xl bg-orange-600 px-6 py-3 font-bold text-white"
>
  Try Before & After Post Generator
</Link>

<Link
  href="/contractor-facebook-post-generator"
  className="inline-block mt-4 rounded-xl bg-orange-600 px-6 py-3 font-bold text-white"
>
  Try the Facebook Post Generator
</Link>
        </div>

        <div className="infoCard">
          <h3>Made for real work</h3>
          <p>
            Finished jobs, before-and-afters, promos, Google updates, and quick
            Facebook ad starters.
          </p>
        </div>

        <div className="infoCard">
          <h3>Simple by design</h3>
          <p>
            Type your notes, build the post, copy it, and move on.
          </p>
             
        </div>
      </section>

      <footer>
        ShowYourWork — simple post builder for local service businesses.
      </footer>
    </main>
  );
}