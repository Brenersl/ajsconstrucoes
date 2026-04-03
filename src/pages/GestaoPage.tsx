import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ShieldCheck, Leaf, HeartPulse, ClipboardCheck, BarChart3, RefreshCcw } from "lucide-react";
import projectEngineer from "@/assets/project-engineer.jpg";

const pillars = [
  {
    icon: HeartPulse,
    title: "Saúde e Segurança do Trabalho",
    description: "Cultura de prevenção com indicadores rigorosos, treinamentos contínuos e acompanhamento técnico especializado em todas as frentes de serviço.",
  },
  {
    icon: Leaf,
    title: "Meio Ambiente",
    description: "Gestão ambiental integrada com licenciamento, monitoramento de impactos, coleta seletiva e práticas de sustentabilidade em todas as operações.",
  },
  {
    icon: ClipboardCheck,
    title: "Qualidade",
    description: "Processos padronizados e auditados, com controle de qualidade em cada etapa da obra para garantir entregas que superam expectativas.",
  },
  {
    icon: BarChart3,
    title: "Indicadores e Metas",
    description: "Acompanhamento contínuo de KPIs de segurança, qualidade e meio ambiente, com metas claras e revisões periódicas.",
  },
  {
    icon: ShieldCheck,
    title: "Conformidade Legal",
    description: "Atendimento a todas as normas regulamentadoras (NRs), legislação ambiental e requisitos contratuais dos nossos clientes.",
  },
  {
    icon: RefreshCcw,
    title: "Melhoria Contínua",
    description: "Ciclo PDCA aplicado em todos os processos, com auditorias internas e planos de ação para evolução constante do sistema.",
  },
];

export default function GestaoPage() {
  const { ref: ref1, isVisible: vis1 } = useScrollAnimation();
  const { ref: ref2, isVisible: vis2 } = useScrollAnimation();

  return (
    <>
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={projectEngineer} alt="Gestão Integrada" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-secondary/80" />
          </div>
          <div className="relative z-10 text-center px-4">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-0.5 bg-accent" />
              <span className="text-sm font-heading font-semibold text-accent uppercase tracking-widest">SGI</span>
              <div className="w-12 h-0.5 bg-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight">
              Sistema de Gestão Integrada
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section ref={ref1} className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${vis1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Excelência em <span className="text-primary">cada processo</span>
              </h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed mb-4">
                A AJS opera com um Sistema de Gestão Integrada (SGI) que unifica as áreas de Qualidade, Saúde e Segurança do Trabalho e Meio Ambiente, assegurando que todos os projetos atendam aos mais altos padrões do mercado.
              </p>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                Nosso SGI é baseado nas normas ISO 9001, ISO 14001 e ISO 45001, permitindo uma gestão eficiente, segura e ambientalmente responsável em todas as nossas operações.
              </p>
            </div>
          </div>
        </section>

        {/* Pilares */}
        <section ref={ref2} className="py-20 lg:py-28 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className={`text-center mb-16 transition-all duration-1000 ${vis2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-0.5 bg-accent" />
                <span className="text-sm font-heading font-semibold text-accent uppercase tracking-widest">Pilares do SGI</span>
                <div className="w-12 h-0.5 bg-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Os fundamentos do nosso sistema
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pillars.map((item, i) => (
                <div
                  key={item.title}
                  className={`bg-background rounded-xl p-8 shadow-lg border border-border/50 transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${vis2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
              Qualidade e segurança em cada etapa
            </h2>
            <p className="text-primary-foreground/70 font-body text-lg mb-8 max-w-2xl mx-auto">
              Conheça como nosso SGI pode agregar valor ao seu projeto. Entre em contato com nossa equipe.
            </p>
            <a
              href="https://wa.me/5518981560291?text=Olá, vim pelo site e gostaria de mais informações sobre o SGI."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-accent text-accent-foreground font-heading font-bold text-lg rounded hover:brightness-110 transition-all uppercase tracking-wide"
            >
              Fale Conosco
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
