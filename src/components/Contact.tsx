import { motion } from 'framer-motion';
import { Mail, MessageCircle, ArrowUpRight } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const contacts = [
    {
      name: "Email",
      handle: "irhamhamzahedu@gmail.com",
      link: "mailto:irhamhamzahedu@gmail.com",
      icon: <Mail className="text-paper" size={22} />
    },
    {
      name: "WhatsApp",
      handle: "+62 851-5631-2044",
      link: "https://wa.me/6285156312044",
      icon: <MessageCircle className="text-paper" size={22} />
    },
    {
      name: "LinkedIn",
      handle: "irhammhamzah",
      link: "https://www.linkedin.com/in/irhammhamzah/",
      icon: <FaLinkedin className="text-paper" size={22} />
    },
    {
      name: "GitHub",
      handle: "IrrhammCode",
      link: "https://github.com/IrrhammCode",
      icon: <FaGithub className="text-paper" size={22} />
    }
  ];

  return (
    <section id="contact" className="relative bg-ink text-paper mt-10">
      <div className="container mx-auto px-6 max-w-5xl pt-24 pb-16">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs font-medium tracking-[0.25em] uppercase text-amber">06 · Get in Touch</span>
          <span className="h-px flex-1 bg-white/15" />
        </div>

        <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-paper mb-5">
          Let's Talk GTM<span className="text-amber">.</span>
        </h2>
        <p className="text-paper/65 max-w-2xl mb-14 text-base md:text-lg leading-relaxed">
          Looking for a GTM/MarTech intern who can actually build the systems, not just talk about them? I'm open to
          internships (remote, from Dec 2026), product collaborations, and go-to-market projects.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                className="flex flex-col p-6 rounded-lg border border-white/15 hover:border-amber/60 hover:bg-white/5 transition-colors duration-300 h-full"
              >
                <div className="w-11 h-11 rounded-md bg-white/10 flex items-center justify-center mb-5">
                  {contact.icon}
                </div>
                <h3 className="text-paper font-bold mb-1">{contact.name}</h3>
                <span className="text-sm text-paper/55 mb-5 break-all">{contact.handle}</span>
                <ArrowUpRight size={16} className="text-paper/40 mt-auto" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <footer className="border-t border-white/10 py-7 text-center text-paper/40 text-sm">
        <p>&copy; 2026 Irham Muhammad Hamzah — Bandung, Indonesia</p>
      </footer>
    </section>
  );
};

export default Contact;
