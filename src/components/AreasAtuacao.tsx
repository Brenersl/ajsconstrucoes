import { Building2, Trash2, Users, Leaf } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const areas = [
  {
    icon: Building2,
    title: "Construção Civil",
    desc: "Obras de infraestrutura, edificações e pavimentação com qualidade e prazo.",
  },
  {
    icon: Trash2,
    title: "Limpeza Urbana",
    desc: "Coleta de resíduos sólidos, varrição mecanizada e limpeza de espaços públicos.",
  },
  {
    icon: Users,
    title: "Facilities & Terceirizados",
    desc: "Serviços especializados de mão de obra e gestão operacional integrada.",
  },
  {
    icon: Leaf,
    title: "Gestão Ambiental",
    desc: "Licenciamento, recuperação de áreas degradadas e soluções sustentáveis.",
  },
];

export default function AreasAtuacao() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-1 bg-accent" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-accent" />
            <span className="text-sm font-heading font-semibold text-accent uppercase tracking-widest">Soluções</span>
            <div className="w-12 h-0.5 bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground">
            Áreas de Atuação
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, i) => (
            <div
              key={area.title}
              className={`group relative p-8 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-accent/10 hover:border-accent/30 transition-all duration-500 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <area.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-heading font-bold text-primary-foreground mb-3">
                {area.title}
              </h3>
              <p className="text-sm text-primary-foreground/60 font-body leading-relaxed">
                {area.desc}
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
