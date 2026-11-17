import { ArrowUpRight } from 'lucide-react';
import { systems } from '../data/portfolioData';

const tags: Record<string, { label: string; style: string }> = {
  '01': { label: 'LIVE', style: 'bg-ink text-white border-ink' },
  '02': { label: 'SANGAT BAIK', style: 'bg-amber text-white border-amber' },
  '03': { label: 'IN TRAINING', style: 'text-ink border-ink' },
  '04': { label: '4× WINNER', style: 'text-ink border-ink' },
};

const Systems = () => {
  return (
    <section id="systems" className="py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-baseline justify-between border-b-[3px] border-ink pb-4">
          <h2 className="font-mono text-xs font-semibold tracking-[0.25em] uppercase text-ink">01 · Systems</h2>
          <span className="font-mono text-[11px] tracking-[0.18em] text-ink/45 uppercase hidden sm:block">Problem first, tools second</span>
        </div>

        {/* Table header (desktop) */}
        <div className="hidden lg:grid grid-cols-[52px_290px_1fr_1.25fr_128px] gap-6 pt-5 pb-3 font-mono text-[10px] tracking-[0.22em] text-ink/45 uppercase">
          <span>No.</span><span>System</span><span>Problem</span><span>Built</span><span className="text-right">Status</span>
        </div>

        <div className="border-t border-ink lg:border-t-0">
          {systems.map((s) => {
            const tag = tags[s.id];
            return (
              <article key={s.id} className="grid lg:grid-cols-[52px_290px_1fr_1.25fr_128px] gap-4 lg:gap-6 border-b border-ink py-7 items-start">
                <span className="font-mono font-bold text-amber">{s.id}</span>
                <div>
                  <h3 className="text-[21px] leading-snug">{s.title}</h3>
                  {s.link ? (
                    <a href={s.link.href} target="_blank" rel="noreferrer" className="mt-2.5 inline-flex items-center gap-1 font-mono text-[11px] text-ink/55 hover:text-amber transition-colors">
                      {s.link.label} <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : null}
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.22em] text-ink/45 uppercase mb-1.5 lg:hidden">Problem</p>
                  <p className="leading-relaxed text-[15px]">{s.problem}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.22em] text-ink/45 uppercase mb-1.5 lg:hidden">Built</p>
                  <p className="leading-relaxed text-[15px]">{s.built}</p>
                  <p className="mt-3 inline-block font-mono text-[11px] border border-ink px-2.5 py-1 text-ink/80">
                    {s.stack.join(' · ').toUpperCase()}
                  </p>
                </div>
                <div className="lg:text-right">
                  <span className={`inline-block font-mono text-[11px] font-semibold tracking-[0.08em] border px-2.5 py-1.5 ${tag.style}`}>
                    {tag.label}
                  </span>
                  <p className="mt-2 text-[12px] leading-snug text-ink/50 hidden lg:block">{s.status}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Figure */}
        <figure className="mt-12">
          <div className="border border-ink">
            <img src="/projects/signalcut.png" alt="SignalCut Studio" className="w-full block" loading="lazy" />
          </div>
          <figcaption className="mt-3 flex flex-wrap justify-between gap-2 font-mono text-[11px] tracking-[0.14em] text-ink/55 uppercase">
            <span>Fig. 01 — SignalCut Studio</span>
            <span>Product photo in → finished vertical ad out</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Systems;
