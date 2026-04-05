import { Link } from "react-router-dom";
import { Instagram, Phone, Mail } from "lucide-react";
import logoAjs from "@/assets/logo-ajs.png";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logoAjs} alt="AJS" className="h-12 w-auto brightness-0 invert mb-4" />
            <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">
              Soluções integradas em engenharia, construção e gestão ambiental há mais de 30 anos.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold text-primary-foreground text-sm uppercase tracking-wider mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><Link to="/sobre" className="text-primary-foreground/60 hover:text-accent text-sm font-body transition-colors">Sobre nós</Link></li>
              <li><Link to="/projetos" className="text-primary-foreground/60 hover:text-accent text-sm font-body transition-colors">Projetos</Link></li>
              <li><Link to="/solucoes" className="text-primary-foreground/60 hover:text-accent text-sm font-body transition-colors">Soluções</Link></li>
            </ul>
          </div>

          {/* Soluções */}
          <div>
            <h4 className="font-heading font-bold text-primary-foreground text-sm uppercase tracking-wider mb-4">Soluções</h4>
            <ul className="space-y-2 text-primary-foreground/60 text-sm font-body">
              <li>Construção Civil</li>
              <li>Limpeza Urbana</li>
              <li>Facilities</li>
              <li>Gestão Ambiental</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-primary-foreground text-sm uppercase tracking-wider mb-4">Contato</h4>
            <div className="space-y-3">
              <a href="https://wa.me/5518981560291" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent text-sm font-body transition-colors">
                <Phone className="w-4 h-4" /> (18) 98156-0291
              </a>
              <a href="https://www.instagram.com/ajs.construcoesecomercio/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent text-sm font-body transition-colors">
                <Instagram className="w-4 h-4" /> @ajs.construcoesecomercio
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 py-6">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-primary-foreground/40 text-xs font-body">
            © {new Date().getFullYear()} AJS Construções e Comércio. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
