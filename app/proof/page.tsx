import Section from "@/components/Section";
import CtaBlock from "@/components/CtaBlock";

const items = [
  { title: "Recognition Award Show", desc: "Headline-worthy celebration with a tight run-of-show and real payoff.", tags: ["Run of show","Production","Winner experience"] },
  { title: "Corporate Offsite", desc: "Culture-shifting offsite built for clarity, connection, and momentum.", tags: ["Agenda","Facilitation","Moments"] },
  { title: "Launch Moment", desc: "A launch that felt like a moment — designed for energy and buy-in.", tags: ["Story","Engagement","Activation"] },
  { title: "Team Experience", desc: "A team moment people referenced for months because it actually felt good.", tags: ["Connection","Vibe","Participation"] },
];

export default function ProofPage() {
  return (
    <main>
      <Section kicker="Proof" title="Work people still talk about."
        subtitle="Swap placeholders with your real photos and outcomes. Send me 3–5 bullets per event and I’ll format premium case studies."
        className="pt-14"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((p) => (
            <div key={p.title} className="card p-8">
              <div className="text-xl font-extrabold tracking-tighter2">{p.title}</div>
              <p className="p mt-3">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">{p.tags.map((t) => (<span key={t} className="badge">{t}</span>))}</div>
            </div>
          ))}
        </div>
      </Section>
      <CtaBlock title="Want your next case study to be the one people can’t stop talking about?" />
    </main>
  );
}
