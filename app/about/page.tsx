import Section from "@/components/Section";
import CtaBlock from "@/components/CtaBlock";

export default function AboutPage() {
  return (
    <main>
      <Section kicker="About" title="Brag Lab was built for people who refuse to do boring."
        subtitle="We turn “we should do something” into a moment your company still quotes next quarter."
        className="pt-14"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="card p-8">
            <div className="kicker">The POV</div>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tighter2">If it matters, it deserves a moment.</h3>
            <p className="p mt-4">Recognition. Connection. Milestones. Culture. These aren’t “nice-to-haves.” They’re the difference between a team that survives and a team that shows up for each other.</p>
          </div>
          <div className="card p-8">
            <div className="kicker">The standard</div>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tighter2">Main-character energy. Calm execution.</h3>
            <p className="p mt-4">Bold ideas, tight timelines, clean vendor orchestration, and details that make people say “who did this?”</p>
          </div>
        </div>
      </Section>
      <CtaBlock />
    </main>
  );
}
