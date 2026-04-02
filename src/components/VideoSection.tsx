import { Play } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import projectDrainage from "@/assets/project-drainage.jpg";

export default function VideoSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [playing, setPlaying] = useState(false);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-accent" />
            <span className="text-sm font-heading font-semibold text-accent uppercase tracking-widest">Institucional</span>
            <div className="w-12 h-0.5 bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Conheça a <span className="text-primary">AJS</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Assista ao nosso vídeo institucional e descubra como transformamos o cenário da infraestrutura brasileira.
          </p>
        </div>

        <div
          className={`relative max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl transition-all duration-700 delay-200 ${
            isVisible ? "animate-scale-in" : "opacity-0"
          }`}
        >
          {!playing ? (
            <>
              <img
                src={projectDrainage}
                alt="Vídeo Institucional AJS"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-secondary/50 flex items-center justify-center">
                <button
                  onClick={() => setPlaying(true)}
                  className="w-20 h-20 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-transform shadow-2xl"
                >
                  <Play className="w-8 h-8 text-accent-foreground ml-1" fill="currentColor" />
                </button>
              </div>
            </>
          ) : (
            <video
              autoPlay
              controls
              className="w-full aspect-video object-cover"
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
            </video>
          )}
        </div>
      </div>
    </section>
  );
}
