import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Building2, Handshake, Globe, Zap } from "lucide-react";
import projectBuilding from "@/assets/project-building.jpg";
import projectExcavator from "@/assets/project-excavator.jpg";

const strengths = [
  {
    icon: Building2,
    title: "Sinergia entre empresas",
    description: "Unimos competências complementares para entregar soluções completas e integradas aos nossos clientes.",
  },
  {
    icon: Globe,
    title: "Atuação diversificada",
    description: "Presença em múltiplos segmentos da engenharia, infraestrutura, gestão ambiental e serviços especializados.",
  },
  {
    icon: Handshake,
    title: "Parcerias estratégicas",
    description: "Relacionamentos sólidos com órgãos públicos, indústrias e empresas privadas em diversas regiões do Brasil.",
  },
  {
    icon: Zap,
    title: "Capacidade de execução",
    description: "Estrutura robusta com equipamentos próprios, equipe qualificada e capacidade para projetos de grande escala.",
  },
];

export default function HoldingPage() {
  const { ref: ref1, isVisible: vis1 } = useScrollAnimation();
  const { ref: ref2, isVisible: vis2 } = useScrollAnimation();

  return (
    <>
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={projectBuilding} alt="Turita Holding" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-secondary/80" />
          </div>
          <div className="relative z-10 text-center px-4">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-0.5 bg-accent" />
              <span className="text-sm font-heading font-semibold text-accent uppercase tracking-widest">Grupo empresarial</span>
              <div className="w-12 h-0.5 bg-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight">
              Turita Holding
            </h1>
          </div>
        </section>

        {/* Sobre a Holding */}
        <section ref={ref1} className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-1000 ${vis1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-0.5 bg-accent" />
                  <span className="text-sm font-heading font-semibold text-accent uppercase tracking-widest">Quem somos</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight mb-6">
                  Unindo forças para <span className="text-primary">maximizar resultados</span>
                </h2>
                <p className="text-muted-foreground font-body text-lg leading-relaxed mb-4">
                  A Turita Holding é o grupo empresarial que reúne a AJS Construções e outras empresas estratégicas, com o objetivo de potencializar sinergias e entregar soluções de alto impacto em diversos segmentos da engenharia e infraestrutura.
                </p>
                <p className="text-muted-foreground font-body text-lg leading-relaxed mb-4">
                  Com uma gestão integrada e visão de longo prazo, a holding fortalece cada empresa do grupo, compartilhando recursos, conhecimento e oportunidades de mercado.
                </p>
                <p className="text-muted-foreground font-body text-lg leading-relaxed">
                  Nosso modelo de gestão permite oferecer soluções completas — da construção civil à gestão ambiental, de serviços de facilities a projetos industriais — com a solidez e confiabilidade de um grupo consolidado.
                </p>
              </div>

              <div className="relative">
                <div className="clip-slant-left overflow-hidden rounded-lg shadow-2xl">
                  <img src={projectBuilding} alt="Obra Turita" className="w-full h-80 lg:h-[450px] object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-4 lg:-left-8 w-48 lg:w-60 clip-slant-right overflow-hidden rounded-lg shadow-2xl border-4 border-background">
                  <img src={projectExcavator} alt="Equipamento" className="w-full h-36 lg:h-44 object-cover" />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 border-r-4 border-t-4 border-accent opacity-60" />
              </div>
            </div>
          </div>
        </section>

        {/* Forças */}
        <section ref={ref2} className="py-20 lg:py-28 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className={`text-center mb-16 transition-all duration-1000 ${vis2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-0.5 bg-accent" />
                <span className="text-sm font-heading font-semibold text-accent uppercase tracking-widest">Nossos pilares</span>
                <div className="w-12 h-0.5 bg-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                A força do grupo
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {strengths.map((item, i) => (
                <div
                  key={item.title}
                  className={`bg-background rounded-xl p-8 shadow-lg border border-border/50 transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${vis2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground font-body leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
              Conheça o potencial do nosso grupo
            </h2>
            <p className="text-primary-foreground/70 font-body text-lg mb-8 max-w-2xl mx-auto">
              A Turita Holding está preparada para grandes projetos. Fale com nossa equipe e descubra como podemos agregar valor ao seu negócio.
            </p>
            <a
              href="https://wa.me/5518981560291?text=Olá, vim pelo site e gostaria de saber mais sobre a Turita Holding."
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
