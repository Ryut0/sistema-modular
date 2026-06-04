import {
  Boxes,
  KeyRound,
  MonitorDot,
  Network,
  PanelLeft,
  Radio,
  TicketCheck,
  Video
} from "lucide-react";

export const modules = [
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

export const operatingSystem = [
  ["Usuarios", "Autenticacion", "Permisos", "Notificaciones"],
  ["Calendario", "Automatizaciones", "Motor organizacional", "Auditoria"],
  ["Tickets", "Inventario", "Reportes", "Videollamadas"]
];

export const helpdeskFlow = [
  ["Creacion", "Portal, correo, equipo tecnico o automatizacion."],
  ["Clasificacion", "Prioridad, activo, area, responsable y SLA dinamico."],
  ["Ejecucion", "Tareas, colaboracion, videollamada y seguimiento tecnico."],
  ["Validacion", "Solucion revisada, reproceso controlado o cierre auditado."]
];

export const inventory = [
  ["Activos", "Equipos, dispositivos, herramientas y componentes."],
  ["Trazabilidad", "Tickets, usuarios, areas, ubicacion y cambios historicos."],
  ["QR unico", "Consulta rapida del historial tecnico y estado operativo."],
  ["Ciclo de vida", "Desde asignacion hasta mantenimiento, cambio o baja."]
];

export const experience = [
  ["Tiempo real", "WebSockets, notificaciones inteligentes y dashboard contextual.", Radio],
  ["PWA instalable", "Experiencia rapida, responsive y preparada para uso operativo.", MonitorDot],
  ["Dark mode profesional", "Interfaz limpia, modular y comoda para jornadas largas.", PanelLeft],
  ["Colaboracion", "Comentarios, actividad, menciones y videollamadas integradas.", Video]
];

export const backend = ["NestJS", "PostgreSQL", "Redis", "Socket.io", "JWT", "OAuth Google"];
export const frontend = ["Next.js", "React", "TailwindCSS", "Zustand", "TanStack Query", "Framer Motion"];

export const future = [
  "Nuevos modulos",
  "IA operacional",
  "Automatizaciones avanzadas",
  "Aplicacion movil",
  "Cliente de escritorio",
  "Integraciones empresariales",
  "Analitica avanzada",
  "Multiempresa"
];
