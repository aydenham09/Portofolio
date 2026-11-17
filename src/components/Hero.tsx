import { ArrowUpRight } from 'lucide-react';

const meta = [
  { k: 'DISCIPLINE', v: 'GTM Engineering' },
  { k: 'STACK', v: 'Clay · Apollo · HubSpot' },
  { k: 'PROOF', v: '4× Intl. Hackathon Winner' },
  { k: 'STATUS', v: 'Open — Dec 2026', accent: true },
];

const Hero = () => {
  return (
    <header className="pt-28 md:pt-36 pb-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-wrap justify-between gap-2 font-mono text-[11px] tracking-[0.22em] text-ink/50 uppercase">
          <span>Irham Hamzah — GTM &amp; MarTech</span>
          <span>Bandung, ID / Remote worldwide</span>
        </div>

        <h1 className="mt-8 text-[44px] leading-[1.02] md:text-[76px] font-extrabold max-w-5xl">
          I build the product.
          <br />
          Then the system
          <br />
          that <span className="text-amber">sells</span> it.
        </h1>

        <div className="mt-10 grid md:grid-cols-[1fr_auto] gap-6 items-end">
          <p className="text-lg leading-relaxed max-w-xl text-ink/70">
            Informatics student at Telkom University. I ship AI products — and I build the
            go-to-market systems behind them: ICP research, enrichment pipelines, outbound,
            CRM and measurement, wired into one machine.
          </p>
          <a
            href="mailto:irhamhamzahedu@gmail.com"
            className="inline-flex items-center gap-2 border-2 border-ink px-5 py-3 font-mono text-xs tracking-[0.14em] uppercase font-semibold text-ink hover:bg-ink hover:text-white transition-colors"
          >
            irhamhamzahedu@gmail.com <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <dl className="mt-12 grid grid-cols-2 lg:grid-cols-4 border border-ink">
          {meta.map((m, i) => (
            <div key={m.k} className={`p-5 ${i > 0 ? 'border-l border-ink max-lg:[&:nth-child(3)]:border-l-0 max-lg:border-t max-lg:[&:nth-child(-n+2)]:border-t-0' : ''}`}>
              <dt className="font-mono text-[10px] tracking-[0.22em] text-ink/45 flex items-center gap-2">
                <span className="inline-block w-px h-3.5 bg-ink/40" /> {m.k}
              </dt>
              <dd className={`mt-2.5 font-heading font-bold text-[17px] ${m.accent ? 'text-amber' : 'text-ink'}`}>{m.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
};

export default Hero;
