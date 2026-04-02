import { Instagram } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function InstagramSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <Instagram className="w-10 h-10 text-accent mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
            Siga-nos no Instagram
          </h2>
          <p className="text-muted-foreground font-body mb-8 max-w-lg mx-auto">
            Acompanhe nossos projetos e novidades em tempo real.
          </p>
          <a
            href="https://www.instagram.com/ajs.construcoesecomercio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-heading font-bold text-sm rounded hover:bg-primary/90 transition-all uppercase tracking-wide"
          >
            <Instagram className="w-5 h-5" />
            @ajs.construcoesecomercio
          </a>
        </div>
      </div>
    </section>
  );
}
