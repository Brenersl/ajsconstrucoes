import { Phone, Instagram, MapPin, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contato" ref={ref} className="py-24 lg:py-32 bg-secondary relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-accent" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className={`transition-all duration-700 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-accent" />
              <span className="text-sm font-heading font-semibold text-accent uppercase tracking-widest">Contato</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Vamos construir o <span className="text-accent">futuro</span> juntos?
            </h2>
            <p className="text-primary-foreground/70 font-body text-lg mb-10">
              Entre em contato conosco para saber como podemos ajudar no seu próximo projeto de infraestrutura.
            </p>

            <div className="space-y-6">
              <a
                href="https://wa.me/5518981560291?text=Olá, vim pelo site e gostaria de mais informações."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-primary-foreground/80 hover:text-accent transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="text-xs font-heading uppercase tracking-wider text-primary-foreground/50">WhatsApp</span>
                  <p className="font-body">(18) 98156-0291</p>
                </div>
              </a>
              <a
                href="https://wa.me/551999946951?text=Olá, vim pelo site e gostaria de mais informações."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-primary-foreground/80 hover:text-accent transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="text-xs font-heading uppercase tracking-wider text-primary-foreground/50">WhatsApp</span>
                  <p className="font-body">(19) 99994-6951</p>
                </div>
              </a>
              <a
                href="https://www.instagram.com/ajs.construcoesecomercio/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-primary-foreground/80 hover:text-accent transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Instagram className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="text-xs font-heading uppercase tracking-wider text-primary-foreground/50">Instagram</span>
                  <p className="font-body">@ajs.construcoesecomercio</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right - CTA */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}>
            <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-8 lg:p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-4">
                Solicite um Orçamento
              </h3>
              <p className="text-primary-foreground/60 font-body mb-8">
                Fale diretamente com nossa equipe comercial pelo WhatsApp e receba um atendimento personalizado.
              </p>
              <a
                href="https://wa.me/5518981560291?text=Olá, vim pelo site e gostaria de mais informações."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full px-8 py-4 bg-accent text-accent-foreground font-heading font-bold text-base rounded hover:brightness-110 transition-all uppercase tracking-wide"
              >
                Iniciar conversa no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
