import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Tag, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { projects } from "@/data/projects";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const { ref, isVisible } = useScrollAnimation();

  if (!project) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-24 bg-background">
          <div className="text-center">
            <h1 className="text-3xl font-heading font-bold text-foreground mb-4">Projeto não encontrado</h1>
            <Link to="/projetos" className="text-accent font-heading font-semibold hover:underline">
              ← Voltar aos projetos
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        {/* Banner */}
        <section className="relative h-[50vh] min-h-[400px] flex items-end">
          <img
            src={project.cover}
            alt={project.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent" />
          <div className="relative container mx-auto px-4 lg:px-8 pb-12">
            <Link
              to="/projetos"
              className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors font-body text-sm mb-4"
            >
              <ArrowLeft className="w-4 h-4" /> Voltar aos projetos
            </Link>
            <span className="inline-block px-3 py-1 text-xs font-heading font-semibold text-accent bg-accent/10 border border-accent/20 rounded uppercase tracking-wider mb-3">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground">
              {project.name}
            </h1>
          </div>
        </section>

        {/* Info */}
        <section ref={ref} className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Details */}
              <div className={`lg:col-span-2 transition-all duration-700 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Sobre o Projeto</h2>
                <p className="text-muted-foreground font-body text-lg leading-relaxed mb-10">
                  {project.description}
                </p>

                {/* Gallery */}
                <h3 className="text-xl font-heading font-bold text-foreground mb-6">Galeria</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.gallery.map((img, i) => (
                    <div key={i} className="rounded-lg overflow-hidden shadow-lg">
                      <img src={img} alt={`${project.name} - ${i + 1}`} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className={`transition-all duration-700 delay-200 ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}>
                <div className="bg-muted rounded-xl p-8 sticky top-28">
                  <h3 className="text-lg font-heading font-bold text-foreground mb-6">Informações</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <Tag className="w-5 h-5 text-accent mt-0.5" />
                      <div>
                        <span className="text-xs font-heading uppercase tracking-wider text-muted-foreground">Tipo</span>
                        <p className="font-body text-foreground">{project.type}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent mt-0.5" />
                      <div>
                        <span className="text-xs font-heading uppercase tracking-wider text-muted-foreground">Localização</span>
                        <p className="font-body text-foreground">{project.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                      <div>
                        <span className="text-xs font-heading uppercase tracking-wider text-muted-foreground">Status</span>
                        <p className="font-body text-foreground">{project.status}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border">
                    <a
                      href="https://wa.me/5518981560291?text=Olá, vim pelo site e gostaria de mais informações."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-accent text-accent-foreground font-heading font-bold text-sm rounded hover:brightness-110 transition-all uppercase"
                    >
                      Solicitar Orçamento
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
