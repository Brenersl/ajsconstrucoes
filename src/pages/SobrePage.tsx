import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, Eye, Award, ShieldCheck, Users, TrendingUp, ArrowRight, HardHat, Truck, MonitorCog, BadgeCheck } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import projectFleet from "@/assets/project-fleet.png";
import projectEngineer from "@/assets/project-engineer.jpg";
import projectBuilding from "@/assets/project-building.jpg";
import projectExcavator from "@/assets/project-excavator.jpg";

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
  const { ref: ref4, isVisible: vis4 } = useScrollAnimation();
  const { ref: ref5, isVisible: vis5 } = useScrollAnimation();

  return (
    <>
      <Header />
      <main>
        {/* Hero — Full width image banner like FBS */}
        <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={projectBuilding} alt="Sobre a AJS" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-secondary/75" />
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Sobre nós
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 font-body font-light">
              Construindo o futuro com soluções integradas de engenharia
            </p>
          </div>
        </section>

        {/* Intro text — clean, centered, like FBS */}
        <section ref={ref1} className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className={`max-w-4xl mx-auto transition-all duration-1000 ${vis1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p className="text-xl md:text-2xl text-foreground font-body leading-relaxed mb-6">
                A <strong className="font-heading font-bold">AJS Construções e Comércio</strong> é uma empresa especializada em projetos de engenharia, infraestrutura e gestão ambiental, com mais de <strong className="text-primary font-bold">30 anos de experiência</strong> no mercado.
              </p>
              <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
                Ao longo de sua trajetória, a AJS se consolidou como referência em soluções duráveis e de alta performance, investindo constantemente em modernidade, tecnologia e capacitação técnica. Atuamos em projetos de grande porte para órgãos públicos, indústrias e empresas privadas em diversas regiões do Brasil.
              </p>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                Nos orgulhamos de ser uma empresa transparente, com uma equipe altamente capacitada e relações duradouras com clientes, parceiros e profissionais. A AJS possui uma imagem sólida no mercado e está sempre projetando o futuro, buscando oferecer a melhor solução para cada projeto com versatilidade, agilidade e compromisso socioambiental.
              </p>
            </div>
          </div>
        </section>

        {/* Missão, Visão, Valores — horizontal cards on colored bg */}
        <section ref={ref2} className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-px bg-primary-foreground/10 rounded-xl overflow-hidden shadow-2xl transition-all duration-1000 ${vis2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {[
                { icon: Eye, title: "Visão", text: "Ser referência nacional em soluções de infraestrutura, reconhecida pela excelência técnica, inovação e impacto positivo nas comunidades onde atuamos." },
                { icon: Target, title: "Missão", text: "Executar obras com qualidade, segurança e soluções tecnológicas eficientes, por meio de uma gestão profissionalizada, garantindo a solidez do negócio e o respeito total a todos os envolvidos." },
                { icon: Award, title: "Valores", text: "Ética, transparência, comprometimento com resultados, valorização das pessoas, responsabilidade socioambiental e melhoria contínua." },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="bg-secondary p-10 lg:p-12 flex flex-col transition-all duration-700"
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <item.icon className="w-10 h-10 text-accent mb-6" />
                  <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-4">{item.title}</h3>
                  <p className="text-primary-foreground/70 font-body leading-relaxed flex-1">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Numbers — impactful stats */}
        <section ref={ref3} className="py-16 bg-accent">
          <div className="container mx-auto px-4 lg:px-8">
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 text-center transition-all duration-1000 ${vis3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {[
                { target: 30, label: "Anos de mercado" },
                { target: 500, label: "Projetos entregues" },
                { target: 50, label: "Municípios atendidos" },
                { target: 1000, label: "Colaboradores" },
              ].map((stat) => (
                <div key={stat.label}>
                  <AnimatedCounter target={stat.target} isVisible={vis3} className="text-4xl md:text-5xl font-heading font-bold text-accent-foreground" />
                  <p className="text-sm md:text-base text-accent-foreground/80 font-body mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capacidade Operacional */}
        <section ref={ref5} className="py-20 lg:py-28 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className={`mb-14 transition-all duration-1000 ${vis5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-1 h-10 bg-accent rounded-full" />
                <div>
                  <span className="text-sm font-heading font-semibold text-accent uppercase tracking-widest">Capacidade Operacional</span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
                    Estrutura para Executar Grandes Contratos
                  </h2>
                </div>
              </div>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1000 delay-200 ${vis5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {[
                {
                  icon: HardHat,
                  title: "Equipe Técnica",
                  description: "Engenheiros, técnicos de segurança, supervisores e operadores qualificados com treinamento contínuo.",
                },
                {
                  icon: Truck,
                  title: "Frota Própria",
                  description: "Caminhões compactadores de lixo 15 m³, retroescavadeiras, escavadeiras e equipamentos de grande porte.",
                },
                {
                  icon: MonitorCog,
                  title: "Sistemas de Gestão",
                  description: "Rastreamento de frota via satélite, controles ambientais e de qualidade rigorosos.",
                },
                {
                  icon: BadgeCheck,
                  title: "Compliance Total",
                  description: "Regularidade técnica comprovada: ARTs, CREA, NRs, e licenças ambientais vigentes.",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="bg-background border border-border rounded-xl p-8 flex items-start gap-5 hover:shadow-lg transition-all duration-300"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <item.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-foreground uppercase tracking-wide mb-2">{item.title}</h3>
                    <p className="text-muted-foreground font-body leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais — alternating image+text */}
        <section ref={ref4} className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className={`text-center mb-16 transition-all duration-1000 ${vis4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-0.5 bg-accent" />
                <span className="text-sm font-heading font-semibold text-accent uppercase tracking-widest">Por que a AJS</span>
                <div className="w-12 h-0.5 bg-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Nossos Diferenciais
              </h2>
            </div>

            <div className="space-y-16 lg:space-y-24">
              {diferenciais.map((item, i) => {
                const images = [projectFleet, projectEngineer, projectExcavator];
                const reverse = i % 2 !== 0;
                return (
                  <div
                    key={item.title}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${vis4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    style={{ transition: "all 1s ease", transitionDelay: `${i * 200}ms` }}
                  >
                    <div className={`relative ${reverse ? "lg:order-2" : ""}`}>
                      <div className="overflow-hidden rounded-lg shadow-2xl">
                        <img src={images[i]} alt={item.title} className="w-full h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-700" />
                      </div>
                    </div>
                    <div className={reverse ? "lg:order-1" : ""}>
                      <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                        <item.icon className="w-7 h-7 text-accent" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">{item.title}</h3>
                      <p className="text-muted-foreground font-body text-lg leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted">
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
              className="inline-flex items-center gap-3 px-10 py-4 bg-accent text-accent-foreground font-heading font-bold text-lg rounded hover:brightness-110 transition-all uppercase tracking-wide"
            >
              Fale Conosco
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
