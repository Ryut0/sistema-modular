import type { LucideIcon } from "lucide-react";
import { CircleDot } from "lucide-react";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  body: string;
  dark?: boolean;
};

export function SectionIntro({ eyebrow, title, body, dark = false }: SectionIntroProps) {
  return (
    <div>
      <p className={dark ? "text-sm font-medium text-cyan-300" : "text-sm font-medium text-cyan-700"}>{eyebrow}</p>
      <h2 className={dark ? "mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl" : "mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl"}>
        {title}
      </h2>
      <p className={dark ? "mt-5 max-w-2xl text-base leading-7 text-zinc-400" : "mt-5 max-w-2xl text-base leading-7 text-zinc-600"}>
        {body}
      </p>
    </div>
  );
}

type TechStackProps = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

export function TechStack({ title, icon: Icon, items }: TechStackProps) {
  return (
    <article className="rounded-md border border-zinc-200 bg-[#f7f8f5] p-6">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-md bg-zinc-950 text-white">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700">{item}</span>
        ))}
      </div>
    </article>
  );
}

type FooterColumnProps = {
  title: string;
  links: string[];
};

export function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">{title}</h3>
      <div className="mt-4 grid gap-2.5">
        {links.map((link) => (
          <a key={link} href="#demo" className="text-sm font-medium text-white transition hover:text-cyan-300">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}

type OrgNodeProps = {
  title: string;
  tone: string;
  detail: string;
};

export function OrgNode({ title, tone, detail }: OrgNodeProps) {
  return (
    <div className={`rounded-md border px-4 py-3 shadow-sm ${tone}`}>
      <div className="flex items-center gap-2 text-sm font-semibold">
        <CircleDot className="h-4 w-4" />
        {title}
      </div>
      <p className="mt-1 text-xs opacity-75">{detail}</p>
    </div>
  );
}
