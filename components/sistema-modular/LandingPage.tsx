import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleDot,
  Code2,
  Cpu,
  ScanLine,
  Zap
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { backend, experience, frontend, future, helpdeskFlow, inventory, modules, operatingSystem } from "./data";
import { Header, Hero } from "./Hero";
import { TypewriterWord } from "./TypewriterWord";
import { FooterColumn, OrgNode, SectionIntro, TechStack } from "./ui";

export default function SistemaModularLanding() {
  return (
    <main className="min-h-screen bg-[#f7f8f5] text-zinc-950">
      <Header />
      <Hero />
      <OperatingLayer />
      <Modules />
      <Helpdesk />
      <Inventory />
      <Organization />
      <Experience />
      <Technology />
      <Future />
      <FinalCTA />
      <FooterReveal />
    </main>
  );
}

function OperatingLayer() {
  return (
    <section className="border-y border-zinc-200 bg-white px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <SectionIntro
          eyebrow="Mucho mas que tickets"
          title="No es un CRUD tradicional ni un ERP antiguo."
          body="Es un ecosistema operacional inteligente: tickets, inventario, permisos, automatizaciones, calendario, notificaciones, auditoria y reportes comparten una misma base modular."
        />
        <div className="grid gap-3">
          {operatingSystem.map((row, rowIndex) => (
            <div key={rowIndex} className="grid gap-3 sm:grid-cols-4">
              {row.map((item) => (
                <div key={item} className="rounded-md border border-zinc-200 bg-[#f7f8f5] p-4 text-sm font-medium text-zinc-700">
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Modules() {
  return (
    <section id="modulos" className="px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <SectionIntro
            eyebrow="Arquitectura modular"
            title="Cada modulo vive independiente, pero opera conectado."
            body="Puedes crear nuevos modulos empresariales sin rehacer usuarios, autenticacion, permisos, notificaciones, calendario, automatizaciones ni motor organizacional."
          />
          <p className="max-w-xl text-base leading-7 text-zinc-600">
            Helpdesk, inventario, gestion administrativa, mantenimiento y operaciones futuras comparten una arquitectura escalable, desacoplada y preparada para crecimiento.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {modules.map(({ name, tag, icon: Icon, body, points }) => (
            <article key={name} className="rounded-md border border-zinc-200 bg-white p-6">
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-zinc-950 text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="rounded-md bg-[#eef6f3] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">{tag}</span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight">{name}</h3>
              <p className="mt-3 leading-7 text-zinc-600">{body}</p>
              <div className="mt-6 grid gap-2 sm:grid-cols-3">
                {points.map((point) => (
                  <span key={point} className="rounded-md border border-zinc-200 px-3 py-2 text-xs font-medium text-zinc-600">{point}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Helpdesk() {
  return (
    <section id="helpdesk" className="bg-zinc-950 px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr]">
        <SectionIntro
          dark
          eyebrow="Helpdesk operacional inteligente"
          title="El nucleo del sistema controla el ticket completo."
          body="Cada ticket mantiene trazabilidad total desde su creacion hasta su cierre: FSM, SLA inteligentes, asignacion automatica, escalamientos, reprocesos, validacion y auditoria."
        />
        <div className="grid gap-4">
          {helpdeskFlow.map(([title, body], index) => (
            <div key={title} className="grid gap-4 border-t border-white/15 py-5 sm:grid-cols-[64px_1fr_auto] sm:items-center">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-white text-sm font-semibold text-zinc-950">{index + 1}</span>
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-zinc-400">{body}</p>
              </div>
              <ChevronRight className="hidden h-5 w-5 text-zinc-600 sm:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Inventory() {
  return (
    <section id="inventario" className="px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div className="border border-zinc-200 bg-white p-5">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-600">Inventario inteligente</p>
              <h3 className="mt-1 text-2xl font-semibold">Ciclo de vida del activo</h3>
            </div>
            <ScanLine className="h-6 w-6 text-zinc-500" />
          </div>
          <div className="mt-5 grid gap-3">
            {["Registro QR", "Asignacion a usuario", "Ticket asociado", "Mantenimiento", "Auditoria historica"].map((item, index) => (
              <div key={item} className="grid grid-cols-[40px_1fr_auto] items-center gap-3 rounded-md border border-zinc-200 p-3">
                <span className="grid h-8 w-8 place-items-center rounded-md bg-[#fff7e8] text-sm font-semibold text-amber-700">{index + 1}</span>
                <span className="font-medium">{item}</span>
                <Check className="h-4 w-4 text-emerald-600" />
              </div>
            ))}
          </div>
        </div>
        <SectionIntro
          eyebrow="Inventario y trazabilidad total"
          title="La plataforma puede reconstruir la vida completa de un activo."
          body="Gestiona activos, dispositivos, componentes, herramientas y equipos especializados con historial tecnico, tickets relacionados, codigo QR unico, ubicacion organizacional y asociacion con usuarios o areas."
        />
      </div>
      <div className="mx-auto mt-10 grid max-w-7xl gap-4 md:grid-cols-4">
        {inventory.map(([title, body]) => (
          <article key={title} className="border-t border-zinc-200 pt-5">
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Organization() {
  return (
    <section className="bg-[#eef6f3] px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
        <SectionIntro
          eyebrow="Organizacion visual y operacional"
          title="Un mapa vivo de departamentos, areas, cargos, bloques y laboratorios."
          body="La estructura deja de ser una lista plana. Cada area, sede y responsable se conecta visualmente para automatizar asignaciones, SLAs y rutas de escalamiento."
        />
        <div className="overflow-hidden rounded-md border border-emerald-900/10 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.08)]">
          <div className="border-b border-zinc-200 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">Organigrama operacional</p>
            <h3 className="mt-1 text-xl font-semibold tracking-tight">Jerarquia clara para reglas, responsables y escalamiento</h3>
          </div>
          <div className="relative p-6">
            <div className="mx-auto max-w-5xl">
              <div className="mx-auto w-full max-w-xs">
                <OrgNode title="Direccion general" tone="bg-zinc-950 text-white border-zinc-950" detail="Gobierno, prioridad y reglas globales" />
              </div>

              <div className="mx-auto hidden h-10 w-px bg-zinc-300 md:block" />
              <div className="relative hidden md:block">
                <div className="absolute left-[16.66%] right-[16.66%] top-0 h-px bg-zinc-300" />
                <div className="grid grid-cols-3">
                  <span className="mx-auto h-10 w-px bg-zinc-300" />
                  <span className="mx-auto h-10 w-px bg-zinc-300" />
                  <span className="mx-auto h-10 w-px bg-zinc-300" />
                </div>
              </div>

              <div className="mt-5 grid gap-4 md:mt-0 md:grid-cols-3">
                <OrgBranch
                  title="Operaciones"
                  tone="bg-emerald-700 text-white border-emerald-700"
                  detail="Atencion diaria"
                  teams={["Bloque A", "Laboratorio", "Mantenimiento"]}
                />
                <OrgBranch
                  title="Tecnologia"
                  tone="bg-cyan-700 text-white border-cyan-700"
                  detail="Soporte tecnico"
                  teams={["Soporte N1", "Soporte N2", "Infraestructura"]}
                />
                <OrgBranch
                  title="Administracion"
                  tone="bg-amber-500 text-zinc-950 border-amber-500"
                  detail="Gestion interna"
                  teams={["Compras", "Activos", "Aprobaciones"]}
                />
              </div>
            </div>

            <div className="mt-8 grid gap-3 border-t border-zinc-200 pt-5 sm:grid-cols-3">
              {[
                ["Peso operacional", "Prioridad por area"],
                ["Relaciones visuales", "Responsables conectados"],
                ["Automatizacion", "SLA segun estructura"]
              ].map(([title, body]) => (
                <div key={title} className="rounded-md border border-zinc-200 bg-[#f7f8f5] px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">{title}</p>
                  <p className="mt-1 text-sm font-semibold text-zinc-900">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OrgBranch({ title, tone, detail, teams }: { title: string; tone: string; detail: string; teams: string[] }) {
  return (
    <div className="relative">
      <OrgNode title={title} tone={tone} detail={detail} />
      <div className="mx-auto h-5 w-px bg-zinc-300" />
      <div className="rounded-md border border-zinc-200 bg-[#f7f8f5] p-3">
        <div className="grid gap-2">
          {teams.map((team) => (
            <div key={team} className="grid grid-cols-[28px_1fr_auto] items-center gap-2 rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-zinc-950 text-[10px] font-semibold text-white">
                {team.slice(0, 2).toUpperCase()}
              </span>
              <span>{team}</span>
              <CircleDot className="h-4 w-4 text-cyan-700" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section className="px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Experiencia moderna y profesional"
          title="Rapida, limpia, modular, dinamica e intuitiva."
          body="La plataforma combina temas avanzados, dark mode profesional, responsive, PWA, notificaciones inteligentes, sidebar modular y dashboard contextual."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {experience.map(([title, body, Icon]) => {
            const TypedIcon = Icon as LucideIcon;
            return (
              <article key={title as string} className="border-t border-zinc-200 pt-5">
                <TypedIcon className="h-5 w-5 text-cyan-700" />
                <h3 className="mt-5 font-semibold">{title as string}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{body as string}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Technology() {
  return (
    <section id="tecnologia" className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.72fr_1.28fr]">
        <SectionIntro
          eyebrow="Tecnologia moderna y escalable"
          title="Arquitectura preparada para crecer sin rehacer el sistema principal."
          body="Backend desacoplado, frontend moderno, tiempo real, cache, autenticacion segura y una base lista para nuevos modulos empresariales."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <TechStack title="Backend" icon={Cpu} items={backend} />
          <TechStack title="Frontend" icon={Code2} items={frontend} />
        </div>
      </div>
    </section>
  );
}

function Future() {
  return (
    <section
      className="bg-zinc-950 bg-fixed bg-center px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-28"
      style={{
        backgroundImage:
          "linear-gradient(rgba(9,9,11,0.88), rgba(9,9,11,0.88)), linear-gradient(90deg, rgba(34,211,238,0.12) 1px, transparent 1px), linear-gradient(rgba(34,211,238,0.10) 1px, transparent 1px)",
        backgroundSize: "auto, 72px 72px, 72px 72px"
      }}
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
        <SectionIntro
          dark
          eyebrow="Preparado para el futuro"
          title="No construimos un panel administrativo tradicional."
          body="Construimos una plataforma empresarial inteligente, colaborativa y preparada para operaciones reales: extensible, multiempresa y lista para analitica avanzada."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {future.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] p-4">
              <Zap className="h-4 w-4 text-amber-300" />
              <span className="text-sm font-medium text-zinc-300">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="demo" className="px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 border-y border-zinc-200 py-12 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-sm font-medium text-cyan-700">Una plataforma operacional moderna</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Centraliza soporte, inventario, permisos, automatizacion y trazabilidad en un solo ecosistema.
          </h2>
        </div>
        <a href="mailto:demo@sistemamodular.com" className="inline-flex h-12 items-center justify-center rounded-md bg-zinc-950 px-5 text-sm font-medium text-white transition hover:bg-zinc-800">
          Solicitar demo
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-5 pb-10 pt-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 pt-10 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-white text-xs font-semibold text-zinc-950">NX</span>
            <p className="font-semibold">Sistema Modular</p>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-400">
            Plataforma operacional inteligente para helpdesk, inventario, permisos, automatizacion y trazabilidad.
          </p>
        </div>
        <FooterColumn title="Producto" links={["Modulos", "Helpdesk", "Inventario", "Organizacion"]} />
        <FooterColumn title="Plataforma" links={["Automatizacion", "Permisos", "Auditoria", "Reportes"]} />
        <FooterColumn title="Empresa" links={["Demo", "Contacto", "Seguridad", "Roadmap"]} />
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 pt-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
        <p>&copy; 2026 Sistema Modular. Todos los derechos reservados.</p>
        <p>Hecho para operaciones reales, modulares y trazables.</p>
      </div>
    </footer>
  );
}

function FooterReveal() {
  return (
    <section className="footer-reveal-shell relative overflow-hidden bg-[#202123]">
      <div className="footer-reveal-panel relative z-10 bg-[#121314] shadow-[0_28px_90px_rgba(0,0,0,0.35)]">
        <Footer />
      </div>
      <FooterBackdrop />
    </section>
  );
}

function FooterBackdrop() {
  return (
    <section
      aria-hidden="true"
      className="footer-word-stage relative z-0 grid min-h-[36vh] place-items-center overflow-hidden bg-[#202123] pb-8 pt-24"
    >
      <TypewriterWord className="translate-y-4 select-none text-center text-[clamp(7rem,28vw,24rem)] font-medium uppercase leading-[0.72] text-white/[0.16]">
        NEXO
      </TypewriterWord>
    </section>
  );
}
