import { motion } from 'framer-motion';
import { Users, Megaphone, Flag, Scale } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      period: "University",
      role: "Public Relations",
      org: "PKKMB Informatics Study Program",
      desc: "Responsible for public relations and external communication during the campus orientation event for new Informatics students.",
      icon: <Megaphone size={20} className="text-indigo-400" />
    },
    {
      period: "University",
      role: "Advocate",
      org: "HackQuest Believer",
      desc: "Served as an advocate for the HackQuest community, encouraging student participation in the Web3 ecosystem and hackathons.",
      icon: <Users size={20} className="text-emerald-400" />
    },
    {
      period: "High School",
      role: "Chairman of Boy Scouts",
      org: "SMAN 27 Bandung",
      desc: "Led the school-level boy scouts organization, coordinating activities and fostering leadership among members.",
      icon: <Flag size={20} className="text-amber-400" />
    },
    {
      period: "High School",
      role: "Head of Commission A (MPK)",
      org: "SMAN 27 Bandung",
      desc: "Led Commission A in the Student Representative Council (MPK), responsible for overseeing and evaluating the student council's (OSIS) work programs.",
      icon: <Scale size={20} className="text-rose-400" />
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-white/[0.02]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-widest mb-4">
            Involvement
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Leadership & Organizations
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                  {exp.icon}
                </div>
                <div>
                  <div className="inline-block px-2 py-1 rounded bg-white/5 text-zinc-400 text-[10px] font-mono uppercase tracking-wider mb-2">
                    {exp.period}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{exp.role}</h3>
                  <div className="text-sm font-medium text-indigo-400 mb-3">{exp.org}</div>
                  <p className="text-sm text-zinc-400 leading-relaxed">{exp.desc}</p>
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
