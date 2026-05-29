const tickets = [
  ["INC-2481", "VPN intermitente", "Alta", "bg-red-500"],
  ["REQ-1940", "Alta usuario SAP", "Normal", "bg-emerald-500"],
  ["CHG-8821", "Cambio firewall", "Aprobado", "bg-blue-500"],
  ["SR-4209", "Notebook nueva", "En curso", "bg-amber-500"],
  ["PRB-1142", "Correo masivo", "Riesgo", "bg-red-500"],
  ["KB-3920", "Artículo sugerido", "Nuevo", "bg-slate-400"]
];

const menu = ["IN", "SR", "KB", "AS", "AN", "AD"];

export function DashboardMockup() {
  return (
    <div className="overflow-hidden rounded-md border border-slate-300 bg-white">
      <div className="flex h-11 items-center justify-between border-b border-slate-200 bg-white px-4">
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-slate-500">Service desk</span>
        </div>
        <span className="hidden text-xs font-bold text-slate-500 sm:inline">Producción · Latam Ops</span>
      </div>

      <div className="grid min-h-[500px] grid-cols-[52px_1fr] bg-[#f6f8fb] lg:grid-cols-[58px_1fr_270px]">
        <aside className="flex flex-col items-center gap-2 border-r border-slate-200 bg-slate-950 px-2 py-4">
          {menu.map((item, index) => (
            <span
              key={item}
              className={`grid h-8 w-8 place-items-center rounded-md text-[10px] font-extrabold ${
                index === 0 ? "bg-white text-slate-950" : "text-slate-300"
              }`}
            >
              {item}
            </span>
          ))}
        </aside>

        <main className="min-w-0 p-4">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">Operación</p>
              <h3 className="text-lg font-extrabold tracking-tight text-slate-950">Panel de solicitudes</h3>
            </div>
            <div className="flex gap-2">
              {["Todos", "Abiertos", "SLA"].map((chip) => (
                <span key={chip} className="rounded-md border border-slate-200 bg-white px-3 py-1 text-[11px] font-bold text-slate-600">
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-4 grid grid-cols-3 gap-3">
            {[
              ["1.483", "Solicitudes"],
              ["97%", "SLA"],
              ["4.8", "CSAT"]
            ].map(([value, label]) => (
              <div key={label} className="rounded-md border border-slate-200 bg-white p-3">
                <b className="block text-lg tracking-tight text-slate-950">{value}</b>
                <span className="text-[11px] font-semibold text-slate-500">{label}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {tickets.map(([id, title, status, color]) => (
              <article key={id} className="rounded-md border border-slate-200 bg-white p-3">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="text-[11px] font-extrabold text-slate-500">{id}</span>
                  <span className={`h-2.5 w-2.5 rounded-full ${color}`} />
                </div>
                <p className="mb-3 min-h-10 text-sm font-bold leading-snug text-slate-900">{title}</p>
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-600">{status}</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-slate-400">IT Ops</span>
                </div>
              </article>
            ))}
          </div>
        </main>

        <aside className="hidden border-l border-slate-200 bg-white p-5 lg:block">
          <div className="mb-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">Detalle</p>
            <h4 className="mt-1 text-base font-extrabold tracking-tight text-slate-950">REQ-1940</h4>
          </div>
          <div className="mb-5 rounded-md border border-slate-200 bg-slate-50 p-4">
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-slate-200 text-xs font-extrabold text-slate-600">LM</span>
              <div>
                <b className="block text-sm text-slate-950">Laura Medina</b>
                <span className="text-xs font-semibold text-slate-500">Operaciones</span>
              </div>
            </div>
            <p className="text-sm leading-6 text-slate-600">Solicitud de alta de usuario con aprobación pendiente.</p>
          </div>
          <div className="space-y-4">
            {[
              ["Aprobación", "Pendiente"],
              ["SLA", "6h restantes"],
              ["Activo", "SAP Core"],
              ["Prioridad", "Normal"]
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between border-b border-slate-100 pb-3 text-sm">
                <span className="font-semibold text-slate-500">{label}</span>
                <span className="font-bold text-slate-900">{value}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
