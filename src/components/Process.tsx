import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const steps = [
  { day: 'Day 1', title: 'Discovery Call', body: 'We learn your business and goals.' },
  { day: 'Day 1–2', title: 'Strategy + Design Preview', body: 'Real mockup in 24–48 hours.' },
  { day: 'Day 2–5', title: 'Full Build', body: 'Website, Google, WhatsApp — all built.' },
  { day: 'Day 5–6', title: 'Review & Revisions', body: 'You review. We adjust.' },
  { day: 'Day 7', title: '🚀 Launch', body: 'Live. Full access handed over.' },
];

const Process = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="process" className="py-28 md:py-32" style={{ background: 'hsl(var(--bg-secondary))' }}>
      <div ref={sectionRef} className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <span className="scroll-hidden section-label">HOW WE WORK</span>
          <h2 className="scroll-hidden font-display font-bold text-[28px] sm:text-[36px] md:text-[52px] text-center mt-6 leading-[1.2] tracking-normal text-agency-text" style={{ wordSpacing: '0.04em' }}>
            From zero to fully online<br />in 5–7 days.
          </h2>
          <p className="scroll-hidden font-body text-sm sm:text-base text-agency-text-secondary text-center max-w-[500px] mx-auto mt-5">
            A simple, transparent process that respects your time.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Connecting line desktop */}
          <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px" style={{
            background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4) 20%, rgba(201,168,76,0.6) 50%, rgba(201,168,76,0.4) 80%, transparent)',
          }} />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6">
            {steps.map((step, i) => (
              <div key={i} className="scroll-hidden flex flex-col items-center text-center">
                <div className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-full flex items-center justify-center font-display font-bold text-sm sm:text-lg md:text-xl shrink-0 mx-auto" style={{
                  background: 'rgba(201,168,76,0.1)',
                  border: '1.5px solid rgba(201,168,76,0.4)',
                  boxShadow: '0 0 20px rgba(201,168,76,0.15)',
                  color: '#C9A84C',
                }}>
                  {i + 1}
                </div>
                <div className="font-body font-semibold text-[11px] sm:text-[12px] md:text-[13px] mt-2 sm:mt-3 md:mt-4 tracking-[0.5px] text-center" style={{ color: '#C9A84C' }}>{step.day}</div>
                <div className="font-display font-semibold text-xs sm:text-sm md:text-[16px] text-agency-text mt-1 md:mt-2 whitespace-normal text-center">{step.title}</div>
                <p className="font-body text-[11px] sm:text-[12px] md:text-[13px] text-agency-text-secondary max-w-[160px] leading-[1.5] sm:leading-[1.6] mt-1 sm:mt-1.5 md:mt-2 text-center mx-auto">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
