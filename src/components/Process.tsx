import { processSteps } from '../data/portfolioData';

const Process = () => {
  return (
    <section id="process" className="py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-baseline justify-between border-b-[3px] border-ink pb-4">
          <h2 className="font-mono text-xs font-semibold tracking-[0.25em] uppercase text-ink">02 · Process</h2>
          <span className="font-mono text-[11px] tracking-[0.18em] text-ink/45 uppercase hidden sm:block">How I run a GTM build</span>
        </div>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink border border-ink">
          {processSteps.map((step) => (
            <div key={step.id} className="bg-paper p-6">
              <div className="flex items-baseline justify-between">
                <span className="font-mono font-bold text-amber">{step.id}</span>
                <span className="font-mono text-[10px] tracking-[0.2em] text-ink/40 uppercase">Step</span>
              </div>
              <h3 className="mt-4 text-xl">{step.title}</h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink/65">{step.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-5 font-mono text-[11px] tracking-[0.14em] text-ink/50 uppercase">
          No step gets skipped — a pipeline is only as honest as its first definition.
        </p>
      </div>
    </section>
  );
};

export default Process;
