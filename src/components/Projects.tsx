import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/portfolioData';
import { 
  Eye, Gamepad2, Stamp, Bot, SearchCode, Link as LinkIcon, 
  Music, Wallet, Shield, Waves, MessageSquare, Network, 
  Users, Gavel, Shirt, Code
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
    { id: 'all', label: 'All Projects (16)' },
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
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-widest mb-4">
            Works & Explorations
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            GitHub Repositories
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
            A complete collection of my open-source projects, ranging from hackathon prototypes to experimental new technologies.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {filters.map(f => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === f.id 
                    ? 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.4)]' 
                    : 'bg-white/5 text-zinc-400 border border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const IconComp = iconMap[project.icon] || Code;
              
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-500/50 hover:shadow-[0_10px_30px_rgba(79,70,229,0.1)] transition-all duration-300 group"
                >
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/5 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                        <IconComp size={24} />
                      </div>
                      <div className="flex gap-2">
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noreferrer"
                          className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-white/10 hover:text-white transition-colors"
                        >
                          <FaGithub size={16} />
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">{project.name}</h3>
                      {project.badge && (
                        <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1">
                           {project.badge}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-sm text-zinc-400 mb-6 flex-1">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 rounded-md bg-background text-zinc-500 text-[10px] font-mono border border-white/5">
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
