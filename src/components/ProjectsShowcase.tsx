import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { featuredProjects } from "@/data/projects";

export default function ProjectsShowcase() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projetos" ref={ref} className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-accent" />
            <span className="text-sm font-heading font-semibold text-accent uppercase tracking-widest">Projetos</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Nossos <span className="text-primary">Projetos</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featuredProjects.map((project, i) => (
            <div
              key={project.slug}
              className={`group relative overflow-hidden rounded-lg aspect-[4/3] transition-all duration-700 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <img
                src={project.cover}
                alt={project.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <span className="inline-block px-3 py-1 text-xs font-heading font-semibold text-accent bg-accent/10 border border-accent/20 rounded uppercase tracking-wider mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl lg:text-2xl font-heading font-bold text-primary-foreground group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <Link
            to="/projetos"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-heading font-bold text-sm rounded hover:bg-primary/90 transition-all uppercase tracking-wide group"
          >
            Ver mais projetos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
