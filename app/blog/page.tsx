import Section from "@/components/Section";
import CtaBlock from "@/components/CtaBlock";

const posts = [
  { title: "How to make recognition feel like a headline (not a checkbox)", date: "Coming soon", desc: "The difference between a shoutout and a moment that actually moves people." },
  { title: "Offsites that hit different: the 5 elements teams remember", date: "Coming soon", desc: "Connection-by-design beats another slide deck every time." },
  { title: "The Brag Lab standard: cinematic energy + calm execution", date: "Coming soon", desc: "Why vibe without operations is just chaos in a cute outfit." },
];

export default function BlogPage() {
  return (
    <main>
      <Section kicker="Blog" title="The Brag Board"
        subtitle="Thought leadership, behind-the-scenes, and culture moments — written for people who refuse to do boring."
        className="pt-14"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((p) => (
            <article key={p.title} className="card p-7">
              <div className="kicker">{p.date}</div>
              <h3 className="mt-3 text-xl font-extrabold tracking-tighter2">{p.title}</h3>
              <p className="p mt-3">{p.desc}</p>
            </article>
          ))}
        </div>
      </Section>
      <CtaBlock title="Want Brag Lab to build the moment you’ll blog about later?" />
    </main>
  );
}
