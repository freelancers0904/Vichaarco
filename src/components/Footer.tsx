import { useEffect, useState } from 'react';
import WhatsAppSelector from './WhatsAppSelector';
import vichaarLogo from '@/assets/vichaar-logo-transparent.png';
import vichaarLogoLight from '@/assets/vichaar-logo-light-mode.png';

const navLinks = [
  { label: 'Work', href: '#portfolio' },
  { label: 'Services', href: '#solutions' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => {
  const [whatsappOpen, setWhatsappOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const update = () => setIsLight(document.documentElement.classList.contains('light-mode'));
    update();
    const obs = new MutationObserver(update);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);

  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: 'hsl(var(--bg-primary))', borderTop: '1px solid rgba(149,124,61,0.15)' }}>
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {/* Logo */}
          <div className="sm:col-span-1 text-center sm:text-left">
            <a href="#" className="relative inline-flex items-center justify-center sm:justify-start" aria-label="Vichaar Co — Home">
              <img
                src={vichaarLogo}
                alt="Vichaar Co"
                decoding="sync"
                className="h-14 md:h-16 w-auto block transition-opacity duration-75"
                style={{ opacity: isLight ? 0 : 1 }}
              />
              <img
                src={vichaarLogoLight}
                alt=""
                aria-hidden="true"
                decoding="sync"
                className="h-14 md:h-16 w-auto block absolute inset-0 transition-opacity duration-75"
                style={{ opacity: isLight ? 1 : 0 }}
              />
            </a>
            <p className="font-body text-xs md:text-[13px] text-agency-text-muted mt-3">We build systems. Not just websites.</p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <p className="font-body font-medium text-[10px] md:text-[11px] tracking-[1.5px] text-agency-text-muted uppercase mb-3 md:mb-4">Quick Links</p>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-2">
              {navLinks.map((link) => (
                <button key={link.href} onClick={() => handleClick(link.href)}
                  className="text-left font-body text-xs md:text-sm text-agency-text-secondary hover:text-agency-text transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Get in touch */}
          <div className="text-center sm:text-left">
            <p className="font-body font-medium text-[10px] md:text-[11px] tracking-[1.5px] text-agency-text-muted uppercase mb-4">Get in touch</p>
            <button onClick={() => setWhatsappOpen(true)}
              className="inline-block w-full sm:w-auto px-3 md:px-4 py-2 rounded-lg font-body text-xs md:text-[13px] font-medium mb-3 transition-all duration-300"
              style={{ border: '1.5px solid rgba(37,211,102,0.4)', color: '#25D366' }}
            >
              WhatsApp →
            </button>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vichaarco0904@gmail.com" target="_blank" rel="noopener noreferrer" className="block font-body text-xs md:text-[13px] text-agency-text-secondary hover:text-agency-text transition-colors">vichaarco0904@gmail.com</a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-8 md:mt-10 pt-5 text-center sm:text-left" style={{ borderTop: '1px solid rgba(149,124,61,0.1)' }}>
          <p className="font-body text-[11px] md:text-[13px] text-agency-text-muted">© 2026. Built with purpose in India.</p>
          <p className="font-body text-[11px] md:text-[13px] text-agency-text-muted">Kolhapur, Maharashtra 🇮🇳</p>
        </div>
      </div>

      <WhatsAppSelector isOpen={whatsappOpen} onClose={() => setWhatsappOpen(false)} />
    </footer>
  );
};

export default Footer;
