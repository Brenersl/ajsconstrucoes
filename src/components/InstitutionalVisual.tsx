import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AnimatedCounter from "@/components/AnimatedCounter";
import projectFleet from "@/assets/project-fleet.png";
import projectEngineer from "@/assets/project-engineer.jpg";
import projectBuilding from "@/assets/project-building.jpg";
import projectExcavator from "@/assets/project-excavator.jpg";

export default function InstitutionalVisual() {
  const { ref: ref1, isVisible: vis1 } = useScrollAnimation();
  const { ref: ref2, isVisible: vis2 } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32 bg-muted overflow-hidden">
      {/* Block 1 */}
      <div ref={ref1} className="container mx-auto px-4 lg:px-8 mb-24 lg:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <div className={`relative transition-all duration-1000 ${vis1 ? "animate-fade-in-left" : "opacity-0"}`}>
            <div className="relative">
              <div className="clip-slant-right overflow-hidden rounded-lg shadow-2xl">
                <img src={projectFleet} alt="Frota AJS" className="w-full h-80 lg:h-[420px] object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-4 lg:-right-8 w-48 lg:w-64 clip-slant-left overflow-hidden rounded-lg shadow-2xl border-4 border-background">
                <img src={projectEngineer} alt="Engenheiro AJS" className="w-full h-36 lg:h-48 object-cover" />
              </div>
              {/* Decorative */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-l-4 border-t-4 border-accent opacity-60" />
            </div>
          </div>

          {/* Text */}
          <div className={`transition-all duration-1000 delay-200 ${vis1 ? "animate-fade-in-right" : "opacity-0"}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-accent" />
              <span className="text-sm font-heading font-semibold text-accent uppercase tracking-widest">Nossa História</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight mb-6">
              Estamos há mais de{" "}
              <span className="text-primary">30 anos</span>{" "}
              oferecendo soluções em infraestrutura para o mercado
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
              Com expertise consolidada, a AJS se posiciona como referência em construção civil, gestão ambiental e serviços de infraestrutura em todo o Brasil.
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

      {/* Block 2 */}
      <div ref={ref2} className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className={`order-2 lg:order-1 transition-all duration-1000 ${vis2 ? "animate-fade-in-left" : "opacity-0"}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-accent" />
              <span className="text-sm font-heading font-semibold text-accent uppercase tracking-widest">Turita Holding</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight mb-6">
              Fazemos parte da{" "}
              <span className="text-primary">Turita Holding</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              Unindo esforços com o objetivo de maximizar oportunidades e entregar resultados de alto impacto em diversos segmentos da engenharia e infraestrutura.
            </p>
          </div>

          {/* Images */}
          <div className={`order-1 lg:order-2 relative transition-all duration-1000 delay-200 ${vis2 ? "animate-fade-in-right" : "opacity-0"}`}>
            <div className="relative">
              <div className="clip-slant-left overflow-hidden rounded-lg shadow-2xl">
                <img src={projectBuilding} alt="Obra AJS" className="w-full h-80 lg:h-[420px] object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-4 lg:-left-8 w-48 lg:w-64 clip-slant-right overflow-hidden rounded-lg shadow-2xl border-4 border-background">
                <img src={projectExcavator} alt="Escavadeira AJS" className="w-full h-36 lg:h-48 object-cover" />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 border-r-4 border-t-4 border-accent opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
