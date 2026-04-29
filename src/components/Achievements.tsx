import { motion } from 'framer-motion';
import { Trophy, Star, ShieldCheck, Zap } from 'lucide-react';

const Achievements = () => {
  const wins = [
    {
      title: "Forte Hacks by Flow: Build with Disney, Dune and Dapper",
      badge: "Triple Track Winner",
      icon: <Trophy size={24} className="text-amber-400" />,
      desc: "Built WatcherForte and dominated by winning 3 simultaneous tracks: Find Labs (Best use of Find Data APIs), Dapper (Top game Integration Across NBA Top Shot), and Best Vibe Coded Project.",
      color: "from-amber-500/20 to-orange-500/5",
      border: "border-amber-500/30"
    },
    {
      title: "MetaMask Advanced Permissions Dev Cook-off",
      badge: "Track Winner: Best Feedback",
      icon: <ShieldCheck size={24} className="text-blue-400" />,
      desc: "Developed two innovative projects simultaneously: Agent-7715 (Autonomous AI Agent) and ChainLens (Multi-chain analytics dashboard), showcasing advanced MetaMask integrations.",
      color: "from-blue-500/20 to-cyan-500/5",
      border: "border-blue-500/30"
    },
    {
      title: "Surreal World Assets Buildathon",
      badge: "Track Winner: GenAI IP Registration",
      icon: <Star size={24} className="text-purple-400" />,
      desc: "Developed StorySeal, a decentralized Intellectual Property (IP) registration platform leveraging Generative AI for the protection and preservation of digital assets.",
      color: "from-purple-500/20 to-fuchsia-500/5",
      border: "border-purple-500/30"
    },
    {
      title: "Arbitrum APAC Mini Hackathon",
      badge: "Grand Winner",
      icon: <Zap size={24} className="text-emerald-400" />,
      desc: "Created StylusArena, an innovative competitive gaming platform utilizing Arbitrum Stylus for high-performance on-chain computation.",
      color: "from-emerald-500/20 to-teal-500/5",
      border: "border-emerald-500/30"
    }
  ];

  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-widest mb-4">
            Track Record
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Hackathon Victories
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Consistently delivering award-winning products under extreme time constraints in global technology competitions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {wins.map((win, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${win.color} border ${win.border} p-8 group`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110 group-hover:rotate-12">
                {win.icon}
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-background/50 border border-white/10 text-xs font-medium text-white mb-4 backdrop-blur-sm">
                  {win.icon} {win.badge}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 leading-tight">{win.title}</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">{win.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
