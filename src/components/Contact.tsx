import { motion } from 'framer-motion';
import { Mail, MessageCircle, ExternalLink } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const contacts = [
    {
      name: "Email",
      handle: "irhamhamzahedu@gmail.com",
      link: "mailto:irhamhamzahedu@gmail.com",
      icon: <Mail className="text-rose-400" size={24} />
    },
    {
      name: "WhatsApp",
      handle: "+62 851-5631-2044",
      link: "https://wa.me/6285156312044",
      icon: <MessageCircle className="text-emerald-400" size={24} />
    },
    {
      name: "LinkedIn",
      handle: "irhammhamzah",
      link: "https://www.linkedin.com/in/irhammhamzah/",
      icon: <FaLinkedin className="text-blue-400" size={24} />
    },
    {
      name: "GitHub",
      handle: "IrrhammCode",
      link: "https://github.com/IrrhammCode",
      icon: <FaGithub className="text-zinc-300" size={24} />
    }
  ];

  return (
    <section id="contact" className="py-24 relative bg-background border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-widest mb-4">
            Get in Touch
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Let's Build Together.
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Open for career opportunities, project collaborations, and forming new hackathon teams.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {contacts.map((contact, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <a 
                href={contact.link}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 transition-all duration-300 group text-center h-full"
              >
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {contact.icon}
                </div>
                <h3 className="text-white font-bold mb-1">{contact.name}</h3>
                <span className="text-sm text-zinc-400 mb-4">{contact.handle}</span>
                <ExternalLink size={16} className="text-zinc-600 mt-auto group-hover:text-indigo-400 transition-colors" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      
      <footer className="border-t border-white/10 py-8 text-center text-zinc-500 text-sm">
        <p>&copy; 2026 Irham Muhammad Hamzah. Designed and Built with ❤️</p>
      </footer>
    </section>
  );
};

export default Contact;
