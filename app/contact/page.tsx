import Section from "@/components/Section";
import { siteConfig } from "@/components/siteConfig";

export default function ContactPage() {
  return (
    <main>
      <Section kicker="Contact" title="Let’s build your Brag Lab moment."
        subtitle="Corporate-first inquiries welcome. Tell us the vibe, the goal, and the stakes — we’ll handle the rest."
        className="pt-14"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="card p-8">
            <div className="kicker">Book</div>
            <div className="mt-2 text-2xl font-extrabold tracking-tighter2">Want to talk first?</div>
            <p className="p mt-3">Use the booking link to lock a quick consult. If you’re not sure what you need, that’s fine — we’ll figure it out fast.</p>
            <a className="btn btn-primary no-underline mt-6" href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">{siteConfig.primaryCta}</a>
            <div className="hr my-8" />
            <div className="kicker">Email</div>
            <div className="mt-2 font-bold">{siteConfig.contactEmail}</div>
            <a className="btn no-underline mt-4" href={`mailto:${siteConfig.contactEmail}`}>Email Brag Lab</a>
          </div>

          <div className="card p-8">
            <div className="kicker">Quick inquiry</div>
            <div className="mt-2 text-2xl font-extrabold tracking-tighter2">Tell us what you’re building.</div>
            <p className="p mt-3">This opens an email draft with the right prompts. We can upgrade to a true form later.</p>

            <form className="mt-6 space-y-4" onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const subject = encodeURIComponent(`Brag Lab Inquiry — ${String(fd.get("type")||"Experience")}`);
              const body = encodeURIComponent(
`Name: ${String(fd.get("name")||"")}
Company: ${String(fd.get("company")||"")}
Type: ${String(fd.get("type")||"")}
Date/Timing: ${String(fd.get("date")||"")}
Budget Range: ${String(fd.get("budget")||"")}

Details:
${String(fd.get("details")||"")}`
              );
              window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
            }}>
              <div>
                <label className="text-sm text-muted">Name</label>
                <input name="name" required className="mt-2 w-full rounded-xl border border-hairline bg-white/[0.03] px-4 py-3 outline-none focus:border-gold/70" />
              </div>
              <div>
                <label className="text-sm text-muted">Company</label>
                <input name="company" className="mt-2 w-full rounded-xl border border-hairline bg-white/[0.03] px-4 py-3 outline-none focus:border-gold/70" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted">Experience Type</label>
                  <select name="type" className="mt-2 w-full rounded-xl border border-hairline bg-ink px-4 py-3 outline-none focus:border-gold/70">
                    <option>Corporate Offsite</option>
                    <option>Recognition / Award Show</option>
                    <option>Team Experience</option>
                    <option>Launch / Milestone</option>
                    <option>Culture / Community Moment</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-muted">Date / Timing</label>
                  <input name="date" placeholder="e.g., March 2026" className="mt-2 w-full rounded-xl border border-hairline bg-white/[0.03] px-4 py-3 outline-none focus:border-gold/70" />
                </div>
              </div>
              <div>
                <label className="text-sm text-muted">Budget Range</label>
                <select name="budget" className="mt-2 w-full rounded-xl border border-hairline bg-ink px-4 py-3 outline-none focus:border-gold/70">
                  <option>$5k–$10k</option>
                  <option>$10k–$25k</option>
                  <option>$25k–$50k</option>
                  <option>$50k+</option>
                  <option>Not sure</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-muted">Details</label>
                <textarea name="details" rows={5} placeholder="Audience size, location, goals, vibe, non-negotiables…" className="mt-2 w-full rounded-xl border border-hairline bg-white/[0.03] px-4 py-3 outline-none focus:border-gold/70" />
              </div>
              <button className="btn btn-primary w-full" type="submit">Send Inquiry</button>
            </form>
          </div>
        </div>
      </Section>
    </main>
  );
}
