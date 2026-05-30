import {
  ArrowRight,
  BarChart3,
  Boxes,
  Check,
  ChevronRight,
  Clock3,
  FileCheck2,
  GitBranch,
  Headphones,
  KeyRound,
  Layers3,
  LockKeyhole,
  Network,
  PlayCircle,
  ScanLine,
  ShieldCheck,
  Sparkles,
  TicketCheck,
  UsersRound,
  Workflow,
  Zap
} from "lucide-react";

const navItems = [
  ["Producto", "#producto"],
  ["Soluciones", "#soluciones"],
  ["Implementacion", "#implementacion"],
  ["Seguridad", "#seguridad"]
];

const heroMetrics = [
  ["42%", "menos reprocesos"],
  ["3.8h", "ahorro por tecnico"],
  ["99.9%", "trazabilidad operativa"]
];

const modules = [
  {
    icon: TicketCheck,
    title: "Mesa de servicio",
    body: "Tickets, aprobaciones, SLAs, escalamiento y cierre auditado en un flujo unico.",
    items: ["Portal interno", "SLA dinamico", "Reapertura controlada"]
  },
  {
    icon: Boxes,
    title: "Activos e inventario",
    body: "Equipos, herramientas, componentes, usuarios y ubicaciones conectados al historial tecnico.",
    items: ["QR unico", "Ciclo de vida", "Relaciones con tickets"]
  },
  {
    icon: Network,
    title: "Mapa operacional",
    body: "Areas, cargos, sedes, bloques y responsables organizados como una red visual.",
    items: ["Nodos editables", "Responsables", "Reglas por estructura"]
  },
  {
    icon: KeyRound,
    title: "Roles y permisos",
    body: "Acceso modular para equipos tecnicos, lideres, usuarios finales y administradores.",
    items: ["RBAC", "Multirol", "Vistas por contexto"]
  }
];

const outcomes = [
  ["Control de SLA", "Prioriza incidentes criticos, detecta riesgo y escala antes del incumplimiento.", Clock3],
  ["Auditoria completa", "Cada decision, cambio de estado y validacion queda registrada.", FileCheck2],
  ["Automatizacion real", "Asigna responsables, recalcula prioridad y dispara notificaciones por reglas.", Workflow],
  ["Analitica operativa", "Mide carga, cumplimiento, tiempos de respuesta y activos con mayor incidencia.", BarChart3]
];

const workflow = [
  ["01", "Entrada", "Portal, correo, QR, tecnico o automatizacion."],
  ["02", "Clasificacion", "Activo, area, prioridad, responsable y SLA."],
  ["03", "Ejecucion", "Tareas, comentarios, evidencia y colaboracion."],
  ["04", "Validacion", "Cierre auditado, reproceso o aprobacion final."]
];

const buyerProof = [
  ["Para IT", "Menos tickets perdidos, mejores SLAs y reportes claros para direccion."],
  ["Para operaciones", "Inventario vivo, responsables visibles y trazabilidad por sede o area."],
  ["Para direccion", "Una vista confiable del costo, riesgo y rendimiento del servicio."]
];

const security = [
  "Roles granulares por modulo",
  "Auditoria de eventos criticos",
  "Preparado para SSO y OAuth",
  "Separacion por equipos y contexto",
  "Historial completo por activo",
  "Reportes para control interno"
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />
      <Hero />
      <ProofBar />
      <Problem />
      <Product />
      <Modules />
      <WorkflowSection />
      <BuyerSection />
      <SecuritySection />
      <Implementation />
      <FinalCTA />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="Sistema Modular">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-slate-950 text-xs font-bold text-white">SM</span>
          <span className="text-base font-bold">Sistema Modular</span>
        </a>
        <div className="hidden items-center gap-7 text-sm font-semibold text-slate-600 lg:flex">
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
    <section className="relative min-h-[92vh] overflow-hidden border-b border-slate-200 bg-[#f7f9fc] pt-16">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[length:44px_44px]" />
      <div className="absolute inset-y-20 right-[-220px] hidden w-[980px] lg:block">
        <ProductScene />
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col px-5 pb-10 pt-16 sm:px-6 lg:px-8 lg:pb-16 lg:pt-24">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-xs font-bold uppercase text-slate-600">
            <Sparkles className="h-4 w-4 text-[#2557A7]" />
            Service operations para equipos internos
          </div>
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] text-slate-950 sm:text-6xl lg:text-7xl">
            Gestiona soporte, activos y operaciones internas en una sola plataforma.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Sistema Modular une mesa de servicio, inventario, SLAs, permisos y automatizaciones para que equipos tecnicos operen con trazabilidad, velocidad y control.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#demo"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#2557A7] px-5 text-sm font-bold text-white transition hover:bg-[#1f4a90]"
            >
              Solicitar demo
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#producto"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 text-sm font-bold text-slate-950 transition hover:bg-slate-50"
            >
              <PlayCircle className="h-4 w-4" />
              Ver producto
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-1 border-y border-slate-300 bg-white/60 sm:grid-cols-3">
            {heroMetrics.map(([value, label]) => (
              <div key={label} className="border-b border-slate-300 p-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
                <strong className="block text-2xl font-bold text-slate-950">{value}</strong>
                <span className="mt-1 block text-xs font-bold uppercase text-slate-500">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mt-10 lg:hidden">
          <ProductScene />
        </div>
      </div>
    </section>
  );
}

function ProductScene() {
  return (
    <div className="rounded-md border border-slate-300 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.18)]">
      <div className="flex h-12 items-center justify-between border-b border-slate-200 px-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-500" />
        </div>
        <span className="text-xs font-bold uppercase text-slate-500">Operacion Latam / Mesa tecnica</span>
      </div>
      <div className="grid min-h-[560px] grid-cols-[64px_1fr] bg-slate-50 lg:grid-cols-[72px_1fr_300px]">
        <aside className="border-r border-slate-200 bg-slate-950 p-3">
          <div className="space-y-3">
            {[TicketCheck, Boxes, Network, BarChart3, ShieldCheck].map((Icon, index) => (
              <span
                key={index}
                className={index === 0 ? "grid h-11 w-11 place-items-center rounded-md bg-white text-slate-950" : "grid h-11 w-11 place-items-center rounded-md text-slate-400"}
              >
                <Icon className="h-5 w-5" />
              </span>
            ))}
          </div>
        </aside>
        <div className="min-w-0 p-5">
          <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase text-[#2557A7]">Dashboard operativo</p>
              <h2 className="mt-1 text-2xl font-bold text-slate-950">Incidentes, activos y SLA</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Hoy", "Criticos", "SLA", "Activos"].map((item) => (
                <span key={item} className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-600">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              ["128", "abiertos"],
              ["97%", "en SLA"],
              ["1.842", "activos"]
            ].map(([value, label]) => (
              <div key={label} className="rounded-md border border-slate-200 bg-white p-4">
                <strong className="block text-xl font-bold text-slate-950">{value}</strong>
                <span className="text-xs font-semibold text-slate-500">{label}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-3">
            {[
              ["INC-2401", "Servidor laboratorio bloque A", "Critico", "00:42", "bg-red-500"],
              ["REQ-1182", "Alta usuario administrativo", "Aprobacion", "03:10", "bg-amber-500"],
              ["INV-7780", "Scanner QR sin trazabilidad", "Revision", "08:25", "bg-[#2557A7]"],
              ["MNT-6041", "Mantenimiento preventivo", "Programado", "18:20", "bg-emerald-500"]
            ].map(([id, title, status, sla, color]) => (
              <div key={id} className="grid grid-cols-[1fr_100px_72px] gap-3 rounded-md border border-slate-200 bg-white p-3 text-sm">
                <div>
                  <span className="block text-xs font-bold text-slate-500">{id}</span>
                  <span className="mt-1 block font-bold text-slate-950">{title}</span>
                </div>
                <span className="pt-4 text-xs font-bold text-slate-600">{status}</span>
                <div className="pt-3">
                  <span className="block text-xs font-bold text-slate-700">{sla}</span>
                  <span className="mt-2 block h-1.5 overflow-hidden rounded-full bg-slate-100">
                    <span className={`block h-full w-2/3 ${color}`} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <aside className="hidden border-l border-slate-200 bg-white p-5 lg:block">
          <p className="text-xs font-bold uppercase text-[#2557A7]">Activo vinculado</p>
          <h3 className="mt-2 text-2xl font-bold text-slate-950">Laptop Lab-42</h3>
          <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-bold text-slate-600">
            {["QR verificado", "Usuario", "Bloque A", "Garantia"].map((item) => (
              <span key={item} className="rounded-md border border-slate-200 bg-slate-50 px-2 py-2">
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 space-y-4">
            {[
              ["Ticket creado", "hace 12 min"],
              ["SLA critico aplicado", "hace 11 min"],
              ["Tecnico asignado", "hace 9 min"],
              ["Auditoria actualizada", "hace 2 min"]
            ].map(([event, time]) => (
              <div key={event} className="border-l-2 border-[#2557A7] pl-4">
                <p className="text-sm font-bold text-slate-950">{event}</p>
                <p className="mt-1 text-xs font-semibold text-slate-500">{time}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

function ProofBar() {
  return (
    <section className="border-b border-slate-200 bg-white py-8">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-6 lg:grid-cols-[0.56fr_1.44fr] lg:px-8">
        <p className="text-sm font-bold uppercase text-slate-500">Disenado para operaciones internas de alto volumen</p>
        <div className="grid grid-cols-2 gap-3 text-sm font-bold text-slate-700 md:grid-cols-4">
          {["TI y soporte", "Educacion", "Salud", "Servicios empresariales"].map((item) => (
            <span key={item} className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-center">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="px-5 py-20 sm:px-6 lg:px-8" id="soluciones">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
        <SectionIntro
          eyebrow="Problema"
          title="Cuando soporte e inventario viven separados, nadie tiene la verdad completa."
          body="Los tickets se resuelven tarde, los activos pierden historial, los responsables no son visibles y direccion recibe reportes incompletos. Sistema Modular convierte esa operacion dispersa en un flujo medible."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Tickets sin contexto", "El tecnico no ve activo, usuario, sede, historial ni impacto."],
            ["Inventario desconectado", "Los equipos existen en hojas o sistemas que no hablan con soporte."],
            ["SLAs reactivos", "El riesgo aparece cuando el incumplimiento ya ocurrio."]
          ].map(([title, body]) => (
            <article key={title} className="border-l-2 border-slate-950 bg-slate-50 p-5">
              <h3 className="text-lg font-bold text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Product() {
  return (
    <section id="producto" className="border-y border-slate-200 bg-[#f7f9fc] px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionIntro
            eyebrow="Producto"
            title="Una plataforma modular con una experiencia de producto unica."
            body="No es un panel administrativo con formularios sueltos. Es una capa operacional donde tickets, activos, permisos, personas y automatizaciones comparten contexto."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {outcomes.map(([title, body, Icon]) => {
              const TypedIcon = Icon as typeof Clock3;
              return (
                <article key={title as string} className="rounded-md border border-slate-200 bg-white p-5">
                  <TypedIcon className="h-5 w-5 text-[#2557A7]" />
                  <h3 className="mt-5 text-lg font-bold text-slate-950">{title as string}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{body as string}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Modules() {
  return (
    <section className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Modulos"
          title="Todo lo necesario para operar servicios internos sin fragmentar el trabajo."
          body="Empieza con mesa de servicio e inventario. Agrega estructura organizacional, permisos, reportes y automatizaciones sin rehacer la base."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {modules.map(({ icon: Icon, title, body, items }) => (
            <article key={title} className="rounded-md border border-slate-200 bg-white p-6 transition hover:border-slate-400">
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-slate-950 text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <ChevronRight className="h-5 w-5 text-slate-400" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-slate-950">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{body}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-600">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section className="bg-slate-950 px-5 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
        <SectionIntro
          dark
          eyebrow="Flujo operativo"
          title="Del incidente al cierre, cada paso queda conectado."
          body="El valor no esta en tener mas modulos. Esta en que el flujo completo conserve contexto, responsabilidad, evidencia y medicion."
        />
        <div className="grid gap-0 border-t border-white/15">
          {workflow.map(([number, title, body]) => (
            <div key={number} className="grid gap-4 border-b border-white/15 py-6 sm:grid-cols-[80px_1fr]">
              <span className="text-sm font-bold text-[#f4b844]">{number}</span>
              <div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-2 leading-7 text-slate-400">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BuyerSection() {
  return (
    <section className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Compra B2B"
          title="Un mensaje claro para cada decisor."
          body="La landing debe vender control, no solo funcionalidades. Por eso el producto se explica desde el resultado que necesita cada comprador."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {buyerProof.map(([title, body]) => (
            <article key={title} className="rounded-md border border-slate-200 bg-white p-6">
              <UsersRound className="h-5 w-5 text-[#2557A7]" />
              <h3 className="mt-5 text-xl font-bold text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SecuritySection() {
  return (
    <section id="seguridad" className="border-y border-slate-200 bg-[#f7f9fc] px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
        <SectionIntro
          eyebrow="Seguridad y control"
          title="Preparado para equipos que necesitan trazabilidad y gobierno."
          body="Permisos, auditoria, roles y reportes se tratan como parte central del producto, no como configuracion secundaria."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {security.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-md border border-slate-200 bg-white p-4">
              <LockKeyhole className="h-4 w-4 text-[#2557A7]" />
              <span className="text-sm font-bold text-slate-700">{item}</span>
              <Check className="ml-auto h-4 w-4 text-emerald-600" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Implementation() {
  return (
    <section id="implementacion" className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
        <SectionIntro
          eyebrow="Implementacion"
          title="De demo a operacion con una ruta clara."
          body="Un SaaS B2B serio no solo muestra pantallas: reduce riesgo de compra. Esta seccion explica como se adopta el producto en un contexto real."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Diagnostico", "Mapeo de procesos, roles, tipos de ticket, activos y reglas de SLA.", GitBranch],
            ["Configuracion", "Modulos, permisos, estados, formularios, automatizaciones y reportes.", Layers3],
            ["Lanzamiento", "Capacitacion, migracion inicial, pilotos por area y seguimiento de adopcion.", Zap]
          ].map(([title, body, Icon]) => {
            const TypedIcon = Icon as typeof GitBranch;
            return (
              <article key={title as string} className="rounded-md border border-slate-200 bg-white p-6">
                <TypedIcon className="h-5 w-5 text-[#2557A7]" />
                <h3 className="mt-5 text-xl font-bold text-slate-950">{title as string}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{body as string}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="demo" className="bg-slate-950 px-5 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.52fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase text-[#f4b844]">Demo guiada</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
            Evalua Sistema Modular con un escenario real de tu operacion.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Revisamos tickets, activos, SLAs, permisos y automatizaciones sobre un flujo parecido al de tu equipo.
          </p>
        </div>
        <div className="rounded-md border border-white/15 p-5">
          {["Demo con flujo real", "Revision de modulos", "Recomendacion de implementacion"].map((item) => (
            <div key={item} className="flex items-center gap-3 border-b border-white/15 py-4 last:border-b-0">
              <Check className="h-4 w-4 text-emerald-400" />
              <span className="text-sm font-bold text-slate-200">{item}</span>
            </div>
          ))}
          <a
            href="mailto:demo@sistemamodular.com?subject=Solicitud%20de%20demo%20Sistema%20Modular"
            className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-bold text-slate-950 transition hover:bg-slate-100"
          >
            Solicitar demo
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionIntro({
  eyebrow,
  title,
  body,
  dark = false
}: {
  eyebrow: string;
  title: string;
  body: string;
  dark?: boolean;
}) {
  return (
    <div>
      <p className={dark ? "text-sm font-bold uppercase text-[#f4b844]" : "text-sm font-bold uppercase text-[#2557A7]"}>{eyebrow}</p>
      <h2 className={dark ? "mt-4 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl" : "mt-4 max-w-3xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl"}>
        {title}
      </h2>
      <p className={dark ? "mt-5 max-w-2xl text-base leading-7 text-slate-400" : "mt-5 max-w-2xl text-base leading-7 text-slate-600"}>
        {body}
      </p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-white px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-slate-200 pt-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-bold text-slate-950">Sistema Modular</p>
          <p className="mt-2 text-sm text-slate-500">Service operations para soporte, activos y automatizacion interna.</p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm font-semibold text-slate-500">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="transition hover:text-slate-950">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
