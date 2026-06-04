import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const solutions
  = [
  {
    tag: 'CORE SERVICE',
    title: 'Professional Website',
    body: 'A clean, mobile-friendly website that makes your business look professional and helps customers find you easily.',
    glowColor: 'rgba(201,168,76,0.12)',
    hasBottomLine: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    tag: 'KEY FEATURE',
    title: 'AI-Automated Contact Options',
    body: 'Simple ways for customers to contact you — chatbots, phone, email, WhatsApp, and contact forms that work on any device.',
    glowColor: 'rgba(201,168,76,0.15)',
    hasBottomLine: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    tag: 'OUR PROMISE',
    title: 'Quick Setup',
    body: 'Your website goes live in 5-7 days. We work with you every month to improve rankings, generate reviews, and bring more customers on your business.',
    glowColor: 'rgba(201,168,76,0.1)',
    hasBottomLine: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
];

const Solutions = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="solutions" className="py-20 md:py-24" style={{ background: 'hsl(var(--bg-primary))' }}>
      <div ref={sectionRef} className="max-w-6xl mx-auto px-6">
        <div className="text-center scroll-hidden">
          <span className="section-label">WHAT WE DO</span>
        </div>
        <h2 className="scroll-hidden font-display font-bold text-[22px] sm:text-[30px] md:text-[48px] text-center mt-6 max-w-[880px] mx-auto px-2 leading-[1.2] tracking-normal" style={{ wordSpacing: '0.15em' }}>
          <span className="block text-agency-text whitespace-normal sm:whitespace-nowrap">More than a website.</span>
          <span className="block text-agency-text whitespace-normal sm:whitespace-nowrap">A premium system that</span> 
          <span className="block mt-2 whitespace-normal sm:whitespace-nowrap" style={{ color: '#C9A84C' }}>brings customers.</span>
        </h2>
        <p className="scroll-hidden font-body text-sm sm:text-base text-agency-text-secondary text-center max-w-[560px] mx-auto mt-7 leading-[1.95]">
          We combine premium design, local visibility, and smart enquiry systems so your website starts working for your business from day one.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mt-14">

          {solutions.map((s, i) => (
            <div key={i} className="scroll-hidden relative overflow-hidden glass-card p-6 md:p-9 transition-all" style={{ transitionDuration: '350ms' }}>
              {/* Decorative glow */}
              <div className="absolute -top-10 -right-10 w-[140px] h-[140px] rounded-full pointer-events-none" style={{ background: s.glowColor, filter: 'blur(40px)' }} />

              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)' }}>
                {s.icon}
              </div>
              <div className="mt-5 inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-[1.5px] font-body" style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', color: '#C9A84C' }}>
                {s.tag}
              </div>
              <h3 className="font-display font-semibold text-[22px] text-agency-text mt-3">{s.title}</h3>
              <p className="font-body text-[15px] text-agency-text-secondary leading-[1.7] mt-3 text-justify">{s.body}</p>

              {s.hasBottomLine && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, #957C3D, #C9A84C, #957C3D)' }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
