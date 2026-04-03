import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Users, Target, Eye, Award, ShieldCheck, TrendingUp } from "lucide-react";
import projectFleet from "@/assets/project-fleet.png";
import projectEngineer from "@/assets/project-engineer.jpg";
import projectBuilding from "@/assets/project-building.jpg";
import projectExcavator from "@/assets/project-excavator.jpg";

const values = [
  {
    icon: Target,
    title: "Missão",
    description:
      "Oferecer soluções integradas em engenharia, construção civil, gestão ambiental e serviços de infraestrutura, com qualidade, segurança e compromisso socioambiental.",
  },
  {
    icon: Eye,
    title: "Visão",
    description:
      "Ser referência nacional em soluções de infraestrutura, reconhecida pela excelência técnica, inovação e impacto positivo nas comunidades onde atuamos.",
  },
  {
    icon: Award,
    title: "Valores",
    description:
      "Ética, transparência, comprometimento com resultados, valorização das pessoas, responsabilidade socioambiental e melhoria contínua.",
  },
];

const diferenciais = [
  {
    icon: ShieldCheck,
    title: "Segurança em primeiro lugar",
    description: "Cultura de segurança aplicada em todos os níveis da operação, com indicadores rigorosos e treinamento contínuo.",
  },
  {
    icon: Users,
    title: "Equipe qualificada",
    description: "Profissionais experientes e comprometidos, com formação técnica e desenvolvimento constante.",
  },
  {
    icon: TrendingUp,
    title: "Resultados comprovados",
    description: "Mais de 500 projetos entregues com excelência, atendendo prazos e superando expectativas.",
  },
];

export default function SobrePage() {
  const { ref: ref1, isVisible: vis1 } = useScrollAnimation();
  const { ref: ref2, isVisible: vis2 } = useScrollAnimation();
  const { ref: ref3, isVisible: vis3 } = useScrollAnimation();

  return (
    <>
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={projectBuilding} alt="Sobre a AJS" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-secondary/80" />
          </div>
          <div className="relative z-10 text-center px-4">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-0.5 bg-accent" />
              <span className="text-sm font-heading font-semibold text-accent uppercase tracking-widest">Quem somos</span>
              <div className="w-12 h-0.5 bg-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight">
              Sobre a AJS
            </h1>
          </div>
        </section>

        {/* História */}
        <section ref={ref1} className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-1000 ${vis1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="relative">
                <div className="clip-slant-right overflow-hidden rounded-lg shadow-2xl">
                  <img src={projectFleet} alt="Frota AJS" className="w-full h-80 lg:h-[450px] object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-4 lg:-right-8 w-48 lg:w-60 clip-slant-left overflow-hidden rounded-lg shadow-2xl border-4 border-background">
                  <img src={projectEngineer} alt="Engenheiro AJS" className="w-full h-36 lg:h-44 object-cover" />
                </div>
                <div className="absolute -top-4 -left-4 w-20 h-20 border-l-4 border-t-4 border-accent opacity-60" />
              </div>

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-0.5 bg-accent" />
                  <span className="text-sm font-heading font-semibold text-accent uppercase tracking-widest">Nossa trajetória</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight mb-6">
                  Mais de <span className="text-primary">30 anos</span> construindo infraestrutura de alto padrão
                </h2>
                <p className="text-muted-foreground font-body text-lg leading-relaxed mb-4">
                  Fundada com o propósito de atender às demandas crescentes do mercado de infraestrutura brasileiro, a AJS Construções e Comércio se consolidou como uma empresa de referência em construção civil, gestão ambiental e serviços especializados.
                </p>
                <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
                  Ao longo de mais de três décadas, acumulamos experiência em projetos de grande porte para órgãos públicos, indústrias e empresas privadas em diversas regiões do país, sempre priorizando qualidade, segurança e sustentabilidade.
                </p>
                <div className="flex gap-8">
                  <div>
                    <span className="text-4xl font-heading font-bold text-accent">30+</span>
                    <p className="text-sm text-muted-foreground font-body mt-1">Anos de mercado</p>
                  </div>
                  <div>
                    <span className="text-4xl font-heading font-bold text-accent">500+</span>
                    <p className="text-sm text-muted-foreground font-body mt-1">Projetos entregues</p>
                  </div>
                  <div>
                    <span className="text-4xl font-heading font-bold text-accent">50+</span>
                    <p className="text-sm text-muted-foreground font-body mt-1">Municípios atendidos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Missão, Visão, Valores */}
        <section ref={ref2} className="py-20 lg:py-28 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className={`text-center mb-16 transition-all duration-1000 ${vis2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-0.5 bg-accent" />
                <span className="text-sm font-heading font-semibold text-accent uppercase tracking-widest">O que nos guia</span>
                <div className="w-12 h-0.5 bg-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Missão, Visão e Valores
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((item, i) => (
                <div
                  key={item.title}
                  className={`bg-background rounded-xl p-8 shadow-lg border border-border/50 transition-all duration-700 delay-${i * 200} ${vis2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 200}ms` }}
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

        {/* Diferenciais */}
        <section ref={ref3} className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className={`text-center mb-16 transition-all duration-1000 ${vis3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-0.5 bg-accent" />
                <span className="text-sm font-heading font-semibold text-accent uppercase tracking-widest">Por que a AJS</span>
                <div className="w-12 h-0.5 bg-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
                Nossos Diferenciais
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {diferenciais.map((item, i) => (
                <div
                  key={item.title}
                  className={`bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-8 transition-all duration-700 hover:bg-primary-foreground/10 ${vis3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 200}ms` }}
                >
                  <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary-foreground mb-3">{item.title}</h3>
                  <p className="text-primary-foreground/70 font-body leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Pronto para começar seu próximo projeto?
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato e descubra como podemos ajudar a transformar sua visão em realidade.
            </p>
            <a
              href="https://wa.me/5518981560291?text=Olá, vim pelo site e gostaria de mais informações."
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
