import {
  Activity,
  Boxes,
  FileSearch,
  KeyRound,
  MonitorDot,
  Network,
  PanelLeft,
  Radio,
  TicketCheck,
  Video
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ModuleItem = {
  name: string;
  tag: string;
  icon: LucideIcon;
  body: string;
  points: string[];
};

type TextPair = readonly [title: string, body: string];

type ExperienceItem = readonly [title: string, body: string, icon: LucideIcon];

type MetricItem = readonly [value: string, label: string, colorClass: string];

type TicketPreview = readonly [id: string, title: string, status: string, sla: string, colorClass: string];

type TimelineItem = readonly [event: string, time: string];

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export const modules: ModuleItem[] = [
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

export const operatingSystem: string[][] = [
  ["Usuarios", "Autenticacion", "Permisos", "Notificaciones"],
  ["Calendario", "Automatizaciones", "Motor organizacional", "Auditoria"],
  ["Tickets", "Inventario", "Reportes", "Videollamadas"]
];

export const helpdeskFlow: TextPair[] = [
  ["Creacion", "Portal, correo, equipo tecnico o automatizacion."],
  ["Clasificacion", "Prioridad, activo, area, responsable y SLA dinamico."],
  ["Ejecucion", "Tareas, colaboracion, videollamada y seguimiento tecnico."],
  ["Validacion", "Solucion revisada, reproceso controlado o cierre auditado."]
];

export const inventory: TextPair[] = [
  ["Activos", "Equipos, dispositivos, herramientas y componentes."],
  ["Trazabilidad", "Tickets, usuarios, areas, ubicacion y cambios historicos."],
  ["QR unico", "Consulta rapida del historial tecnico y estado operativo."],
  ["Ciclo de vida", "Desde asignacion hasta mantenimiento, cambio o baja."]
];

export const experience: ExperienceItem[] = [
  ["Tiempo real", "WebSockets, notificaciones inteligentes y dashboard contextual.", Radio],
  ["PWA instalable", "Experiencia rapida, responsive y preparada para uso operativo.", MonitorDot],
  ["Dark mode profesional", "Interfaz limpia, modular y comoda para jornadas largas.", PanelLeft],
  ["Colaboracion", "Comentarios, actividad, menciones y videollamadas integradas.", Video]
];

export const backend: string[] = ["NestJS", "PostgreSQL", "Redis", "Socket.io", "JWT", "OAuth Google"];
export const frontend: string[] = ["Next.js", "React", "TailwindCSS", "Zustand", "TanStack Query", "Framer Motion"];

export const future: string[] = [
  "Nuevos modulos",
  "IA operacional",
  "Automatizaciones avanzadas",
  "Aplicacion movil",
  "Cliente de escritorio",
  "Integraciones empresariales",
  "Analitica avanzada",
  "Multiempresa"
];

export const heroStats: TextPair[] = [
  ["FSM", "flujo de tickets"],
  ["RBAC", "permisos dinamicos"],
  ["PWA", "operacion instalable"]
];

export const commandCenterNavIcons: LucideIcon[] = [Activity, TicketCheck, Boxes, Network, KeyRound, FileSearch];

export const commandCenterTags: string[] = ["Helpdesk", "Inventario", "SLA", "Auditoria"];

export const commandCenterMetrics: MetricItem[] = [
  ["342", "tickets activos", "text-cyan-300"],
  ["97%", "SLA en control", "text-emerald-300"],
  ["1.8k", "activos trazados", "text-amber-300"]
];

export const commandCenterTickets: TicketPreview[] = [
  ["INC-2401", "Servidor laboratorio bloque A", "Critico", "00:42", "bg-rose-400"],
  ["REQ-1182", "Alta usuario administrativo", "Aprobacion", "03:10", "bg-amber-400"],
  ["INV-7780", "Scanner QR sin trazabilidad", "Revision", "08:25", "bg-cyan-400"],
  ["MNT-6041", "Mantenimiento equipo especializado", "Programado", "18:20", "bg-emerald-400"]
];

export const automationSteps: string[] = [
  "Detectar area afectada",
  "Consultar responsable por bloque",
  "Recalcular SLA",
  "Notificar canal tecnico"
];

export const assetTags: string[] = ["QR verificado", "Usuario asociado", "Bloque A", "Garantia activa"];

export const assetTimeline: TimelineItem[] = [
  ["Ticket INC-2401 creado", "hace 12 min"],
  ["SLA critico aplicado", "hace 11 min"],
  ["Tecnico asignado", "hace 9 min"],
  ["Auditoria actualizada", "hace 2 min"]
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Producto",
    links: [
      { label: "Modulos", href: "#modulos" },
      { label: "Helpdesk", href: "#helpdesk" },
      { label: "Inventario", href: "#inventario" },
      { label: "Organizacion", href: "#organizacion" }
    ]
  },
  {
    title: "Plataforma",
    links: [
      { label: "Tecnologia", href: "#tecnologia" },
      { label: "Automatizacion", href: "#futuro" },
      { label: "Auditoria", href: "#helpdesk" },
      { label: "Reportes", href: "#futuro" }
    ]
  },
  {
    title: "Empresa",
    links: [
      { label: "Demo", href: "#demo" },
      { label: "Contacto", href: "mailto:demo@sistemamodular.com" },
      { label: "Seguridad", href: "#tecnologia" },
      { label: "Roadmap", href: "#futuro" }
    ]
  }
];
