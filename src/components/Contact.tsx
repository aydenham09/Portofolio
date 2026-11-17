import { ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <footer id="contact" className="pt-16 pb-10 border-t-[3px] border-ink mt-8">
      <div className="container mx-auto px-6 max-w-6xl">
        <p className="font-mono text-xs font-semibold tracking-[0.25em] uppercase text-ink">05 · Contact</p>
        <h2 className="mt-6 text-4xl md:text-6xl leading-[1.04] font-extrabold max-w-3xl">
          Want the details on any of this? <span className="text-amber">Ask me</span> how it works.
        </h2>
        <p className="mt-6 text-lg text-ink/70 max-w-2xl leading-relaxed">
          I am happy to walk through how any of these systems were built, what worked and what did not.
          I am also open to GTM and MarTech internships from late December 2026 — remote, worldwide.
        </p>

        <div className="mt-10 grid sm:grid-cols-3 border border-ink">
          <a href="mailto:irhamhamzahedu@gmail.com" className="p-5 border-ink max-sm:border-b sm:border-r hover:bg-ink hover:text-white transition-colors group">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-50">Email</p>
            <p className="mt-2 font-heading font-bold text-[15px] flex items-center gap-1.5 break-all">
              irhamhamzahedu@gmail.com <ArrowUpRight className="w-4 h-4 shrink-0" />
            </p>
          </a>
          <a href="https://www.linkedin.com/in/irhammhamzah" target="_blank" rel="noreferrer" className="p-5 border-ink max-sm:border-b sm:border-r hover:bg-ink hover:text-white transition-colors">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-50">LinkedIn</p>
            <p className="mt-2 font-heading font-bold text-[15px] flex items-center gap-2">
              <FaLinkedin className="w-4 h-4" /> /in/irhammhamzah <ArrowUpRight className="w-4 h-4" />
            </p>
          </a>
          <a href="https://github.com/IrrhammCode" target="_blank" rel="noreferrer" className="p-5 hover:bg-ink hover:text-white transition-colors">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-50">GitHub</p>
            <p className="mt-2 font-heading font-bold text-[15px] flex items-center gap-2">
              <FaGithub className="w-4 h-4" /> /IrrhammCode <ArrowUpRight className="w-4 h-4" />
            </p>
          </a>
        </div>

        <div className="mt-14 pt-5 border-t border-ink flex flex-wrap justify-between gap-3 font-mono text-[11px] tracking-[0.14em] text-ink/45 uppercase">
          <span>© 2026 Irham Muhammad Hamzah</span>
          <span>Bandung, Indonesia — working worldwide</span>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
