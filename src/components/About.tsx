import { motion } from 'framer-motion';
import { MapPin, Code, Target, Workflow } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center gap-4 mb-14">
          <span className="font-mono text-xs font-medium tracking-[0.25em] uppercase text-wiyata">01 · About</span>
          <span className="h-px flex-1 bg-line" />
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Photo Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 lg:col-span-4 max-w-sm mx-auto md:max-w-none w-full"
          >
            <div className="relative rounded-lg overflow-hidden border border-line aspect-[3/4] bg-white">
              <img
                src="/irham-foto.jpeg"
                alt="Irham Muhammad Hamzah"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 px-5 py-3.5 bg-paper/95 border-t border-line">
                <div className="flex items-center gap-2 text-sm font-medium text-ink">
                  <MapPin size={15} className="text-wiyata" /> Bandung, Indonesia
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 lg:col-span-8"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-ink leading-tight mb-6">
              Products get built. <span className="text-wiyata">Then someone has to sell them.</span> I do both.
            </h2>

            <div className="space-y-5 text-ink/65 text-base md:text-lg leading-relaxed mb-12">
              <p>
                I am an Informatics undergraduate who moved from pure engineering into{' '}
                <strong className="text-ink font-semibold">go-to-market</strong>: the discipline of turning a working
                product into pipeline — defining the ICP, building qualified lead lists, wiring the CRM, and running
                outbound that respects people's inboxes.
              </p>
              <p>
                My proof is my own product. <strong className="text-ink font-semibold">SignalCut</strong> — my AI
                pipeline that turns product photos into ready-to-post vertical ad videos — is both my software and my
                GTM case study: I defined the DTC-brand ICP, built the prospect list, and set up the HubSpot pipeline
                myself. It also powers an AI UGC offer aimed at foreign brands.
              </p>
              <p>
                The engineering background is real, and it is the unfair advantage: four international hackathon wins
                (MetaMask, Flow/Forte, Arbitrum, Surreal World Assets) building AI and Web3 products under deadline.
                Now I point that shipping speed at growth systems.
              </p>
            </div>

            {/* Competency Cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-lg bg-white border border-line">
                <Target className="text-amber mb-3" size={22} />
                <h3 className="font-heading font-bold text-ink mb-1.5">GTM Engineering</h3>
                <p className="text-sm text-ink/55 leading-relaxed">
                  ICP definition, lead-list building, CRM hygiene, and outbound systems — with HubSpot, Clay, and Apollo.
                </p>
              </div>
              <div className="p-5 rounded-lg bg-white border border-line">
                <Workflow className="text-wiyata mb-3" size={22} />
                <h3 className="font-heading font-bold text-ink mb-1.5">Marketing Automation & AI</h3>
                <p className="text-sm text-ink/55 leading-relaxed">
                  AI agents and automation pipelines that compress research, content, and follow-up work.
                </p>
              </div>
              <div className="p-5 rounded-lg bg-white border border-line">
                <Code className="text-ink mb-3" size={22} />
                <h3 className="font-heading font-bold text-ink mb-1.5">Product Building</h3>
                <p className="text-sm text-ink/55 leading-relaxed">
                  Full-stack shipping — Next.js, TypeScript, and AI tooling — proven by four international hackathon wins.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
