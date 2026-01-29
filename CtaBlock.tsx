import { siteConfig } from "@/components/siteConfig";

export default function CtaBlock({
  title = "Ready to create a moment worth bragging about?",
  subtitle = "Tell us what you’re building. We’ll bring the bold ideas, cinematic energy, and sharp execution."
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="container-pad py-16">
      <div className="card p-10 sm:p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow opacity-70" />
        <div className="relative">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tighter2">
            {title}
          </h3>
          <p className="p mt-4 max-w-2xl mx-auto">{subtitle}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a className="btn btn-primary no-underline" href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">
              {siteConfig.primaryCta}
            </a>
            <a className="btn no-underline" href="/contact">
              Start My Experience
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
