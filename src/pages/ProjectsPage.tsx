import { MapPin, Building2, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { allProjects, galleryImages } from "@/data/projects";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ProjectsPage() {
  const { ref: listRef, isVisible: listVisible } = useScrollAnimation();
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation();

  return (
    <>
      <Header />
      <main>
        {/* Banner */}
        <section className="relative h-64 lg:h-80 flex items-center bg-secondary">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-primary/40" />
          <div className="relative container mx-auto px-4 lg:px-8 pt-20">
            <div className="w-12 h-0.5 bg-accent mb-4" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">
              Nossos Projetos
            </h1>
            <p className="text-primary-foreground/60 font-body mt-3 text-lg">
              Mais de {allProjects.length} obras realizadas em diversos estados do Brasil
            </p>
          </div>
        </section>

        {/* Project List */}
        <section ref={listRef} className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className={`mb-12 transition-all duration-700 ${listVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-0.5 bg-accent" />
                <span className="text-sm font-heading font-semibold text-accent uppercase tracking-widest">
                  Portfólio Completo
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Obras <span className="text-primary">Realizadas</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {allProjects.map((project, i) => {
                const parts = project.split(" - ");
                const name = parts[0].replace("–", "-").trim();
                const location = parts[1]?.trim() || "";

                return (
                  <div
                    key={i}
                    className={`group flex items-center gap-4 p-4 lg:p-5 rounded-lg border border-border bg-card hover:border-accent/40 hover:shadow-md transition-all duration-300 ${
                      listVisible ? "animate-fade-in-up" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${Math.min(i * 0.03, 1)}s` }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-semibold text-foreground text-sm lg:text-base leading-tight group-hover:text-primary transition-colors">
                        {name}
                      </h3>
                      {location && (
                        <div className="flex items-center gap-1 mt-1 text-muted-foreground text-xs lg:text-sm">
                          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                          <span className="font-body">{location}</span>
                        </div>
                      )}
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section ref={galleryRef} className="py-20 lg:py-28 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className={`mb-12 transition-all duration-700 ${galleryVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-0.5 bg-accent" />
                <span className="text-sm font-heading font-semibold text-accent uppercase tracking-widest">
                  Galeria
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Registros das <span className="text-primary">Nossas Obras</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className={`group relative overflow-hidden rounded-lg aspect-square transition-all duration-700 ${
                    galleryVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <img
                    src={img}
                    alt={`Obra AJS - ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/30 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
