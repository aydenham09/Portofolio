import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const CountUp = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = Math.ceil(end / 40);
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      setCount(current);
    }, 40);
    return () => clearInterval(timer);
  }, [end]);

  return <span>{count}</span>;
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-6xl relative z-10 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-line mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber"></span>
            </span>
            <span className="font-mono text-[11px] sm:text-xs font-medium tracking-wider text-ink/70 uppercase">
              Open to GTM / MarTech Internships — Dec 2026 / Jan 2027
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight text-ink leading-[1.02] mb-6"
          >
            Irham<br />Muhammad<br />Hamzah<span className="text-amber">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-3xl font-heading font-semibold text-ink leading-snug mb-5 max-w-2xl"
          >
            I build AI products — and the{' '}
            <span className="underline decoration-amber decoration-[3px] underline-offset-4">go-to-market systems</span>{' '}
            that sell them.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg text-ink/60 leading-relaxed mb-10 max-w-2xl"
          >
            Informatics undergraduate at Telkom University. Builder of SignalCut, an AI ad-video engine for DTC
            brands — and I run its go-to-market myself: ICP, lead lists, CRM, and outbound on a live
            HubSpot · Clay · Apollo stack.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-paper font-semibold rounded-md hover:bg-wiyata transition-colors"
            >
              See my work
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/IrrhammCode"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-ink/25 text-ink font-semibold rounded-md hover:border-ink hover:bg-white transition-colors"
            >
              <FaGithub className="w-5 h-5" />
              GitHub
            </a>
          </motion.div>
        </div>

        {/* Stats — ruled document row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-3 gap-6 mt-20 pt-8 border-t border-line max-w-3xl"
        >
          <div>
            <div className="text-4xl sm:text-5xl font-heading font-extrabold text-ink mb-1.5">
              <CountUp end={4} />
            </div>
            <div className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-ink/50">Hackathon Wins</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-heading font-extrabold text-ink mb-1.5">
              <CountUp end={1} />
            </div>
            <div className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-ink/50">Live Product</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-heading font-extrabold text-ink mb-1.5">
              <CountUp end={3} />
            </div>
            <div className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-ink/50">GTM Tools Live</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
