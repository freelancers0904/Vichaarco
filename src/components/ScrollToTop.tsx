import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className="scroll-top-btn fixed left-6 z-[9997] w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 active:scale-95"
      style={{
        background: 'hsl(var(--scroll-top-bg))',
        border: '1px solid rgba(201,168,76,0.4)',
        backdropFilter: 'blur(8px)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(10px)',
        pointerEvents: visible ? 'auto' : 'none',
        bottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(149,124,61,0.2)';
        e.currentTarget.style.borderColor = '#C9A84C';
        e.currentTarget.style.boxShadow = '0 0 20px rgba(201,168,76,0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(0, 26, 61, 0.8)';
        e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--scroll-top-icon))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
};

export default ScrollToTop;
