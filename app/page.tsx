import Hero from "@/components/Hero";
import Section from "@/components/Section";
import CtaBlock from "@/components/CtaBlock";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Section kicker="What we do" title="High-impact experiences for teams that refuse to be boring."
        subtitle="Offsites, recognition award shows, launches, and culture moments built to hit different — and actually land."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { t: "Zero tolerance for average", d: "If it’s forgettable, it’s not Brag Lab." },
            { t: "Cinematic energy, sharp execution", d: "Bold concepts with real project management behind them." },
            { t: "Main-character standards", d: "Your people walk out feeling seen, valued, and hyped." },
          ].map((b) => (
            <div key={b.t} className="card p-7">
              <div className="font-bold text-lg">{b.t}</div>
              <div className="text-sm text-muted mt-3">{b.d}</div>
            </div>
          ))}
        </div>
      </Section>
      <CtaBlock />
    </main>
  );
}
