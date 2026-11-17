import { motion } from 'framer-motion';
import { Trophy, Star, ShieldCheck, Zap } from 'lucide-react';

const Achievements = () => {
  const wins = [
    {
      title: "Forte Hacks by Flow: Build with Disney, Dune and Dapper",
      badge: "Triple Track Winner",
      icon: <Trophy size={22} className="text-amber" />,
      desc: "Built WatcherForte and dominated by winning 3 simultaneous tracks: Find Labs (Best use of Find Data APIs), Dapper (Top game Integration Across NBA Top Shot), and Best Vibe Coded Project.",
      bar: "bg-amber"
    },
    {
      title: "MetaMask Advanced Permissions Dev Cook-off",
      badge: "Track Winner: Best Feedback",
      icon: <ShieldCheck size={22} className="text-wiyata" />,
      desc: "Developed two innovative projects simultaneously: Agent-7715 (Autonomous AI Agent) and ChainLens (Multi-chain analytics dashboard), showcasing advanced MetaMask integrations.",
      bar: "bg-wiyata"
    },
    {
      title: "Surreal World Assets Buildathon",
      badge: "Track Winner: GenAI IP Registration",
      icon: <Star size={22} className="text-ink" />,
      desc: "Developed StorySeal, a decentralized Intellectual Property (IP) registration platform leveraging Generative AI for the protection and preservation of digital assets.",
      bar: "bg-ink"
    },
    {
      title: "Arbitrum APAC Mini Hackathon",
      badge: "Grand Winner",
      icon: <Zap size={22} className="text-amber" />,
      desc: "Created StylusArena, an innovative competitive gaming platform utilizing Arbitrum Stylus for high-performance on-chain computation.",
      bar: "bg-wiyata"
    }
  ];

  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center gap-4 mb-14">
          <span className="font-mono text-xs font-medium tracking-[0.25em] uppercase text-wiyata">03 · Track Record</span>
          <span className="h-px flex-1 bg-line" />
        </div>

        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-ink mb-4">
          Hackathon Victories
        </h2>
        <p className="text-ink/60 max-w-2xl mb-14 text-base md:text-lg leading-relaxed">
          Proof I can ship working products under extreme time pressure — the same speed I now point at go-to-market.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {wins.map((win, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative rounded-lg bg-white border border-line p-7 pl-8 overflow-hidden"
            >
              <span className={`absolute left-0 top-0 bottom-0 w-1 ${win.bar}`} />
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-line bg-paper font-mono text-[11px] font-medium uppercase tracking-wider text-ink/70 mb-4">
                {win.icon} {win.badge}
              </div>
              <h3 className="text-xl font-bold text-ink mb-3 leading-tight">{win.title}</h3>
              <p className="text-ink/60 text-sm leading-relaxed">{win.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
