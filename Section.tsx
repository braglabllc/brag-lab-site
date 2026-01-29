export default function Section({ kicker, title, subtitle, children, className }: {
  kicker?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`container-pad py-16 ${className ?? ""}`}>
      <div className="max-w-3xl">
        {kicker ? <div className="kicker">{kicker}</div> : null}
        <h2 className="h2 mt-3">{title}</h2>
        {subtitle ? <p className="p mt-4">{subtitle}</p> : null}
      </div>
      {children ? <div className="mt-10">{children}</div> : null}
    </section>
  );
}
