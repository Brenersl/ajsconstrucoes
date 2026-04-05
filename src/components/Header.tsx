import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Mail } from "lucide-react";
import logoAjs from "@/assets/logo-ajs.png";

const menuItems = [
  {
    label: "A AJS",
    href: "#",
    dropdown: [
      { label: "Sobre nós", href: "/sobre" },
      { label: "Sistema de Gestão Integrada", href: "/gestao" },
      { label: "Turita Holding", href: "/holding" },
    ],
  },
  {
    label: "Soluções",
    href: "#",
    dropdown: [
      { label: "Visão geral", href: "/solucoes" },
    ],
  },
  { label: "Projetos", href: "/projetos" },
  { label: "Contato", href: "/#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const headerBg = scrolled || !isHome
    ? "bg-secondary/95 backdrop-blur-md shadow-lg"
    : "bg-transparent";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="relative z-10">
            <img src={logoAjs} alt="AJS Construções" className="h-10 lg:h-14 w-auto brightness-0 invert" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.dropdown ? (
                  <button className="flex items-center gap-1 px-5 py-2 text-sm font-heading font-semibold tracking-wide text-primary-foreground/90 hover:text-accent transition-colors uppercase">
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                  </button>
                ) : item.href.startsWith("#") ? (
                  <a
                    href={item.href}
                    className="px-5 py-2 text-sm font-heading font-semibold tracking-wide text-primary-foreground/90 hover:text-accent transition-colors uppercase"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className="px-5 py-2 text-sm font-heading font-semibold tracking-wide text-primary-foreground/90 hover:text-accent transition-colors uppercase"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.dropdown && (
                  <div
                    className={`absolute top-full left-0 min-w-[240px] bg-secondary/95 backdrop-blur-md border border-primary-foreground/10 rounded-lg overflow-hidden shadow-2xl transition-all duration-300 ${
                      openDropdown === item.label
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.href}
                        className="block px-6 py-3.5 text-sm font-body text-primary-foreground/80 hover:text-accent hover:bg-primary-foreground/5 transition-all border-b border-primary-foreground/5 last:border-0"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}


          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-10 p-2 text-primary-foreground"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-secondary/98 backdrop-blur-lg transition-all duration-400 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="container mx-auto px-4 py-8 space-y-2">
          {menuItems.map((item) => (
            <div key={item.label}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className="flex items-center justify-between w-full px-4 py-3 text-primary-foreground font-heading font-semibold text-lg uppercase"
                  >
                    {item.label}
                    <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                  </button>
                  {openDropdown === item.label && (
                    <div className="pl-6 space-y-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          className="block px-4 py-2.5 text-primary-foreground/70 font-body hover:text-accent transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : item.href.startsWith("#") ? (
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-primary-foreground font-heading font-semibold text-lg uppercase"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.href}
                  className="block px-4 py-3 text-primary-foreground font-heading font-semibold text-lg uppercase"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}


        </nav>
      </div>
    </header>
  );
}
