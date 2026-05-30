import {
  Activity,
  ArrowRight,
  Boxes,
  Check,
  ChevronRight,
  CircleDot,
  Clock3,
  Code2,
  Cpu,
  FileSearch,
  KeyRound,
  MonitorDot,
  Network,
  PanelLeft,
  Radio,
  ScanLine,
  Sparkles,
  TicketCheck,
  Video,
  Zap
} from "lucide-react";

const modules = [
  {
    name: "Helpdesk operacional",
    tag: "Nucleo",
    icon: TicketCheck,
    body: "Tickets con FSM, SLA inteligentes, asignacion automatica, escalamientos, reprocesos y validacion de solucion.",
    points: ["Historial tecnico", "Auditoria completa", "Colaboracion en tiempo real"]
  },
  {
    name: "Inventario inteligente",
    tag: "Trazabilidad",
    icon: Boxes,
    body: "Activos, dispositivos, componentes, herramientas y equipos conectados a tickets, usuarios, areas y ubicacion.",
    points: ["Codigo QR unico", "Ciclo de vida", "Relacion con incidencias"]
  },
  {
    name: "Organizacion visual",
    tag: "Mapa operativo",
    icon: Network,
    body: "Departamentos, areas, cargos, bloques, laboratorios y nodos personalizados con drag and drop, zoom y relaciones.",
    points: ["Peso operacional", "Relaciones visuales", "Automatizacion por estructura"]
  },
  {
    name: "Roles y permisos",
    tag: "RBAC modular",
    icon: KeyRound,
    body: "Roles globales, roles por modulo, permisos jerarquicos, multirol y renderizado dinamico segun contexto.",
    points: ["Permisos por modulo", "Contextos operativos", "Acceso adaptable"]
  }
];

const operatingSystem = [
  ["Usuarios", "Autenticacion", "Permisos", "Notificaciones"],
  ["Calendario", "Automatizaciones", "Motor organizacional", "Auditoria"],
  ["Tickets", "Inventario", "Reportes", "Videollamadas"]
];

const helpdeskFlow = [
  ["Creacion", "Portal, correo, equipo tecnico o automatizacion."],
  ["Clasificacion", "Prioridad, activo, area, responsable y SLA dinamico."],
  ["Ejecucion", "Tareas, colaboracion, videollamada y seguimiento tecnico."],
  ["Validacion", "Solucion revisada, reproceso controlado o cierre auditado."]
];

const inventory = [
  ["Activos", "Equipos, dispositivos, herramientas y componentes."],
  ["Trazabilidad", "Tickets, usuarios, areas, ubicacion y cambios historicos."],
  ["QR unico", "Consulta rapida del historial tecnico y estado operativo."],
  ["Ciclo de vida", "Desde asignacion hasta mantenimiento, cambio o baja."]
];

const experience = [
  ["Tiempo real", "WebSockets, notificaciones inteligentes y dashboard contextual.", Radio],
  ["PWA instalable", "Experiencia rapida, responsive y preparada para uso operativo.", MonitorDot],
  ["Dark mode profesional", "Interfaz limpia, modular y comoda para jornadas largas.", PanelLeft],
  ["Colaboracion", "Comentarios, actividad, menciones y videollamadas integradas.", Video]
];

const backend = ["NestJS", "PostgreSQL", "Redis", "Socket.io", "JWT", "OAuth Google"];
const frontend = ["Next.js", "React", "TailwindCSS", "Zustand", "TanStack Query", "Framer Motion"];

const future = [
  "Nuevos modulos",
  "IA operacional",
  "Automatizaciones avanzadas",
  "Aplicacion movil",
  "Cliente de escritorio",
  "Integraciones empresariales",
  "Analitica avanzada",
  "Multiempresa"
];

export default function Home() {
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
      <Footer />
      <FooterBackdrop />
    </main>
  );
}

function Header() {
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

function Hero() {
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
            {[
              ["FSM", "flujo de tickets"],
              ["RBAC", "permisos dinamicos"],
              ["PWA", "operacion instalable"]
            ].map(([value, label]) => (
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
            {[Activity, TicketCheck, Boxes, Network, KeyRound, FileSearch].map((Icon, index) => (
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
              {["Helpdesk", "Inventario", "SLA", "Auditoria"].map((item) => (
                <span key={item} className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300">{item}</span>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              ["342", "tickets activos", "text-cyan-300"],
              ["97%", "SLA en control", "text-emerald-300"],
              ["1.8k", "activos trazados", "text-amber-300"]
            ].map(([value, label, color]) => (
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
                {[
                  ["INC-2401", "Servidor laboratorio bloque A", "Critico", "00:42", "bg-rose-400"],
                  ["REQ-1182", "Alta usuario administrativo", "Aprobacion", "03:10", "bg-amber-400"],
                  ["INV-7780", "Scanner QR sin trazabilidad", "Revision", "08:25", "bg-cyan-400"],
                  ["MNT-6041", "Mantenimiento equipo especializado", "Programado", "18:20", "bg-emerald-400"]
                ].map(([id, title, status, sla, color]) => (
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
                {["Detectar area afectada", "Consultar responsable por bloque", "Recalcular SLA", "Notificar canal tecnico"].map((step, index) => (
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
            {["QR verificado", "Usuario asociado", "Bloque A", "Garantia activa"].map((item) => (
              <span key={item} className="rounded-md bg-white/5 px-2 py-2 text-zinc-300">{item}</span>
            ))}
          </div>
          <div className="mt-8 space-y-4">
            {[
              ["Ticket INC-2401 creado", "hace 12 min"],
              ["SLA critico aplicado", "hace 11 min"],
              ["Tecnico asignado", "hace 9 min"],
              ["Auditoria actualizada", "hace 2 min"]
            ].map(([event, time]) => (
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
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">Mapa organizacional</p>
            <h3 className="mt-1 text-xl font-semibold tracking-tight">Asignacion automatica por estructura</h3>
          </div>
          <div className="relative min-h-[460px] p-6">
            <div className="absolute left-1/2 top-[92px] hidden h-[72px] w-px -translate-x-1/2 bg-zinc-300 md:block" />
            <div className="absolute left-[18%] right-[18%] top-[164px] hidden h-px bg-zinc-300 md:block" />
            <div className="absolute left-[18%] top-[164px] hidden h-[64px] w-px bg-zinc-300 md:block" />
            <div className="absolute left-1/2 top-[164px] hidden h-[64px] w-px -translate-x-1/2 bg-zinc-300 md:block" />
            <div className="absolute right-[18%] top-[164px] hidden h-[64px] w-px bg-zinc-300 md:block" />

            <div className="mx-auto w-fit">
              <OrgNode title="Direccion general" tone="bg-zinc-950 text-white border-zinc-950" detail="Reglas y gobierno" />
            </div>

            <div className="mt-20 grid gap-4 md:grid-cols-3">
              <OrgGroup
                title="Operaciones"
                tone="bg-emerald-700 text-white border-emerald-700"
                items={["Bloque A", "Laboratorio", "Mantenimiento"]}
              />
              <OrgGroup
                title="Tecnologia"
                tone="bg-cyan-700 text-white border-cyan-700"
                items={["Soporte N1", "Soporte N2", "Infraestructura"]}
              />
              <OrgGroup
                title="Administracion"
                tone="bg-amber-500 text-zinc-950 border-amber-500"
                items={["Compras", "Activos", "Aprobaciones"]}
              />
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

function OrgGroup({ title, tone, items }: { title: string; tone: string; items: string[] }) {
  return (
    <div className="rounded-md border border-zinc-200 bg-white p-3 shadow-sm">
      <OrgNode title={title} tone={tone} detail="Nodo principal" />
      <div className="mt-3 grid gap-2">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2 rounded-md border border-zinc-200 bg-[#f7f8f5] px-3 py-2 text-sm font-medium text-zinc-700">
            <CircleDot className="h-4 w-4 text-cyan-700" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function OrgNode({ title, tone, detail }: { title: string; tone: string; detail: string }) {
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
            const TypedIcon = Icon as typeof Radio;
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

function TechStack({ title, icon: Icon, items }: { title: string; icon: typeof Cpu; items: string[] }) {
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

function Footer() {
  return (
    <footer className="bg-white px-5 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-zinc-200 pt-10 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-zinc-950 text-xs font-semibold text-white">SM</span>
            <p className="font-semibold">Sistema Modular</p>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-500">
            Plataforma operacional inteligente para helpdesk, inventario, permisos, automatizacion y trazabilidad.
          </p>
        </div>
        <FooterColumn title="Producto" links={["Modulos", "Helpdesk", "Inventario", "Organizacion"]} />
        <FooterColumn title="Plataforma" links={["Automatizacion", "Permisos", "Auditoria", "Reportes"]} />
        <FooterColumn title="Empresa" links={["Demo", "Contacto", "Seguridad", "Roadmap"]} />
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-zinc-200 pt-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Sistema Modular. Todos los derechos reservados.</p>
        <p>Hecho para operaciones reales, modulares y trazables.</p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-950">{title}</h3>
      <div className="mt-4 grid gap-2.5">
        {links.map((link) => (
          <a key={link} href="#demo" className="text-sm font-medium text-zinc-500 transition hover:text-zinc-950">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}

function FooterBackdrop() {
  return (
    <section
      className="relative grid min-h-[260px] place-items-center overflow-hidden bg-zinc-950 bg-fixed bg-center px-5"
      style={{
        backgroundImage:
          "linear-gradient(rgba(9,9,11,0.82), rgba(9,9,11,0.82)), linear-gradient(90deg, rgba(34,211,238,0.12) 1px, transparent 1px), linear-gradient(rgba(34,211,238,0.10) 1px, transparent 1px)",
        backgroundSize: "auto, 72px 72px, 72px 72px"
      }}
    >
      <p className="select-none text-center text-[clamp(4rem,18vw,16rem)] font-semibold uppercase leading-none tracking-tight text-white/10">
        NEXO
      </p>
    </section>
  );
}
