import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex items-center gap-4 mb-14">
          <span className="font-mono text-xs font-medium tracking-[0.25em] uppercase text-wiyata">02 · Education</span>
          <span className="h-px flex-1 bg-line" />
        </div>

        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-ink mb-14">
          Academic Background
        </h2>

        <div className="relative border-l border-line pl-8 ml-2 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-paper border-[3px] border-wiyata z-10" />
            <div className="mb-1 font-mono text-xs uppercase tracking-widest text-wiyata">2023 — Present</div>
            <h3 className="text-xl font-bold text-ink mb-1">Telkom University</h3>
            <div className="text-ink/60">Bachelor of Informatics</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-paper border-[3px] border-ink/25 z-10" />
            <div className="mb-1 font-mono text-xs uppercase tracking-widest text-ink/40">Graduated</div>
            <h3 className="text-xl font-bold text-ink/80 mb-1">SMAN 27 Bandung</h3>
            <div className="text-ink/50">Science Major (Mathematics and Natural Sciences)</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
