import { ArrowRight } from "lucide-react";

const navItems = [
  ["Producto", "producto"],
  ["Soluciones", "soluciones"],
  ["Funcionalidades", "funcionalidades"],
  ["Integraciones", "integraciones"],
  ["Clientes", "clientes"]
];

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white/95">
      <nav className="premium-container flex h-16 items-center justify-between gap-6">
        <a href="#" className="flex items-center gap-3" aria-label="InvGate">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-ink text-xs font-extrabold text-white">IG</span>
          <span className="text-lg font-extrabold tracking-tight text-slate-950">InvGate</span>
        </a>

        <div className="hidden items-center gap-7 text-sm font-semibold text-slate-600 lg:flex">
          {navItems.map(([label, target]) => (
            <a key={target} href={`#${target}`} className="transition hover:text-slate-950">
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="#contacto" className="hidden text-sm font-bold text-slate-700 transition hover:text-slate-950 sm:inline-flex">
            Contacto
          </a>
          <a
            href="#cta"
            className="inline-flex h-10 items-center gap-2 rounded-md bg-ink px-4 text-sm font-bold text-white transition-colors hover:bg-slate-800"
          >
            Solicitar demo
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </nav>
    </header>
  );
}
