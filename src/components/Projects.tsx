import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/portfolioData';
import {
  Eye, Gamepad2, Stamp, Bot, SearchCode, Link as LinkIcon,
  Music, Wallet, Shield, Waves, MessageSquare, Network,
  Users, Gavel, Shirt, Code, ArrowUpRight
} from 'lucide-react';

const iconMap: Record<string, any> = {
  'eye': Eye,
  'gamepad': Gamepad2,
  'stamp': Stamp,
  'bot': Bot,
  'search-code': SearchCode,
  'link': LinkIcon,
  'music': Music,
  'wallet': Wallet,
  'shield': Shield,
  'waves': Waves,
  'message-square': MessageSquare,
  'network': Network,
  'users': Users,
  'gavel': Gavel,
  'shirt': Shirt,
  'code': Code
};

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects (17)' },
    { id: 'web3', label: 'Web3 & Blockchain' },
    { id: 'ai', label: 'AI / GenAI' },
    { id: 'apps', label: 'Web & Apps' }
  ];

  // Helper to map tags to categories for filtering
  const getCategory = (tags: string[]) => {
    const text = tags.join(' ').toLowerCase();
    if (text.includes('blockchain') || text.includes('web3') || text.includes('flow') || text.includes('arbitrum') || text.includes('smart contract') || text.includes('solidity') || text.includes('rust') || text.includes('defi') || text.includes('dao')) {
      return 'web3';
    }
    if (text.includes('ai') || text.includes('genai') || text.includes('agent')) {
      return 'ai';
    }
    return 'apps';
  };

  const filteredProjects = projects.filter(p =>
    filter === 'all' || getCategory(p.tags) === filter
  );

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center gap-4 mb-14">
          <span className="font-mono text-xs font-medium tracking-[0.25em] uppercase text-wiyata">05 · Works & Explorations</span>
          <span className="h-px flex-1 bg-line" />
        </div>

        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-ink mb-4">
          Selected Work
        </h2>
        <p className="text-ink/60 max-w-2xl mb-10 text-base md:text-lg leading-relaxed">
          Live products first — the SaaS and the AI ad engine I am taking to market — followed by the open-source builds behind them.
        </p>

        <div className="flex flex-wrap gap-2.5 mb-12">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                filter === f.id
                  ? 'bg-ink text-paper border-ink'
                  : 'bg-white text-ink/60 border-line hover:border-ink/40 hover:text-ink'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const IconComp = iconMap[project.icon] || Code;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col bg-white border border-line rounded-lg overflow-hidden hover:border-ink/35 transition-colors duration-300"
                >
                  {project.image && project.media === 'shot' && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="block border-b border-line">
                      <img
                        src={project.image}
                        alt={`${project.name} — product screenshot`}
                        className="w-full h-44 object-cover object-top"
                        loading="lazy"
                      />
                    </a>
                  )}
                  {project.image && project.media === 'logo' && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="h-44 bg-ink flex flex-col items-center justify-center gap-3 border-b border-line">
                      <img
                        src={project.image}
                        alt={`${project.name} logo`}
                        className="h-20 w-20 object-contain"
                        loading="lazy"
                      />
                      <span className="font-mono text-[11px] uppercase tracking-widest text-paper/60">satuwiyata.web.id — live</span>
                    </a>
                  )}

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-11 h-11 rounded-md bg-paper border border-line flex items-center justify-center text-wiyata">
                        <IconComp size={22} />
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.name} on GitHub / live site`}
                        className="w-8 h-8 rounded-full border border-line bg-paper flex items-center justify-center text-ink/50 hover:text-ink hover:border-ink/40 transition-colors"
                      >
                        {project.id === 'satuwiyata' ? <ArrowUpRight size={15} /> : <FaGithub size={15} />}
                      </a>
                    </div>

                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-ink leading-snug">{project.name}</h3>
                      {project.badge && (
                        <span className="shrink-0 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded bg-amber/15 text-[#8a5a12] border border-amber/50">
                          {project.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-ink/60 leading-relaxed mb-6 flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 rounded bg-paper text-ink/50 text-[10px] font-mono border border-line">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
