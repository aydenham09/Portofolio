import { timeline } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-baseline justify-between border-b-[3px] border-ink pb-4">
          <h2 className="font-mono text-xs font-semibold tracking-[0.25em] uppercase text-ink">04 · About</h2>
          <span className="font-mono text-[11px] tracking-[0.18em] text-ink/45 uppercase hidden sm:block">Telkom University · 2023 — 2027</span>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-3xl md:text-4xl leading-tight">The demo is the product. The narrative is the distribution.</h3>
            <div className="mt-6 space-y-5 leading-relaxed text-ink/70 max-w-xl">
              <p>
                I came up building AI agents and onchain prototypes — four international hackathon wins taught me
                how to ship a working system under deadline. Then I noticed the pattern: the builds that travelled
                furthest were not always the most technical. They were the ones with a story people could repeat.
              </p>
              <p>
                That is why I now work both sides of the launch. I build the product, then the go-to-market system
                that gets it found, understood and bought — ICP, data, outbound, CRM, measurement. Long term I am
                aiming at GTM and MarTech roles in Australia. Right now, I am looking for a remote GTM or MarTech
                internship starting late December 2026.
              </p>
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-[0.22em] text-ink/45 uppercase pb-3">Experience — index</p>
            <div className="border-t border-ink">
              {timeline.map((t) => (
                <div key={t.role + t.org} className="border-b border-ink py-5 grid sm:grid-cols-[1fr_auto] gap-1 sm:gap-6">
                  <div>
                    <h4 className="text-[17px]">
                      {t.role} — <span className="text-amber">{t.org}</span>
                    </h4>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink/65">{t.note}</p>
                  </div>
                  <span className="font-mono text-xs text-ink/50 whitespace-nowrap">{t.period}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 font-mono text-[11px] tracking-[0.14em] text-ink/50 uppercase">
              Education — Informatics, Telkom University · Bandung, Indonesia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
