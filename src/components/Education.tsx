import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-24 relative bg-white/[0.02]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-widest mb-4">
            Academic Background
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
            Education
          </h2>
        </div>
        
        <div className="relative border-l border-white/10 pl-8 ml-4 md:ml-0 space-y-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-4 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] z-10" />
            <div className="mb-1 text-sm font-mono text-indigo-400">Present (Semester 6)</div>
            <h3 className="text-xl font-bold text-white mb-1">Telkom University</h3>
            <div className="text-zinc-400">Bachelor of Science in Informatics</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-4 border-white/20 z-10" />
            <div className="mb-1 text-sm font-mono text-zinc-500">Graduated</div>
            <h3 className="text-xl font-bold text-zinc-300 mb-1">SMAN 27 Bandung</h3>
            <div className="text-zinc-500">Science Major (Mathematics and Natural Sciences)</div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Education;
