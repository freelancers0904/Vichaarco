import { useEffect, useRef, useState } from 'react';
import WhatsAppSelector from './WhatsAppSelector';
import MagneticButton from './MagneticButton';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [whatsappOpen, setWhatsappOpen] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(hover: none)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    
    let lastX = 0, lastY = 0;
    let rafId: number;
    
    const handler = (e: MouseEvent) => {
      lastX = (e.clientX / window.innerWidth - 0.5) * 24;
      lastY = (e.clientY / window.innerHeight - 0.5) * 24;
      
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const el = glowRef.current;
        if (!el) return;
        el.style.transform = `translate3d(${lastX}px, ${lastY}px, 0)`;
      });
    };
    
    window.addEventListener('mousemove', handler, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handler);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);


  return (
    <section className="hero-section relative flex min-h-[calc(100svh-68px)] items-start justify-center overflow-hidden md:min-h-screen md:items-center" style={{ 
      background: 'hsl(var(--bg-primary))',
      backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,168,76,0.08) 1px, transparent 0)',
      backgroundSize: '24px 24px'
    }}>
      {/* Gold glow */}
      <div ref={glowRef} className="absolute inset-0 pointer-events-none hero-gold-glow will-change-transform" style={{
        background: 'radial-gradient(ellipse 800px 600px at 50% 30%, rgba(149,124,61,0.1) 0%, transparent 70%)',
        transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1)',
      }} />
      {/* Navy glow bottom-right */}
      <div className="absolute inset-0 pointer-events-none hero-navy-glow" style={{
        background: 'radial-gradient(ellipse 400px 300px at 90% 90%, rgba(0,35,73,0.8) 0%, transparent 70%)'
      }} />
      {/* Light beam */}
      <div className="absolute w-[60%] left-1/2 -translate-x-1/2 top-[45%] h-[1px] animate-light-beam" style={{
        background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.25), transparent)'
      }} />

      <div className="relative z-10 text-center px-6 sm:px-8 pt-13 pb-8 sm:pt-10 sm:pb-14 max-w-4xl mx-auto md:py-24">
        {/* Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{
            background: 'rgba(201,168,76,0.1)',
            border: '1px solid rgba(201,168,76,0.3)',
            transitionDelay: '0.2s',
            boxShadow: '0 0 20px rgba(201,168,76,0.2)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse-dot" style={{ background: '#C9A84C' }} />
          <span className="font-body font-medium text-[13px]" style={{ color: '#C9A84C' }}>⚡ Full Online Presence in 5–7 Days</span>
        </div>

        {/* Headline */}
        <div className={`mx-auto mb-6 h-[1px] w-20 rounded-full bg-[#C9A84C]/30 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
          style={{ transitionDelay: '0.3s' }}
        />
        <h1 className="font-display font-bold text-fluid-h1" style={{ wordSpacing: '0.06em', maxWidth: '95vw', margin: '0 auto' }}>
          {['Turn Your Business Into'].map((line, i) => (
            <span key={i} className={`block text-agency-text transition-all duration-700 ${i < 2 ? 'sm:whitespace-nowrap' : ''} ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${0.4 + i * 0.1}s` }}
            >
              {line}
            </span>
          ))}
          <span className={`block relative inline-block transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '0.6s', marginLeft: '0.6em' }}
          >
             <span className="text-shimmer-gold">A Customer Magnet.</span>
            <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
              <path
                d="M2 8 C40 2, 80 12, 120 6 S180 2, 198 8"
                stroke="#C9A84C"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                opacity="0.7"
                strokeDasharray="200"
                className={loaded ? 'animate-draw-line' : ''}
                style={{ strokeDashoffset: loaded ? undefined : 200 }}
              />
            </svg>
          </span>
        </h1>

        {/* Subheadline */}
        <p className={`font-body text-base sm:text-lg text-agency-text-secondary max-w-[620px] mx-auto mt-4 sm:mt-8 leading-[1.75] transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ 
            transitionDelay: '0.7s',
            background: 'linear-gradient(90deg, #C9A84C, #957C3D)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          We build your website, set up your Google presence, and create a smart enquiry system — so customers can find you and contact you easily.
        </p>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 sm:mt-10 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '0.8s' }}
        >
          <MagneticButton
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-body font-semibold text-[14px] sm:text-[15px] h-11 sm:h-[52px] px-6 sm:px-8 rounded-[10px] w-full sm:w-auto flex items-center justify-center gap-2"
            style={{
              background: 'linear-gradient(135deg, #957C3D, #C9A84C)',
              color: '#001020',
              boxShadow: '0 0 30px rgba(201,168,76,0.25)',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            View Our Work
          </MagneticButton>
          <button
            onClick={() => setWhatsappOpen(true)}
            className="font-body font-semibold text-[14px] sm:text-[15px] h-11 sm:h-[52px] px-6 sm:px-8 rounded-[10px] flex items-center justify-center transition-all duration-300 hover:bg-[rgba(201,168,76,0.08)] w-full sm:w-auto gap-2"
            style={{
              border: '1.5px solid rgba(201,168,76,0.5)',
              color: '#C9A84C',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            Chat on WhatsApp →
          </button>
        </div>

        {/* Microcopy */}
        <p className={`font-body text-[13px] text-agency-text-muted mt-5 transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '0.9s' }}
        >
          No retainer. No tech headaches. Just customers finding you.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:bottom-8">
        <svg width="20" height="32" viewBox="0 0 20 32" fill="none" className="opacity-60 hover:opacity-80 transition-opacity">
          <rect x="1" y="1" width="18" height="30" rx="9" stroke="#C9A84C" strokeWidth="1.5" />
          <circle cx="10" cy="10" r="2" fill="#C9A84C" className="animate-scroll-dot" />
        </svg>
      </div>

      <WhatsAppSelector isOpen={whatsappOpen} onClose={() => setWhatsappOpen(false)} />
    </section>
  );
};

export default Hero;
