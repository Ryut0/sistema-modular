import {
  ArrowRight,
  BarChart3,
  Boxes,
  Check,
  Clock3,
  FileCheck2,
  KeyRound,
  LockKeyhole,
  Network,
  ScanLine,
  ShieldCheck,
  Sparkles,
  TicketCheck,
  Workflow
} from "lucide-react";
import Image from "next/image";

const navItems = [
  ["Producto", "#producto"],
  ["Tickets", "#tickets"],
  ["Modulos", "#modulos"],
  ["Seguridad", "#seguridad"]
];

const metrics = [
  ["42%", "menos reprocesos"],
  ["3.8h", "ahorro por tecnico"],
  ["99.9%", "trazabilidad operativa"]
];

const productPoints = [
  ["Tickets con contexto", "SLA, activo, usuario, area, prioridad y responsable en una misma vista.", TicketCheck],
  ["Inventario conectado", "Cada equipo conserva historial tecnico, QR, ubicacion y tickets asociados.", Boxes],
  ["Permisos por rol", "Vistas limpias para usuarios, tecnicos, lideres y administradores.", KeyRound]
];

const flow = [
  ["01", "Entrada", "Portal, correo, QR, tecnico o automatizacion."],
  ["02", "Clasificacion", "Activo, area, prioridad, responsable y SLA."],
  ["03", "Ejecucion", "Tareas, evidencia, comentarios y aprobaciones."],
  ["04", "Cierre", "Validacion, auditoria y reporte operativo."]
];

const security = [
  "Auditoria de eventos criticos",
  "Roles granulares por modulo",
  "Historial completo por activo",
  "Preparado para SSO y OAuth",
  "Reportes para direccion",
  "Separacion por equipos y contexto"
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />
      <Hero />
      <ProofStrip />
      <ProductIntro />
      <ScreenshotSection
        id="tickets"
        eyebrow="Dashboard operativo"
        title="Tickets, SLA y activos en una pantalla que se entiende sin explicar."
        body="La vista principal prioriza lo importante: solicitudes abiertas, riesgo de SLA, contexto del activo y seguimiento de cada caso. Menos elementos decorativos, mas informacion accionable."
        image="/tickets.jpeg"
        imageAlt="Pantalla de gestion de tickets del sistema"
        reverse={false}
      />
      <FlowSection />
      <ScreenshotSection
        id="modulos"
        eyebrow="Arquitectura modular"
        title="Modulos visibles, separados y listos para crecer sin saturar la experiencia."
        body="El producto puede ampliar capacidades sin convertir la interfaz en un tablero lleno de cards. Cada modulo debe sentirse como una puerta clara, no como ruido visual."
        image="/modulos.jpeg"
        imageAlt="Pantalla de modulos del sistema"
        reverse
      />
      <SecuritySection />
      <FinalCTA />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/88 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="Sistema Modular">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-slate-950 text-xs font-bold text-white">SM</span>
          <span className="text-base font-bold">Sistema Modular</span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-semibold text-slate-600 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="transition hover:text-slate-950">
              {label}
            </a>
          ))}
        </div>
        <a
          href="#demo"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-slate-950 px-4 text-sm font-bold text-white transition hover:bg-slate-800"
        >
          Solicitar demo
          <ArrowRight className="h-4 w-4" />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden border-b border-slate-200 bg-[#f4f6f8] pt-16">
      <div className="absolute inset-0 bg-fixed opacity-80 [background-image:linear-gradient(90deg,rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(rgba(15,23,42,0.045)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="absolute left-0 right-0 top-24 h-2 rounded-r-full bg-[#f4b844]/80 lg:w-[82%]" />
      <div className="absolute right-10 top-40 hidden h-4 w-44 rounded-full bg-[#f4b844]/80 lg:block" />
      <div className="absolute left-0 top-[34rem] hidden h-3 w-56 rounded-r-full bg-[#f4b844]/75 lg:block" />

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-20 sm:px-6 lg:px-8 lg:pt-28">
        <div className="mx-auto max-w-4xl text-center reveal-on-scroll">
          <div className="mb-7 inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-xs font-bold uppercase text-slate-600 shadow-sm">
            <Sparkles className="h-4 w-4 text-[#2557A7]" />
            Service operations para equipos internos
          </div>
          <h1 className="text-5xl font-bold leading-[1.02] text-slate-950 sm:text-6xl lg:text-7xl">
            Soporte, activos y operaciones internas en una sola plataforma.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            Sistema Modular conecta tickets, inventario, SLAs, permisos y automatizaciones para que equipos tecnicos trabajen con menos friccion y mas control.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#demo"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#2557A7] px-5 text-sm font-bold text-white transition duration-300 hover:scale-[1.02] hover:bg-[#1f4a90]"
            >
              Solicitar demo
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#tickets"
              className="inline-flex h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-5 text-sm font-bold text-slate-950 transition duration-300 hover:scale-[1.02] hover:bg-slate-50"
            >
              Ver dashboard
            </a>
          </div>
        </div>

        <div className="relative mx-auto mt-20 max-w-6xl reveal-on-scroll slow">
          <div className="rounded-md border border-slate-200 bg-white/80 p-3 shadow-[0_30px_90px_rgba(15,23,42,0.18)] backdrop-blur">
            <Image
              src="/tickets.jpeg"
              alt="Dashboard operativo de tickets"
              width={1600}
              height={900}
              priority
              className="h-auto w-full rounded-md border border-slate-200 object-cover"
            />
          </div>
          <div className="absolute -bottom-8 left-8 hidden rounded-md border border-slate-200 bg-white px-5 py-4 text-sm font-bold text-slate-700 shadow-[0_18px_50px_rgba(15,23,42,0.12)] md:block">
            SLA critico detectado antes del vencimiento
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofStrip() {
  return (
    <section className="border-b border-slate-200 bg-white py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
        <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
          Disenado para operaciones internas de alto volumen
        </p>
        <div className="grid gap-8 sm:grid-cols-3">
          {metrics.map(([value, label]) => (
            <div key={label}>
              <strong className="block text-4xl font-bold text-slate-950">{value}</strong>
              <span className="mt-2 block text-sm font-semibold text-slate-500">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductIntro() {
  return (
    <section id="producto" className="px-5 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Producto"
          title="Menos tablero. Mas claridad operacional."
          body="La landing necesitaba respirar. Por eso esta version usa secciones amplias, screenshots reales y pocas piezas de interfaz. El producto se entiende por contexto, no por acumulacion de cards."
        />

        <div className="mt-20 grid gap-12 lg:grid-cols-3">
          {productPoints.map(([title, body, Icon]) => {
            const TypedIcon = Icon as typeof TicketCheck;
            return (
              <article key={title as string} className="reveal-on-scroll border-t border-slate-200 pt-7">
                <TypedIcon className="h-6 w-6 text-[#2557A7]" />
                <h3 className="mt-7 text-2xl font-bold text-slate-950">{title as string}</h3>
                <p className="mt-4 text-base leading-8 text-slate-600">{body as string}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ScreenshotSection({
  id,
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  reverse = false
}: {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}) {
  return (
    <section id={id} className="border-y border-slate-200 bg-[#f7f9fc] px-5 py-28 sm:px-6 lg:px-8">
      <div className={`mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="reveal-on-scroll">
          <SectionHeader eyebrow={eyebrow} title={title} body={body} align="left" />
          <div className="mt-12 space-y-5 text-base leading-8 text-slate-600">
            <p>
              El objetivo visual es el mismo que ves en productos maduros: una idea por seccion, texto corto, pantalla grande y bordes casi invisibles.
            </p>
            <p>
              La interfaz debe sentirse como software real, no como una coleccion de componentes decorativos.
            </p>
          </div>
        </div>
        <div className="reveal-on-scroll slow rounded-md border border-slate-200 bg-white p-3 shadow-[0_28px_80px_rgba(15,23,42,0.12)]">
          <Image src={image} alt={imageAlt} width={1600} height={900} className="h-auto w-full rounded-md object-cover" />
        </div>
      </div>
    </section>
  );
}

function FlowSection() {
  return (
    <section className="bg-slate-950 px-5 py-28 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.7fr_1.3fr]">
        <SectionHeader
          dark
          align="left"
          eyebrow="Flujo operativo"
          title="Un flujo simple, medible y auditable."
          body="Nada rebota, nada gira, nada distrae. El movimiento debe ayudar a leer: aparecer suave, subir apenas y dejar que el contenido mande."
        />
        <div className="grid gap-0 border-t border-white/15 reveal-on-scroll slow">
          {flow.map(([number, title, body]) => (
            <div key={number} className="grid gap-5 border-b border-white/15 py-8 sm:grid-cols-[80px_1fr]">
              <span className="text-sm font-bold text-[#f4b844]">{number}</span>
              <div>
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-3 max-w-xl text-base leading-8 text-slate-400">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SecuritySection() {
  return (
    <section id="seguridad" className="px-5 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.78fr_1.22fr]">
        <SectionHeader
          align="left"
          eyebrow="Seguridad"
          title="Control empresarial sin volver pesada la interfaz."
          body="Permisos, auditoria y gobierno deben estar presentes, pero no dominar visualmente la landing. La confianza se comunica con precision y calma."
        />
        <div className="grid gap-4 sm:grid-cols-2 reveal-on-scroll slow">
          {security.map((item) => (
            <div key={item} className="flex items-center gap-4 rounded-md border border-slate-200 bg-white px-5 py-5">
              <LockKeyhole className="h-5 w-5 text-[#2557A7]" />
              <span className="text-sm font-bold text-slate-700">{item}</span>
              <Check className="ml-auto h-4 w-4 text-emerald-600" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="demo" className="relative overflow-hidden bg-slate-950 px-5 py-28 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-fixed opacity-30 [background-image:linear-gradient(90deg,rgba(244,184,68,0.18)_1px,transparent_1px),linear-gradient(rgba(244,184,68,0.12)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="relative mx-auto max-w-5xl text-center reveal-on-scroll">
        <p className="text-sm font-bold uppercase tracking-wide text-[#f4b844]">Demo guiada</p>
        <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-6xl">
          Evalua Sistema Modular con un escenario real de tu operacion.
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300">
          Revisamos tickets, activos, SLAs, permisos y automatizaciones sobre un flujo parecido al de tu equipo.
        </p>
        <a
          href="mailto:demo@sistemamodular.com?subject=Solicitud%20de%20demo%20Sistema%20Modular"
          className="mt-10 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-6 text-sm font-bold text-slate-950 transition duration-300 hover:scale-[1.02] hover:bg-slate-100"
        >
          Solicitar demo
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  body,
  dark = false,
  align = "center"
}: {
  eyebrow: string;
  title: string;
  body: string;
  dark?: boolean;
  align?: "left" | "center";
}) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-4xl text-center reveal-on-scroll" : "max-w-3xl reveal-on-scroll"}>
      <p className={dark ? "text-sm font-bold uppercase tracking-wide text-[#f4b844]" : "text-sm font-bold uppercase tracking-wide text-[#2557A7]"}>
        {eyebrow}
      </p>
      <h2 className={dark ? "mt-6 text-4xl font-bold leading-tight text-white sm:text-6xl" : "mt-6 text-4xl font-bold leading-tight text-slate-950 sm:text-6xl"}>
        {title}
      </h2>
      <p className={dark ? "mt-7 text-lg leading-8 text-slate-400" : "mt-7 text-lg leading-8 text-slate-600"}>{body}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-slate-950 text-xs font-bold text-white">SM</span>
            <span className="text-xl font-bold text-slate-950">Sistema Modular</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">
            Plataforma modular para soporte, activos, SLAs, permisos y automatizacion de operaciones internas.
          </p>
        </div>
        <FooterGroup title="Producto" links={["Tickets", "Inventario", "Modulos", "Reportes"]} />
        <FooterGroup title="Empresa" links={["Implementacion", "Seguridad", "Demo", "Contacto"]} />
        <FooterGroup title="Recursos" links={["Documentacion", "Estado", "Privacidad", "Terminos"]} />
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-slate-200 pt-6 text-sm font-semibold text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Sistema Modular</p>
        <p>Diseno limpio, profesional y orientado a conversion B2B.</p>
      </div>
    </footer>
  );
}

function FooterGroup({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-wide text-slate-950">{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a href="#demo" className="text-sm font-semibold text-slate-500 transition hover:text-slate-950">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
