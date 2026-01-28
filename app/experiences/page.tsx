import Section from "@/components/Section";
import CtaBlock from "@/components/CtaBlock";

const offerings = [
  { title: "Corporate Offsites", bullets: ["Agenda design & flow","Programming","Venue + vendors","Culture moments built in"] },
  { title: "Recognition & Award Shows", bullets: ["Awards structure","Run of show","Production + visuals","Winner experience"] },
  { title: "Team Experiences", bullets: ["High-energy team building","No forced fun","Connection-by-design","Momentum after"] },
  { title: "Launches & Milestones", bullets: ["Kickoffs + launches","Executive storytelling","Audience engagement","Headline energy"] },
  { title: "Culture & Community Moments", bullets: ["ERG events","Town halls that don’t drag","Belonging-forward","High participation"] },
  { title: "Private Celebrations", bullets: ["Milestones","Custom concepts","Vendor orchestration","Elevated details"] },
];

export default function ExperiencesPage() {
  return (
    <main>
      <Section kicker="Experiences" title="Choose your moment. We’ll make it legendary."
        subtitle="Brag Lab is corporate-first — but our standard stays the same: bold ideas, cinematic energy, and execution that feels effortless."
        className="pt-14"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {offerings.map((o) => (
            <div key={o.title} className="card p-7">
              <div className="text-lg font-extrabold tracking-tighter2">{o.title}</div>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {o.bullets.map((b) => (
                  <li key={b} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold flex-none" /><span>{b}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
      <CtaBlock title="Let’s build your Brag Lab moment." />
    </main>
  );
}
