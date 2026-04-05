import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Building2, Trash2, Users, Leaf, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import projectBuilding from "@/assets/project-building.jpg";
import projectExcavator from "@/assets/project-excavator.jpg";
import projectFleet from "@/assets/project-fleet.png";
import projectEngineer from "@/assets/project-engineer.jpg";

const solucoes = [
  {
    icon: Building2,
    title: "Construção Civil",
    image: projectBuilding,
    description:
      "Execução de obras de infraestrutura, edificações, pavimentação e urbanização com alto padrão de qualidade, segurança e cumprimento de prazos.",
    items: [
      "Obras públicas e privadas",
      "Edificações comerciais e industriais",
      "Pavimentação e terraplanagem",
      "Urbanização e saneamento",
      "Reformas e revitalizações",
    ],
  },
  {
    icon: Trash2,
    title: "Limpeza Urbana",
    image: projectFleet,
    description:
      "Serviços completos de coleta de resíduos sólidos urbanos, varrição mecanizada e manual, limpeza de espaços públicos e destinação adequada de resíduos.",
    items: [
      "Coleta de resíduos sólidos urbanos",
      "Varrição mecanizada e manual",
      "Limpeza de áreas públicas",
      "Destinação e transporte de resíduos",
      "Locação de caminhões compactadores",
    ],
  },
  {
    icon: Users,
    title: "Facilities & Terceirizados",
    image: projectEngineer,
    description:
      "Gestão operacional integrada com mão de obra especializada para atender demandas de saúde, segurança do trabalho, meio ambiente e sistemas de gestão.",
    items: [
      "Gestão de saúde e segurança do trabalho",
      "Gestão ambiental e SGI",
      "Mão de obra especializada",
      "Serviços de apoio operacional",
      "Gestão de contratos e indicadores",
    ],
  },
  {
    icon: Leaf,
    title: "Gestão Ambiental",
    image: projectExcavator,
    description:
      "Licenciamento ambiental, recuperação de áreas degradadas, reflorestamento e soluções sustentáveis alinhadas às exigências legais e melhores práticas do mercado.",
    items: [
      "Licenciamento ambiental",
      "Recuperação de áreas degradadas",
      "Reflorestamento e plantio de árvores",
      "Curvas de nível e preparo de solo",
      "Consultoria e conformidade ambiental",
    ],
  },
];

export default function SolucoesPage() {
  const { ref: heroRef, isVisible: heroVis } = useScrollAnimation();

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={projectBuilding} alt="Soluções AJS" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-secondary/80" />
          </div>
          <div className="relative z-10 text-center px-4">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-0.5 bg-accent" />
              <span className="text-sm font-heading font-semibold text-accent uppercase tracking-widest">
                O que fazemos
              </span>
              <div className="w-12 h-0.5 bg-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight">
              Nossas Soluções
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/70 font-body max-w-2xl mx-auto">
              Atuamos em quatro grandes frentes, oferecendo soluções completas e integradas para projetos de todos os portes.
            </p>
          </div>
        </section>

        {/* Soluções Detail */}
        {solucoes.map((sol, index) => {
          const isEven = index % 2 === 0;
          return <SolucaoBlock key={sol.title} sol={sol} reverse={!isEven} index={index} />;
        })}

        {/* CTA */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
              Precisa de uma solução sob medida?
            </h2>
            <p className="text-primary-foreground/70 font-body text-lg mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para entender seu projeto e oferecer a melhor solução técnica.
            </p>
            <a
              href="https://wa.me/5518981560291?text=Olá, vim pelo site e gostaria de mais informações sobre soluções."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-accent text-accent-foreground font-heading font-bold text-lg rounded hover:brightness-110 transition-all uppercase tracking-wide"
            >
              Fale com um especialista
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

function SolucaoBlock({
  sol,
  reverse,
  index,
}: {
  sol: (typeof solucoes)[number];
  reverse: boolean;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();
  const bgClass = index % 2 === 0 ? "bg-background" : "bg-muted";

  return (
    <section ref={ref} className={`py-20 lg:py-28 ${bgClass}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Image */}
          <div className={`relative ${reverse ? "lg:order-2" : ""}`}>
            <div className="clip-slant-right overflow-hidden rounded-lg shadow-2xl">
              <img src={sol.image} alt={sol.title} className="w-full h-72 lg:h-[400px] object-cover" />
            </div>
            <div className="absolute -top-4 -left-4 w-20 h-20 border-l-4 border-t-4 border-accent opacity-60" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r-4 border-b-4 border-accent/30" />
          </div>

          {/* Content */}
          <div className={reverse ? "lg:order-1" : ""}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center">
                <sol.icon className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{sol.title}</h2>
            </div>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">{sol.description}</p>
            <ul className="space-y-3">
              {sol.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground font-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
