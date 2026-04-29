import { motion } from 'framer-motion';
import { MapPin, Code, Cpu, Blocks } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          {/* Photo Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 lg:col-span-4 max-w-sm mx-auto md:max-w-none w-full"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[3/4] group">
              <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
              <img 
                src="/irham-foto.jpeg" 
                alt="Irham Muhammad Hamzah" 
                className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop';
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent z-20">
                <div className="flex items-center gap-2 text-sm text-zinc-300">
                  <MapPin size={16} className="text-indigo-400" /> Bandung, Indonesia
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7 lg:col-span-8"
          >
            <div className="inline-block px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-widest mb-6">
              About Me
            </div>
            
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Software Engineer & Innovator.
            </h2>
            
            <div className="space-y-4 text-zinc-400 text-lg">
              <p>
                I am an undergraduate <strong className="text-zinc-200">Informatics student at Telkom University</strong> driven by a passion for building cutting-edge technological solutions. My expertise spans across <strong className="text-zinc-200">Full-Stack Development, Web3/Blockchain, and Artificial Intelligence</strong>.
              </p>
              <p>
                I have a strong track record of competing in international tech hackathons, successfully securing <strong className="text-indigo-400">4 major victories</strong>. This reflects my ability to execute complex ideas and transform them into functional products under extreme time constraints.
              </p>
              <p>
                My dedication goes beyond writing clean code; I focus on creating exceptional user experiences and solving real-world problems through innovative technology.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10">
              <h3 className="text-sm font-mono uppercase tracking-widest text-zinc-500 mb-6">Core Competencies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <Code className="text-indigo-400 mt-1" size={20} />
                  <div>
                    <h4 className="text-white font-medium mb-1 text-sm">Full-Stack Web</h4>
                    <p className="text-xs text-zinc-500">React, Next.js, Node.js, TS</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <Blocks className="text-emerald-400 mt-1" size={20} />
                  <div>
                    <h4 className="text-white font-medium mb-1 text-sm">Web3 & Smart Contracts</h4>
                    <p className="text-xs text-zinc-500">Solidity, Rust, Cadence</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <Cpu className="text-rose-400 mt-1" size={20} />
                  <div>
                    <h4 className="text-white font-medium mb-1 text-sm">Artificial Intelligence</h4>
                    <p className="text-xs text-zinc-500">GenAI, AI Agents, LLMs</p>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
