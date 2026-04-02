import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { projects } from "@/data/projects";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ProjectsPage() {
  const { ref, isVisible } = useScrollAnimation();

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
              Conheça as obras que refletem nosso compromisso com a excelência
            </p>
          </div>
        </section>

        {/* Grid */}
        <section ref={ref} className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <Link
                  key={project.slug}
                  to={`/projetos/${project.slug}`}
                  className={`group relative overflow-hidden rounded-lg aspect-[4/3] transition-all duration-700 ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <img
                    src={project.cover}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 text-xs font-heading font-semibold text-accent bg-accent/10 border border-accent/20 rounded uppercase tracking-wider mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-heading font-bold text-primary-foreground group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <div className="mt-2 flex items-center gap-2 text-primary-foreground/60 group-hover:text-accent transition-colors text-sm">
                      <span>Ver detalhes</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
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
