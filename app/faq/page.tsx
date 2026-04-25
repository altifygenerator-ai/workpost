import Link from "next/link";

export const metadata = {
  title: "What Should I Post as a Contractor? | ShowYourWork",
  description:
    "Simple answers for contractors and local service businesses on what to post, how often to post, and how to turn daily work into posts that get more calls.",
};

const faqs = [
  {
    q: "What should I post as a contractor?",
    a: "Post real work. Finished jobs, before-and-afters, service reminders, customer updates, seasonal tips, and quick photos from the jobsite all work well.",
  },
  {
    q: "Do Facebook posts actually help contractors get more calls?",
    a: "They can. People like seeing proof that you are active, reliable, and doing real work. Recent posts make your business look alive and easier to trust.",
  },
  {
    q: "How often should a local service business post?",
    a: "You do not need to post every day. A few useful posts each week is usually better than posting random filler.",
  },
  {
    q: "What kind of posts work best for local businesses?",
    a: "Finished job posts, before-and-after posts, service promos, Google Business updates, and short local ads are all strong options.",
  },
  {
    q: "What do I type into ShowYourWork?",
    a: "Just type what happened like you would tell someone in person. For example, finished a driveway, repaired a roof, or cleaned up a yard.",
  },
  {
    q: "Will the posts sound fake?",
    a: "No. The goal is simple, local, natural wording that sounds like a real business owner.",
  },
  {
    q: "Can I use this for Google Business Profile posts?",
    a: "Yes. You can use it for short Google updates, Facebook posts, service reminders, and simple promos.",
  },
  {
    q: "Is this only for contractors?",
    a: "No. It works for roofers, gravel companies, landscapers, HVAC techs, remodelers, cleaners, mechanics, and most local service businesses.",
  },
];

export default function FAQPage() {
  return (
    <main className="faqShell">
      <nav className="faqNav">
        <Link href="/" className="faqLogo">
          ShowYourWork
        </Link>

        <div className="faqNavActions">
          <Link href="/" className="faqNavLink">
            Home
          </Link>
          <Link href="/#builder" className="faqNavBtn">
            Try It
          </Link>
        </div>
      </nav>

      <section className="faqHeader">
        <p className="faqKicker">Contractor Posting FAQ</p>
        <h1>What should I post as a contractor?</h1>
        <p>
          Simple answers for contractors, trades, and local service businesses
          that want to post more, stay visible, and get more calls without
          overthinking what to say.
        </p>
      </section>

      <section className="faqGrid">
        {faqs.map((item) => (
          <article className="faqCard" key={item.q}>
            <h2>{item.q}</h2>
            <p>{item.a}</p>
          </article>
        ))}
      </section>

      <section className="faqCTA">
        <h2>Ready to turn your work into a post?</h2>
        <p>Type what you did today and get a post ready to copy and use.</p>
        <Link href="/#builder">Try ShowYourWork</Link>
      </section>
    </main>
  );
}