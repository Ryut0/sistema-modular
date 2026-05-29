type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  inverted?: boolean;
};

export function SectionTitle({ eyebrow, title, description, inverted = false }: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      <p className={`text-xs font-extrabold uppercase tracking-[0.16em] ${inverted ? "text-accent" : "text-brand"}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl ${
          inverted ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {description && <p className={`mt-4 text-base leading-7 ${inverted ? "text-slate-300" : "text-slate-600"}`}>{description}</p>}
    </div>
  );
}
