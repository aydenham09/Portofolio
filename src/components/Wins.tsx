import { wins } from '../data/portfolioData';

const Wins = () => {
  return (
    <section id="wins" className="py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-baseline justify-between border-b-[3px] border-ink pb-4">
          <h2 className="font-mono text-xs font-semibold tracking-[0.25em] uppercase text-ink">03 · Proof</h2>
          <span className="font-mono text-[11px] tracking-[0.18em] text-ink/45 uppercase hidden sm:block">Receipts, not adjectives</span>
        </div>

        <div className="hidden lg:grid grid-cols-[1fr_1.1fr_1fr_70px] gap-6 pt-5 pb-3 font-mono text-[10px] tracking-[0.22em] text-ink/45 uppercase">
          <span>Event</span><span>Result</span><span>Work</span><span className="text-right">Year</span>
        </div>

        <div className="border-t border-ink lg:border-t-0">
          {wins.map((w) => (
            <div key={w.event} className="grid lg:grid-cols-[1fr_1.1fr_1fr_70px] gap-2 lg:gap-6 border-b border-ink py-5 items-baseline">
              <span className="font-heading font-bold text-ink text-[17px]">{w.event}</span>
              <span className="font-semibold text-amber">{w.result}</span>
              <span className="text-ink/60">{w.work}</span>
              <span className="font-mono text-sm text-ink/50 lg:text-right">{w.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wins;
