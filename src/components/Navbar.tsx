import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Crisis", href: "#crisis" },
  { label: "India", href: "#india" },
  { label: "Impacts", href: "#impacts" },
  { label: "Solutions", href: "#solutions" },
  { label: "Case Studies", href: "#cases" },
  { label: "Act Now", href: "#action" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ewaste-dark/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="text-ewaste-green font-heading font-bold text-lg">⚡ E-Waste India</a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-ewaste-muted hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <span className="text-xs text-ewaste-muted/60 border border-white/10 rounded-full px-3 py-1">LPU × CHE-110</span>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-ewaste-dark/95 backdrop-blur-xl border-t border-white/5 px-4 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-ewaste-muted hover:text-foreground transition-colors border-b border-white/5"
            >
              {l.label}
            </a>
          ))}
          <span className="block mt-3 text-xs text-ewaste-muted/60">LPU × CHE-110</span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
