export const heroMetrics = [
  ["1.500+", "implementaciones acompañadas"],
  ["97%", "SLA visibles en operación"],
  ["ITIL 4", "procesos alineados"],
  ["24/7", "autoservicio para usuarios"]
];

export const painPoints = [
  ["backlog", "Backlog difícil de controlar", "Tickets dispersos, prioridades manuales y reportes que llegan tarde."],
  ["approvals", "Aprobaciones lentas", "Cambios, accesos y solicitudes internas dependen de seguimientos manuales."],
  ["assets", "Activos sin contexto", "Incidentes, usuarios, servicios y dispositivos viven en sistemas separados."]
] as const;

export const platformAreas = [
  [
    "desk",
    "Service desk unificado",
    "Centraliza incidentes, solicitudes, aprobaciones y conocimiento en una operación consistente para IT y áreas de negocio.",
    ["Portal de autoservicio", "SLAs y prioridades", "Colas por equipo"]
  ],
  [
    "workflow",
    "Procesos configurables",
    "Modela workflows con reglas, formularios y aprobaciones sin depender de ciclos largos de desarrollo.",
    ["Workflows no-code", "Aprobaciones", "Automatizaciones"]
  ],
  [
    "assets",
    "Activos conectados",
    "Relaciona tickets con usuarios, dispositivos, contratos y servicios críticos para entender impacto y recurrencia.",
    ["Inventario IT", "Relaciones CI", "Historial por activo"]
  ],
  [
    "analytics",
    "Visibilidad ejecutiva",
    "Dashboards operativos y reportes para medir backlog, cumplimiento de SLA, capacidad y calidad del servicio.",
    ["KPIs por área", "Reportes programados", "Tendencias"]
  ]
] as const;

export const capabilityRows = [
  ["Gestión de incidentes", "Clasificación, priorización, asignación y resolución con trazabilidad completa.", "Operación"],
  ["Catálogo de servicios", "Solicitudes estandarizadas para IT, RR. HH., finanzas, facilities y otras áreas.", "ESM"],
  ["Base de conocimiento", "Artículos reutilizables, sugerencias para agentes y autoservicio medible.", "Knowledge"],
  ["Gestión de cambios", "Evaluación de riesgo, aprobaciones, ventanas y registro de decisiones.", "Governance"],
  ["Automatización", "Reglas de negocio, derivaciones y acciones repetibles para reducir trabajo manual.", "Efficiency"],
  ["Asistencia inteligente", "Resumen de tickets, sugerencia de respuestas y búsqueda contextual dentro del flujo.", "Assist"]
];

export const workflowSteps = [
  ["01", "Ingreso", "Portal, email, Teams, WhatsApp o API reciben la solicitud con campos estandarizados."],
  ["02", "Clasificación", "Reglas, prioridades y contexto del usuario ayudan a enrutar al equipo correcto."],
  ["03", "Ejecución", "Tareas, aprobaciones, cambios y comunicaciones quedan trazadas en el ticket."],
  ["04", "Aprendizaje", "Conocimiento, métricas y reportes alimentan mejora continua del servicio."]
];

export const enterpriseProof = [
  ["security", "Seguridad y control", "Roles, permisos, auditoría, trazabilidad de cambios y gobierno preparado para entornos enterprise."],
  ["network", "Arquitectura conectada", "Conectores, API y webhooks para colaboración, identidad, ERP, CRM, discovery e inventario."],
  ["adoption", "Adopción acompañada", "Implementación guiada, capacitación por rol y soporte posterior al go-live para acelerar valor."]
] as const;

export const comparisonRows = [
  ["Herramientas livianas", "Rápidas para empezar, pero limitadas en gobernanza, SLAs, activos y reportes ejecutivos."],
  ["Plataformas legacy", "Potentes, pero suelen requerir proyectos largos, alta dependencia técnica y adopción más compleja."],
  ["InvGate Service Management", "Equilibra capacidad enterprise, configuración flexible, adopción clara y time-to-value más rápido."]
];

export const implementationCards = [
  ["Evaluación", "Mapeo de procesos, roles, servicios y prioridades operativas."],
  ["Configuración", "Portal, formularios, SLAs, automatizaciones e integraciones iniciales."],
  ["Go-live", "Capacitación, acompañamiento operativo y ajustes de adopción."]
];

export const ctaProof = [
  ["security", "Seguridad y permisos"],
  ["configuration", "Configuración por proceso"],
  ["training", "Capacitación por rol"],
  ["support", "Soporte de implementación"]
] as const;
