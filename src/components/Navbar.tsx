import { useState, useEffect } from 'react';
import WhatsAppSelector from './WhatsAppSelector';
import vichaarLogo from '@/assets/vichaar-logo-transparent.png';
import vichaarLogoLight from '@/assets/vichaar-logo-light-mode.png';

const navLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Work', href: '#portfolio' },
  // { label: 'Pricing', href: '#pricing' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isLight, setIsLight] = useState(false);
  const [whatsappOpen, setWhatsappOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      setIsLight(true);
      document.documentElement.classList.add('light-mode');
    }
  }, []);

  const toggleTheme = () => {
    const next = !isLight;
    setIsLight(next);
    if (next) {
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  };

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      setScrolled(y > 60);

      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[1000] h-[68px] flex items-center transition-all duration-300"
        style={{
          background: scrolled
            ? (isLight ? 'rgba(245,242,238,0.92)' : 'rgba(0,16,32,0.9)')
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? `1px solid rgba(149,124,61,${isLight ? '0.2' : '0.15'})`
            : '1px solid transparent',
        }}
      >
        <div className="relative max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="relative flex flex-shrink-0 items-center" aria-label="Vichaar Co — Home">
            <img
              src={vichaarLogo}
              alt="Vichaar Co"
              decoding="sync"
              fetchPriority="high"
              className="h-14 md:h-16 w-auto block transition-opacity duration-75"
              style={{ opacity: isLight ? 0 : 1 }}
            />
            <img
              src={vichaarLogoLight}
              alt=""
              aria-hidden="true"
              decoding="sync"
              fetchPriority="high"
              className="h-14 md:h-16 w-auto block absolute inset-0 transition-opacity duration-75"
              style={{ opacity: isLight ? 1 : 0 }}
            />
          </a>

          {/* Center nav */}
          <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="font-body font-medium text-sm transition-colors duration-200"
                style={{
                  color: activeSection === link.href.slice(1) ? '#C9A84C' : (isLight ? '#5A6A7A' : '#8A9BB5'),
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== link.href.slice(1))
                    (e.target as HTMLElement).style.color = (isLight ? '#1A2332' : '#C9A84C');
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== link.href.slice(1))
                    (e.target as HTMLElement).style.color = (isLight ? '#5A6A7A' : '#8A9BB5');
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Theme toggle + CTA + hamburger */}
          <div className="ml-auto flex items-center gap-4">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="hidden md:flex items-center w-[52px] h-[28px] rounded-full p-[3px] transition-all duration-300"
              style={{
                background: isLight ? '#E8E4DC' : '#001A3D',
                border: '1px solid rgba(149,124,61,0.3)',
              }}
            >
              <div
                className="w-[22px] h-[22px] rounded-full flex items-center justify-center text-[12px] transition-transform duration-300"
                style={{
                  background: 'linear-gradient(135deg, #957C3D, #C9A84C)',
                  transform: isLight ? 'translateX(0)' : 'translateX(24px)',
                }}
              >
                {isLight ? '☀️' : '🌙'}
              </div>
            </button>

            <button
              onClick={() => setWhatsappOpen(true)}
              className="hidden md:block font-body font-medium text-sm px-5 py-2.5 rounded-lg transition-all duration-300"
              style={{
                border: '1.5px solid rgba(201,168,76,0.5)',
                color: '#C9A84C',
              }}
              onMouseEnter={(e) => {
                const t = e.currentTarget;
                t.style.background = 'linear-gradient(135deg, #957C3D, #C9A84C)';
                t.style.color = '#001020';
                t.style.boxShadow = '0 0 20px rgba(201,168,76,0.4)';
              }}
              onMouseLeave={(e) => {
                const t = e.currentTarget;
                t.style.background = 'transparent';
                t.style.color = '#C9A84C';
                t.style.boxShadow = 'none';
              }}
            >
              Let's Talk →
            </button>

            {/* Hamburger */}
            <button
              className="relative z-[1001] flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-[5px] rounded-full border px-0 py-0 md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              aria-expanded={menuOpen}
              style={{
                background: 'hsl(var(--bg-secondary) / 0.84)',
                borderColor: 'hsl(var(--border))',
                boxShadow: '0 10px 28px hsl(var(--background) / 0.35)',
              }}
            >
              <span className={`block h-[2.5px] w-[22px] rounded-full transition-all duration-300 ${menuOpen ? 'translate-y-[7.5px] rotate-45' : ''}`} style={{ background: 'hsl(var(--accent-gold))', boxShadow: '0 0 8px hsl(var(--accent-gold) / 0.55)' }} />
              <span className={`block h-[2.5px] w-[22px] rounded-full transition-all duration-300 ${menuOpen ? 'scale-0 opacity-0' : ''}`} style={{ background: 'hsl(var(--accent-gold))', boxShadow: '0 0 8px hsl(var(--accent-gold) / 0.55)' }} />
              <span className={`block h-[2.5px] w-[22px] rounded-full transition-all duration-300 ${menuOpen ? '-translate-y-[7.5px] -rotate-45' : ''}`} style={{ background: 'hsl(var(--accent-gold))', boxShadow: '0 0 8px hsl(var(--accent-gold) / 0.55)' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-5 px-6 py-16 text-center animate-fade-in"
          style={{
            background: isLight ? 'rgba(245,242,238,0.98)' : 'rgba(0,16,32,0.98)',
            backdropFilter: 'blur(22px)',
          }}
        >
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="font-display font-semibold text-3xl text-agency-text animate-fade-slide-up w-full max-w-[88vw] leading-tight"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {link.label}
            </button>
          ))}
          {/* Mobile theme toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center w-[52px] h-[28px] rounded-full p-[3px] transition-all duration-300 mt-4"
            style={{
              background: isLight ? '#E8E4DC' : '#001A3D',
              border: '1px solid rgba(149,124,61,0.3)',
            }}
          >
            <div
              className="w-[22px] h-[22px] rounded-full flex items-center justify-center text-[12px] transition-transform duration-300"
              style={{
                background: 'linear-gradient(135deg, #957C3D, #C9A84C)',
                transform: isLight ? 'translateX(0)' : 'translateX(24px)',
              }}
            >
              {isLight ? '☀️' : '🌙'}
            </div>
          </button>
        </div>
      )}

      <WhatsAppSelector isOpen={whatsappOpen} onClose={() => setWhatsappOpen(false)} />
    </>
  );
};

export default Navbar;
