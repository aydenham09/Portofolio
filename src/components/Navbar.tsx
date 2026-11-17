import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { name: 'Systems', href: '#systems' },
  { name: 'Process', href: '#process' },
  { name: 'Proof', href: '#wins' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper border-b-[3px] border-ink">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between h-14">
          <a href="#top" className="font-heading font-extrabold tracking-wide text-[15px] text-ink">
            IRHAM HAMZAH
          </a>
          <span className="hidden lg:block font-mono text-[11px] tracking-[0.22em] text-ink/50">
            GTM &amp; MARTECH — PORTFOLIO 2026
          </span>
          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a key={l.name} href={l.href} className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink/60 hover:text-amber transition-colors">
                {l.name}
              </a>
            ))}
          </nav>
          <button className="md:hidden text-ink" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <nav className="md:hidden border-t border-line py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.name} href={l.href} onClick={() => setOpen(false)} className="font-mono text-xs tracking-[0.18em] uppercase text-ink/70">
                {l.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
