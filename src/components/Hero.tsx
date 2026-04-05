import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          <div
            className={`transition-all duration-700 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}
          >
            <div className="w-20 h-1 bg-accent mb-8" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Soluções integradas em{" "}
              <span className="text-accent">engenharia</span>, construção civil e limpeza urbana
            </h1>
          </div>

          <p
            className={`text-lg md:text-xl text-primary-foreground/80 font-body font-light mb-10 max-w-2xl transition-all duration-700 delay-200 ${
              isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
            }`}
          >
            Entregando soluções com excelência e compromisso.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400 ${
              isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
            }`}
          >
            <a
              href="#projetos"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-heading font-semibold text-base rounded hover:border-accent hover:text-accent transition-all uppercase tracking-wide"
            >
              Nossos Projetos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}