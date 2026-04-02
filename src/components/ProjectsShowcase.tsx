import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin } from "lucide-react";

const projectList = [
  "Ala de Contenção - Estrela do Norte SP",
  "Gestão de Saúde, Segurança do Trabalho, Meio Ambiente e SGI Usiminas - Ipatinga MG",
  "Gestão de Saúde, Segurança do Trabalho, Meio Ambiente e SGI - FLM São Simão GO",
  "Gestão de Saúde, Segurança do Trabalho, Meio Ambiente e SGI - ANX Paulínia SP",
  "Reforma, Revitalização Geral, Adequações Legais Fábrica de Vagões – ANX Paulínia SP",
  "Licenciamento Ambiental – ANX Paulínia SP",
  "Espaço de Saúde - Estrela do Norte SP",
  "Coleta Resíduos Sólidos Urbanos - Santa Helena de Goiás GO",
  "Centro de Convivência - Euclides da Cunha Paulista SP",
  "Pista de Caminhada - Estrela do Norte SP",
  "Centro de Convivência - Tarabai SP",
  "Espaço de Saúde - Presidente Venceslau SP",
  "Espaço de Saúde - Piquerobi SP",
  "Salas de Aula - Estrela do Norte SP",
  "Poste de Led - Estrela do Norte SP",
  "Pista de Caminhada e Calçada - Presidente Venceslau SP",
  "Reforma Recinto - Sandovalina SP",
  "Reforma Escola - Sandovalina SP",
  "Ala de Contenção e Passarela - Sandovalina SP",
  "Reforma Praça - Presidente Venceslau SP",
  "Terraplanagem, Curvas de Nivel, Preparo de Solo e Reforma de Pasto - Estrela do Norte SP",
  "Construções de Estrutura Manejo Agropecuário - Estrela do Norte SP",
  "Plantio de Arvores, Reflorestamento - Estrela do Norte SP",
  "Reforma Pré Escola - Tarabai SP",
  "Construção Barracão Industrial - Lupionópolis PR",
  "Espaço de Saúde - Sandovalina SP",
  "Reforma de Casa – Sandovalina SP",
  "Reforma CCI Bom Pastor - Sandovalina SP",
  "Reforma UPA - Paranavaí PR",
  "Reforma Canteiro Central - Sandovalina SP",
  "Casa da Moeda - Presidente Epitácio SP",
  "Reforma de Casa – Presidente Prudente SP",
  "Revitalização De Área Esportes E Lazer - Mirante do Paranapanema SP",
  "Construção Ciclovia - Ana Rosa Cambé PR",
  "Reforma de Casa - Primavera SP",
  "Revitalização de Avenida - Terra Roxa PR",
  "Construção de Casa Sobrado - Rosana SP",
  "Coleta Resíduos Sólidos Urbanos - Presidente Epitácio SP",
  "Locações de Caminhões Compactadores de Lixo - Alumínio SP",
];

export default function ProjectsShowcase() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projetos" ref={ref} className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className={`mb-12 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-accent" />
            <span className="text-sm font-heading font-semibold text-accent uppercase tracking-widest">Projetos</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Nossos <span className="text-primary">Projetos</span>
          </h2>
        </div>

        {/* Project List */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {projectList.map((project, i) => {
            const parts = project.split(" - ");
            const name = parts[0];
            const location = parts[1] || "";

            return (
              <div
                key={i}
                className="flex items-start gap-3 py-4 border-b border-border/50 group"
              >
                <div className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />
                <div className="flex-1 min-w-0">
                  <span className="text-sm md:text-base font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                    {name}
                  </span>
                  {location && (
                    <span className="flex items-center gap-1 mt-0.5 text-xs text-muted-foreground font-body">
                      <MapPin className="w-3 h-3" />
                      {location}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
