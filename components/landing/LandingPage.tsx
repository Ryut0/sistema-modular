import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Check,
  ClipboardCheck,
  Clock3,
  Database,
  Headphones,
  LifeBuoy,
  LockKeyhole,
  Network,
  ShieldCheck,
  SlidersHorizontal,
  TrendingDown,
  UsersRound,
  Workflow
} from "lucide-react";
import { DashboardMockup } from "@/components/DashboardMockup";
import { Header } from "@/components/Header";
import { SectionTitle } from "@/components/landing/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  capabilityRows,
  comparisonRows,
  ctaProof,
  enterpriseProof,
  heroMetrics,
  implementationCards,
  painPoints,
  platformAreas,
  workflowSteps
} from "@/data/landing";
import { faqs, footerGroups, integrations, logos, onboardingSteps, reviews, stories } from "@/data/site";

const painPointIcons = {
  approvals: Clock3,
  assets: Database,
  backlog: TrendingDown
};

const platformIcons = {
  analytics: BarChart3,
  assets: Database,
  desk: LifeBuoy,
  workflow: Workflow
};

const enterpriseIcons = {
  adoption: UsersRound,
  network: Network,
  security: ShieldCheck
};

const ctaIcons = {
  configuration: SlidersHorizontal,
  security: LockKeyhole,
  support: Headphones,
  training: BookOpen
};

export function LandingPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <Header />
      <HeroSection />
      <LogoStrip />
      <ProblemSection />
      <PlatformSection />
      <CapabilitiesSection />
      <WorkflowSection />
      <IntegrationsSection />
      <ComparisonSection />
      <EnterpriseSection />
      <ImplementationSection />
      <StoriesSection />
      <ReviewsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}

function HeroSection() {
  return (
    <section
      className="relative border-b border-slate-200 pt-28 sm:pt-32"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(246,248,251,0.98), rgba(255,255,255,0.96)), linear-gradient(90deg, rgba(15,23,42,0.055) 1px, transparent 1px), linear-gradient(rgba(15,23,42,0.055) 1px, transparent 1px)",
        backgroundSize: "auto, 42px 42px, 42px 42px"
      }}
    >
      <div className="premium-container grid gap-10 pb-16 lg:grid-cols-[0.88fr_1.12fr] lg:pb-20">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-slate-600">
            <ShieldCheck className="h-4 w-4 text-brand" />
            ITSM enterprise sin complejidad innecesaria
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.04] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.75rem]">
            Centraliza servicios, automatiza procesos y controla tu operación IT
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            InvGate Service Management ayuda a equipos IT a ordenar tickets, SLAs, activos, aprobaciones y reportes desde una
            plataforma preparada para crecer con la organización.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#cta">
                Solicitar demo personalizada
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#producto">Ver capacidades ITSM</a>
            </Button>
          </div>
          <p className="mt-4 text-sm font-semibold text-slate-500">Demo sin compromiso, orientada a tus procesos reales de soporte.</p>
          <div className="mt-9 grid grid-cols-2 border-y border-slate-300 sm:grid-cols-4">
            {heroMetrics.map(([value, label]) => (
              <div key={label} className="border-slate-300 py-4 sm:border-r sm:last:border-r-0">
                <b className="block text-xl font-extrabold tracking-tight text-slate-950">{value}</b>
                <span className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <DashboardMockup />
          <div className="absolute -bottom-5 left-6 hidden border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-soft md:block">
            SLA crítico priorizado automáticamente
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoStrip() {
  return (
    <section className="border-b border-slate-200 bg-white py-10">
      <div className="premium-container">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="max-w-sm text-sm font-bold uppercase tracking-[0.12em] text-slate-500">
            Usado por organizaciones con operaciones de soporte complejas
          </p>
          <div className="grid flex-1 grid-cols-2 border-l border-t border-slate-200 sm:grid-cols-4 lg:grid-cols-6">
            {logos.map((logo) => (
              <div
                key={logo}
                className="grid min-h-14 place-items-center border-b border-r border-slate-200 px-3 text-center text-xs font-extrabold text-slate-500"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="py-14 sm:py-16">
      <div className="premium-container">
        <SectionTitle
          eyebrow="Problema"
          title="Cuando la operación crece, el soporte no puede depender de canales dispersos"
          description="El costo real no está solo en resolver tickets: está en perder trazabilidad, incumplir SLAs, duplicar trabajo y no poder explicar el rendimiento del servicio."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {painPoints.map(([kind, title, body]) => {
            const Icon = painPointIcons[kind];
            return (
              <div key={title} className="h-full border-l-2 border-slate-900 bg-slate-50 p-5">
                <Icon className="h-5 w-5 text-brand" />
                <h3 className="mt-5 text-lg font-extrabold tracking-tight text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PlatformSection() {
  return (
    <section id="producto" className="border-y border-slate-200 bg-[#f8fafc] py-16 sm:py-20">
      <div className="premium-container">
        <div className="grid gap-8 lg:grid-cols-[0.74fr_1.26fr]">
          <div>
            <SectionTitle
              eyebrow="Plataforma"
              title="Un sistema operativo para la mesa de servicio"
              description="Diseña, opera y mide servicios internos con una base común para ITSM, ESM, activos, conocimiento, automatización y analítica."
            />
            <Button asChild variant="secondary" className="mt-6">
              <a href="#cta">
                Hablar con un especialista <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {platformAreas.map(([kind, title, body, points], index) => {
              const Icon = platformIcons[kind];
              return (
                <Card key={title} className="h-full motion-hover">
                  <CardContent>
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <Icon className="h-5 w-5 text-brand" />
                      <span className="text-xs font-bold uppercase tracking-[0.1em] text-slate-400">0{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-extrabold tracking-tight text-slate-950">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {points.map((point) => (
                        <span key={point} className="border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-600">
                          {point}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  return (
    <section id="soluciones" className="py-16 sm:py-20">
      <div className="premium-container">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionTitle
              eyebrow="Capacidades"
              title="Cobertura funcional sin fragmentar la operación"
              description="InvGate concentra los procesos que un equipo IT necesita para responder mejor, reducir trabajo manual y sostener estándares de servicio."
            />
            <div className="mt-7 flex flex-wrap gap-3">
              {["ITSM", "ESM", "ITAM", "Analytics", "Automation"].map((item) => (
                <span key={item} className="border border-slate-300 bg-white px-3 py-2 text-xs font-bold text-slate-700">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="border border-slate-200 bg-white">
            {capabilityRows.map(([title, body, tag]) => (
              <div key={title} className="grid gap-3 border-b border-slate-200 p-5 last:border-b-0 sm:grid-cols-[180px_1fr_92px]">
                <h3 className="font-extrabold tracking-tight text-slate-950">{title}</h3>
                <p className="text-sm leading-6 text-slate-600">{body}</p>
                <span className="self-start text-xs font-bold uppercase tracking-[0.1em] text-brand">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section id="funcionalidades" className="border-y border-slate-200 bg-[#f8fafc] py-16 sm:py-20">
      <div className="premium-container">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionTitle
            eyebrow="Flujo operativo"
            title="Del pedido inicial al reporte ejecutivo, sin perder trazabilidad"
            description="Cada ticket conserva contexto, responsables, activos relacionados, aprobaciones y datos útiles para mejorar el servicio."
          />
          <div className="border border-slate-200 bg-white">
            {workflowSteps.map(([number, title, body]) => (
              <div key={title} className="grid grid-cols-[72px_1fr] border-b border-slate-200 last:border-b-0">
                <div className="border-r border-slate-200 bg-slate-50 p-5 text-sm font-extrabold text-slate-500">{number}</div>
                <div className="p-5">
                  <h3 className="font-extrabold text-slate-950">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IntegrationsSection() {
  return (
    <section id="integraciones" className="py-16 sm:py-20">
      <div className="premium-container">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionTitle
              eyebrow="Integraciones"
              title="Encaja en el stack que la empresa ya usa"
              description="Conecta colaboración, identidad, inventario, ERP, CRM y automatización para que la plataforma se adopte dentro del flujo de trabajo existente."
            />
            <Button asChild variant="secondary" className="mt-6">
              <a href="#cta">
                Consultar integraciones <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="grid border-l border-t border-slate-200 bg-white sm:grid-cols-3">
            {integrations.map((integration) => (
              <div key={integration} className="border-b border-r border-slate-200 p-4 text-sm font-bold text-slate-700">
                {integration}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="border-y border-slate-200 bg-slate-950 py-16 text-white sm:py-20">
      <div className="premium-container">
        <SectionTitle
          eyebrow="Diferenciación"
          title="Capacidad enterprise sin arrastrar complejidad innecesaria"
          description="Ideal para equipos que necesitan control, velocidad de implementación y una experiencia que las áreas internas realmente puedan adoptar."
          inverted
        />
        <div className="mt-8 border border-white/15">
          {comparisonRows.map(([title, body], index) => (
            <div
              key={title}
              className={`grid gap-3 border-b border-white/15 p-5 last:border-b-0 md:grid-cols-[240px_1fr] ${
                index === 2 ? "bg-white text-slate-950" : ""
              }`}
            >
              <h3 className="font-extrabold">{title}</h3>
              <p className={`text-sm leading-6 ${index === 2 ? "text-slate-600" : "text-slate-300"}`}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnterpriseSection() {
  return (
    <section id="empresa" className="py-16 sm:py-20">
      <div className="premium-container">
        <div className="grid gap-8 lg:grid-cols-3">
          {enterpriseProof.map(([kind, title, body]) => {
            const Icon = enterpriseIcons[kind];
            return (
              <div key={title} className="border-t-2 border-slate-900 pt-5">
                <Icon className="h-5 w-5 text-brand" />
                <h3 className="mt-5 text-xl font-extrabold tracking-tight text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ImplementationSection() {
  return (
    <section className="border-y border-slate-200 bg-[#f8fafc] py-16 sm:py-20">
      <div className="premium-container grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <SectionTitle
            eyebrow="Implementación"
            title="Onboarding guiado para llegar a producción con orden"
            description="Desde el primer día, especialistas acompañan configuración, integraciones, entrenamiento y adopción operativa."
          />
          <div className="mt-7 space-y-3">
            {onboardingSteps.map((step, index) => (
              <div key={step} className="flex gap-3 text-sm font-semibold text-slate-700">
                <span className="mt-0.5 text-xs font-extrabold text-brand">{String(index + 1).padStart(2, "0")}</span>
                {step}
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {implementationCards.map(([title, body]) => (
            <Card key={title} className="h-full motion-hover">
              <CardContent>
                <ClipboardCheck className="h-5 w-5 text-brand" />
                <h3 className="mt-5 text-lg font-extrabold tracking-tight text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function StoriesSection() {
  return (
    <section id="clientes" className="py-16 sm:py-20">
      <div className="premium-container">
        <SectionTitle
          eyebrow="Clientes"
          title="Historias de equipos que operan servicios críticos"
          description="Casos presentados con industria, rol y contexto para reducir riesgo percibido durante la evaluación."
        />
        <div className="mt-9 grid gap-4 lg:grid-cols-2">
          {stories.map((story) => (
            <article key={story.company} className="grid border border-slate-200 bg-white sm:grid-cols-[180px_1fr]">
              <div className="border-b border-slate-200 bg-slate-50 p-5 sm:border-b-0 sm:border-r">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">{story.industry}</p>
                <h3 className="mt-3 text-xl font-extrabold tracking-tight text-slate-950">{story.company}</h3>
                <p className="mt-5 text-sm font-bold text-slate-600">{story.person}</p>
                <p className="mt-1 text-sm leading-6 text-slate-500">{story.role}</p>
              </div>
              <div className="p-5">
                <p className="text-base font-semibold leading-7 tracking-tight text-slate-900">&ldquo;{story.quote}&rdquo;</p>
                <a href="#cta" className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-brand">
                  Leer caso de éxito <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section id="reviews" className="border-y border-slate-200 bg-[#f8fafc] py-16 sm:py-20">
      <div className="premium-container">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionTitle
            eyebrow="Validación"
            title="Señales de confianza para compras B2B"
            description="Opiniones breves y fáciles de escanear sobre implementación, flexibilidad y centralización operativa."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {reviews.map((review) => (
              <Card key={review.title} className="h-full">
                <CardContent>
                  <h3 className="text-base font-extrabold tracking-tight text-slate-950">{review.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">&ldquo;{review.body}&rdquo;</p>
                  <p className="mt-5 border-t border-slate-200 pt-4 text-xs font-bold uppercase tracking-[0.08em] text-slate-500">
                    {review.role} · {review.segment}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="premium-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionTitle
          eyebrow="FAQ"
          title="Preguntas frecuentes"
          description="Información directa para equipos que están evaluando alcance, integración, seguridad y adopción."
        />
        <div className="rounded-md border border-slate-200 bg-white">
          {faqs.map((faq, index) => (
            <details key={faq.question} className="group border-b border-slate-200 last:border-b-0" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 text-left text-base font-extrabold tracking-tight text-slate-950 marker:hidden">
                {faq.question}
                <span className="text-xl leading-none text-slate-400 group-open:hidden">+</span>
                <span className="hidden text-xl leading-none text-slate-400 group-open:inline">-</span>
              </summary>
              <p className="px-5 pb-5 text-base leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section id="cta" className="border-y border-slate-200 bg-slate-950 py-16 text-white sm:py-20">
      <div className="premium-container grid gap-8 lg:grid-cols-[1fr_0.62fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Evaluación guiada</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Valida InvGate con un escenario real de tu operación
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Agenda una demo orientada a tus procesos: tickets, SLAs, activos, aprobaciones, integraciones y reportes.
          </p>
          <Button asChild variant="hero" size="lg" className="mt-8">
            <a href="mailto:contacto@invgate.com?subject=Solicitud%20de%20demo%20InvGate%20Service%20Management">
              Solicitar demo personalizada
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
        <div className="border border-white/15">
          {ctaProof.map(([kind, label]) => {
            const Icon = ctaIcons[kind];
            return (
              <div key={label} className="flex items-center gap-3 border-b border-white/15 p-4 last:border-b-0">
                <Icon className="h-4 w-4 text-accent" />
                <span className="text-sm font-bold text-slate-200">{label}</span>
                <Check className="ml-auto h-4 w-4 text-emerald-400" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contacto" className="bg-white py-12">
      <div className="premium-container">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_repeat(4,1fr)]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center bg-ink text-xs font-extrabold text-white">IG</span>
              <span className="text-xl font-extrabold tracking-tight text-slate-950">InvGate</span>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-600">
              Plataforma enterprise para servicios, activos, automatizaciones y analítica operacional.
            </p>
          </div>
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-xs font-extrabold uppercase tracking-[0.12em] text-slate-950">{group.title}</h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#cta" className="text-sm font-semibold text-slate-500 transition hover:text-slate-950">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-slate-200 pt-6 text-sm font-semibold text-slate-500 sm:flex-row">
          <p>© InvGate</p>
          <div className="flex flex-wrap gap-5">
            <a href="#cta">Política de privacidad</a>
            <a href="#cta">Términos y condiciones</a>
            <a href="#cta">Accesibilidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
