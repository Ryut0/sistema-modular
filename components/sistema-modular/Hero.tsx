import {
  ArrowRight,
  Sparkles,
  Video
} from "lucide-react";
import {
  assetTags,
  assetTimeline,
  automationSteps,
  commandCenterMetrics,
  commandCenterNavIcons,
  commandCenterTags,
  commandCenterTickets,
  heroStats
} from "./data";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-[#f7f8f5]/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="Sistema Modular">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-zinc-950 text-xs font-semibold text-white">SM</span>
          <span className="font-semibold tracking-tight">Sistema Modular</span>
        </a>
        <div className="hidden items-center gap-7 text-sm font-medium text-zinc-600 lg:flex">
          <a href="#modulos" className="hover:text-zinc-950">Modulos</a>
          <a href="#helpdesk" className="hover:text-zinc-950">Helpdesk</a>
          <a href="#inventario" className="hover:text-zinc-950">Inventario</a>
          <a href="#tecnologia" className="hover:text-zinc-950">Tecnologia</a>
        </div>
        <a href="#demo" className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-950 px-4 text-sm font-medium text-white transition hover:bg-zinc-800">
          Ver plataforma
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </nav>
    </header>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-28 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-16 -z-10 h-px bg-zinc-200" />
      <div className="mx-auto grid max-w-7xl gap-12 pb-20 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:pb-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-600">
            <Sparkles className="h-4 w-4 text-amber-500" />
            Plataforma operacional inteligente y modular
          </div>
          <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Centraliza operaciones, automatiza procesos y conecta equipos en tiempo real.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Una plataforma empresarial moderna para helpdesk, inventario, SLA dinamicos, auditoria, organizacion visual, permisos modulares y colaboracion integrada.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#demo" className="inline-flex h-12 items-center justify-center rounded-md bg-zinc-950 px-5 text-sm font-medium text-white transition hover:bg-zinc-800">
              Explorar arquitectura
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#modulos" className="inline-flex h-12 items-center justify-center rounded-md border border-zinc-300 bg-white px-5 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50">
              Ver modulos
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-zinc-200 pt-6">
            {heroStats.map(([value, label]) => (
              <div key={label}>
                <strong className="block text-2xl font-semibold">{value}</strong>
                <span className="mt-1 block text-sm text-zinc-500">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <CommandCenter />
      </div>
    </section>
  );
}

function CommandCenter() {
  return (
    <div className="border border-zinc-900 bg-zinc-950 text-white shadow-[0_28px_90px_rgba(15,23,42,0.25)]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-rose-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>
        <span className="text-xs font-semibold uppercase tracking-wide text-zinc-400">Operational OS</span>
      </div>

      <div className="grid min-h-[610px] lg:grid-cols-[76px_1fr_300px]">
        <aside className="hidden border-r border-white/10 bg-black/20 px-3 py-5 lg:block">
          <div className="space-y-3">
            {commandCenterNavIcons.map((Icon, index) => (
              <span key={index} className={index === 0 ? "grid h-11 w-11 place-items-center rounded-md bg-white text-zinc-950" : "grid h-11 w-11 place-items-center rounded-md text-zinc-500"}>
                <Icon className="h-5 w-5" />
              </span>
            ))}
          </div>
        </aside>

        <div className="p-5">
          <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300">Dashboard contextual</p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight">Operacion tecnica en vivo</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {commandCenterTags.map((item) => (
                <span key={item} className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300">{item}</span>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {commandCenterMetrics.map(([value, label, color]) => (
              <div key={label} className="rounded-md border border-white/10 bg-white/[0.04] p-4">
                <strong className={`block text-2xl font-semibold ${color}`}>{value}</strong>
                <span className="mt-1 block text-xs text-zinc-400">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-3 grid grid-cols-[1fr_92px_72px] gap-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                <span>Flujo</span>
                <span>Estado</span>
                <span>SLA</span>
              </div>
              <div className="space-y-3">
                {commandCenterTickets.map(([id, title, status, sla, color]) => (
                  <div key={id} className="grid grid-cols-[1fr_92px_72px] gap-3 rounded-md border border-white/10 bg-white/[0.04] p-3 text-sm">
                    <div>
                      <span className="block text-xs font-medium text-zinc-500">{id}</span>
                      <span className="mt-1 block font-medium text-white">{title}</span>
                    </div>
                    <span className="pt-4 text-xs font-medium text-zinc-300">{status}</span>
                    <div className="pt-3">
                      <span className="block text-xs font-medium text-zinc-300">{sla}</span>
                      <span className="mt-2 block h-1.5 overflow-hidden rounded-full bg-white/10">
                        <span className={`block h-full w-2/3 ${color}`} />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-md border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Automatizacion activa</p>
              <h3 className="mt-3 text-lg font-semibold">Escalamiento por estructura organizacional</h3>
              <div className="mt-5 space-y-3">
                {automationSteps.map((step, index) => (
                  <div key={step} className="flex items-center gap-3 text-sm text-zinc-300">
                    <span className={index < 3 ? "h-2.5 w-2.5 rounded-full bg-cyan-300" : "h-2.5 w-2.5 rounded-full bg-zinc-600"} />
                    {step}
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Videollamada</p>
                <div className="mt-3 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-md bg-emerald-400 text-zinc-950">
                    <Video className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-zinc-300">Sala tecnica lista para incidente critico</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="hidden border-l border-white/10 bg-black/20 p-5 lg:block">
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300">Activo vinculado</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight">Laptop Lab-42</h3>
          <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
            {assetTags.map((item) => (
              <span key={item} className="rounded-md bg-white/5 px-2 py-2 text-zinc-300">{item}</span>
            ))}
          </div>
          <div className="mt-8 space-y-4">
            {assetTimeline.map(([event, time]) => (
              <div key={event} className="border-l border-cyan-300/40 pl-4">
                <p className="text-sm font-medium text-white">{event}</p>
                <p className="mt-1 text-xs text-zinc-500">{time}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
