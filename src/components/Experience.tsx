import { motion } from 'framer-motion';
import { Users, Megaphone } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      period: "University",
      role: "Public Relations",
      org: "PKKMB Informatics Study Program",
      desc: "Responsible for public relations and external communication during the campus orientation event for new Informatics students.",
      icon: <Megaphone size={20} className="text-wiyata" />
    },
    {
      period: "University",
      role: "Advocate",
      org: "HackQuest Believer",
      desc: "Served as an advocate for the HackQuest community, encouraging student participation in the Web3 ecosystem and hackathons.",
      icon: <Users size={20} className="text-amber" />
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center gap-4 mb-14">
          <span className="font-mono text-xs font-medium tracking-[0.25em] uppercase text-wiyata">04 · Involvement</span>
          <span className="h-px flex-1 bg-line" />
        </div>

        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-ink mb-14">
          Leadership & Organizations
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-lg bg-white border border-line"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-paper border border-line shrink-0">
                  {exp.icon}
                </div>
                <div>
                  <div className="inline-block px-2 py-0.5 rounded border border-line bg-paper font-mono text-[10px] uppercase tracking-wider text-ink/50 mb-2">
                    {exp.period}
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-1">{exp.role}</h3>
                  <div className="text-sm font-semibold text-wiyata mb-3">{exp.org}</div>
                  <p className="text-sm text-ink/60 leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
