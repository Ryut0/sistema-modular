import { footerColumns } from "./data";
import { TypewriterWord } from "./TypewriterWord";
import { FooterColumn } from "./ui";

export function FooterReveal() {
  return (
    <section className="footer-reveal-shell relative overflow-hidden bg-[#202123]">
      <div className="footer-reveal-panel relative z-10 bg-[#121314] shadow-[0_28px_90px_rgba(0,0,0,0.35)]">
        <Footer />
      </div>
      <FooterBackdrop />
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

        {footerColumns.map((column) => (
          <FooterColumn key={column.title} title={column.title} links={column.links} />
        ))}
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 pt-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
        <p>&copy; 2026 Sistema Modular. Todos los derechos reservados.</p>
        <p>Hecho para operaciones reales, modulares y trazables.</p>
      </div>
    </footer>
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
