import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useRef, useState, MouseEvent } from 'react';
import WhatsAppSelector from './WhatsAppSelector';

const BrowserFrame = ({ url, src, title }: { url: string; src: string; title: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(hover: none)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const ry = px * 6;
    const rx = -py * 6;
    el.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="animate-float tilt-frame rounded-xl overflow-hidden group relative"
      style={{
        background: 'hsl(var(--bg-primary))',
        border: '1px solid rgba(149,124,61,0.2)',
        boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
      }}
    >
      <div className="h-10 flex items-center px-4 gap-2 relative" style={{ background: 'hsl(var(--bg-secondary))' }}>
        <span className="w-3 h-3 rounded-full" style={{ background: '#FF5F56' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#FFBD2E' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#27C93F' }} />
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3 px-3 py-1 rounded-md flex-1 min-w-0 md:flex-none md:w-[60%] text-left font-body text-xs text-agency-text-secondary truncate hover:text-agency-text transition-colors"
          style={{ background: 'hsl(var(--bg-primary))' }}
        >
          {url}
        </a>
        <div className="ml-auto flex items-center gap-1.5 px-2 py-1 rounded-full" style={{
          background: 'rgba(39,201,63,0.12)',
          border: '1px solid rgba(39,201,63,0.35)',
        }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse-dot" style={{ background: '#27C93F' }} />
          <span className="font-body font-semibold text-[10px] tracking-[0.1em]" style={{ color: '#4ade80' }}>LIVE</span>
        </div>
      </div>
      <div className="relative" style={{ width: '100%', height: 420, overflow: 'hidden', background: 'hsl(var(--bg-secondary))' }}>
        <iframe
          src={src}
          title={title}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          referrerPolicy="no-referrer"
          className="block border-0"
          style={{
            width: '142.857%',
            height: '142.857%',
            transform: 'scale(0.7)',
            transformOrigin: 'top left',
          }}
        />
      </div>
    </div>
  );
};

const ScorePills = () => (
  <div className="flex flex-wrap gap-1.5 mt-3">
    <span className="score-pill"><span>98</span> Performance</span>
    <span className="score-pill"><span>100</span> SEO</span>
    <span className="score-pill"><span>100</span> Accessibility</span>
  </div>
);


type Project = {
  tag: string;
  name: string;
  location: string;
  tags: string[];
  desc: string;
  bestFor: string;
  liveUrl: string;
  browserUrl: string;
};

type Category = 'interior' | 'restaurant' | 'gym' | 'wedding';

const categories: { id: Category; label: string }[] = [
  { id: 'interior', label: 'Interior Design' },
  { id: 'restaurant', label: 'Restaurant' },
  { id: 'gym', label: 'Gym & Fitness' },
  { id: 'wedding', label: 'Wedding & Events' },
];

const projectsByCategory: Record<Category, Project[]> = {
  interior: [
    {
      tag: 'DEMO PROJECT · INTERIOR DESIGN',
      name: 'Noor Interior Studio',
      location: '📍 Premium Residential & Commercial Interiors',
      tags: ['Elegant Layout', 'Project Gallery', 'Lead Form', 'Mobile-First', 'Brand Storytelling'],
      desc: 'A refined interior design studio website built to showcase premium projects with a clean, editorial layout that turns visitors into design consultations.',
      bestFor: 'Interior Designers, Studios, Architects',
      liveUrl: 'https://noor-interior-studio.vercel.app/',
      browserUrl: 'noor-interior-studio.vercel.app',
    },
    {
      tag: 'DEMO PROJECT · INTERIOR DESIGN',
      name: 'Vaastu Interior Studio',
      location: '📍 Vaastu-aligned Interior Solutions',
      tags: ['Service Showcase', 'Portfolio Grid', 'Contact CTA', 'Responsive Design', 'Trust Signals'],
      desc: 'A modern interior studio site blending traditional Vaastu principles with contemporary design — built to attract premium homeowners and builders.',
      bestFor: 'Vaastu Consultants, Interior Studios, Home Designers',
      liveUrl: 'https://vaastu-interior-studio.vercel.app/',
      browserUrl: 'vaastu-interior-studio.vercel.app',
    },
    {
      tag: 'DEMO PROJECT · INTERIOR DESIGN',
      name: 'Digital Interio',
      location: '📍 Modern Interior Design Agency',
      tags: ['Hero Animation', 'Project Showcase', 'Service Packages', 'Lead Capture', 'Premium Look'],
      desc: 'A bold, modern interior design agency website with smooth animations, structured service packages, and a layout engineered for high-intent enquiries.',
      bestFor: 'Interior Agencies, Design Firms, Decor Brands',
      liveUrl: 'https://digital-interio.vercel.app/',
      browserUrl: 'digital-interio.vercel.app',
    },
  ],
  restaurant: [
    {
      tag: 'DEMO PROJECT · RESTAURANT',
      name: 'Purna Kolhapuri Tadka',
      location: '📍 Kolhapur, Maharashtra',
      tags: ['Menu Showcase', 'Reservation CTA', 'Location Map', 'Mobile-First', 'Authentic Branding'],
      desc: 'An authentic Kolhapuri restaurant website designed to highlight the menu, drive reservations, and bring more walk-ins through a warm, appetite-driven design.',
      bestFor: 'Restaurants, Cafés, Food Brands',
      liveUrl: 'https://purna-kolhapuri-tadka.lovable.app/',
      browserUrl: 'purna-kolhapuri-tadka.lovable.app',
    },
  ],
  gym: [
    {
      tag: 'DEMO PROJECT · GYM & FITNESS',
      name: 'IronForge Gym',
      location: '📍 Kolhapur, Maharashtra',
      tags: ['Responsive Design', 'Membership Pricing', 'Contact Form', 'Mobile-First', 'Premium Dark Theme'],
      desc: 'A premium fitness center website for a gym in Kolhapur. Bold dark design, clear membership plans, and a layout engineered to convert visitors into walk-in trials.',
      bestFor: 'Gym owners, Fitness centers',
      liveUrl: 'https://ironforge-gym-five.vercel.app',
      browserUrl: 'ironforge-gym-five.vercel.app',
    },
    {
      tag: 'DEMO PROJECT · GYM & FITNESS',
      name: 'FitZone Pro',
      location: '📍 Delhi',
      tags: ['AI Chatbot', 'Lead Capture Form', 'Before/After Slider', 'Trainer Profiles', 'Membership Plans', 'FAQ Section', 'WhatsApp Integration', 'Animated UI'],
      desc: "Delhi's elite fitness club website — complete with an AI-powered chatbot (FitBot), animated before/after transformation slider, trainer profiles, tiered membership pricing, and a lead capture popup. A full-system demo of what we build.",
      bestFor: 'Fitness Brands, Personal Trainers, Gyms',
      liveUrl: 'https://gym-demo-web-9n2c.vercel.app/',
      browserUrl: 'gym-demo-web-9n2c.vercel.app',
    },
  ],
  wedding: [
    {
      tag: 'DEMO PROJECT · WEDDING & EVENTS',
      name: 'Wedding Visuals',
      location: '📍 Wedding Planning & Event Management',
      tags: ['Elegant Visual Design', 'Event Gallery', 'Package Showcase', 'Enquiry Form', 'Mobile-First'],
      desc: 'An elegant wedding planning website built to showcase real events, packages and visuals — designed to turn browsing couples into booked consultations.',
      bestFor: 'Wedding Planners, Event Managers, Decorators',
      liveUrl: 'https://wedding-visuals-ten.vercel.app/',
      browserUrl: 'wedding-visuals-ten.vercel.app',
    },
  ],
};

const Portfolio = () => {
  const sectionRef = useScrollAnimation();
  const [whatsappOpen, setWhatsappOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>('interior');

  const projects = projectsByCategory[activeCategory];

  return (
    <section id="portfolio" className="py-28 md:py-32" style={{ background: 'hsl(var(--bg-primary))' }}>
      <div ref={sectionRef} className="max-w-[1100px] mx-auto px-6">
        <div className="text-center">
          <span className="scroll-hidden section-label">OUR WORK</span>
          <h2 className="scroll-hidden font-display font-bold text-fluid-h2 text-center mt-6 text-agency-text" style={{ wordSpacing: '0.04em' }}>
            Built by us.<br />Ready to inspire you.
          </h2>
          <p className="scroll-hidden font-body text-sm sm:text-base text-agency-text-secondary text-center max-w-[620px] mx-auto mt-5 leading-[1.8]">
            We build across niches — explore live demo websites by category. Each one is fully functional and shows exactly what your business could look like online.
          </p>

        </div>

        {/* Sticky Category Tabs */}
        <div className="portfolio-tabs-sticky">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="font-body font-medium text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300"
                  style={
                    active
                      ? {
                          background: 'linear-gradient(135deg, #957C3D, #C9A84C)',
                          color: '#001020',
                          border: '1.5px solid transparent',
                          boxShadow: '0 0 20px rgba(201,168,76,0.3)',
                        }
                      : {
                          background: 'hsla(var(--card-bg), 0.35)',
                          color: 'hsl(var(--text-secondary))',
                          border: '1.5px solid rgba(201,168,76,0.25)',
                        }
                  }
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {projects.map((p, i) => {
          const reversed = i % 2 === 1;
          return (
            <div key={`${activeCategory}-${i}`} className="mt-10 rounded-3xl p-6 md:p-8 lg:p-12 overflow-hidden animate-fade-slide-up" style={{
              background: `hsla(var(--card-bg), var(--card-bg-alpha))`,
              border: '1px solid rgba(149,124,61,0.2)',
            }}>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center ${reversed ? 'md:grid-flow-dense' : ''}`}>
                <div className={reversed ? 'md:col-start-2' : ''}>
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold tracking-[1px] font-body" style={{
                    background: 'rgba(201,168,76,0.1)',
                    border: '1px solid rgba(201,168,76,0.25)',
                    color: '#C9A84C',
                  }}>
                    {p.tag}
                  </span>
                  <h3 className="font-display font-bold text-fluid-h3 text-agency-text mt-4">{p.name}</h3>
                  <p className="font-body text-xs sm:text-sm text-agency-text-secondary mt-1">{p.location}</p>
                  <ScorePills />

                  <div className="flex flex-wrap gap-2 mt-4 sm:mt-5">
                    {p.tags.map((tag) => (
                      <span key={tag} className="px-2 sm:px-3 py-1 rounded-full font-body text-[10px] sm:text-xs" style={{
                        background: 'hsla(var(--card-bg),0.35)',
                        border: '1px solid rgba(149,124,61,0.2)',
                        color: 'hsl(var(--text-secondary))',
                        backdropFilter: 'blur(6px)',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="font-body text-[13px] sm:text-[15px] text-agency-text-secondary leading-[1.7] mt-4 sm:mt-5 text-justify">{p.desc}</p>

                  <p className="font-body text-[13px] sm:text-[15px] text-agency-text-secondary leading-[1.7] mt-2">
                    <strong>Best for:</strong> {p.bestFor}
                  </p>

                  <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 mt-5 sm:mt-7">
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="font-body font-medium text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 hover:bg-[rgba(201,168,76,0.08)] text-center"
                      style={{ border: '1.5px solid rgba(201,168,76,0.4)', color: '#C9A84C' }}
                    >
                      View Live Site →
                    </a>
                    <button
                      onClick={() => setWhatsappOpen(true)}
                      className="font-body font-medium text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 hover:-translate-y-0.5 text-center"
                      style={{ background: 'linear-gradient(135deg, #957C3D, #C9A84C)', color: '#001020', boxShadow: '0 0 20px rgba(201,168,76,0.25)' }}
                    >
                      Want something like this?
                    </button>
                  </div>
                </div>

                <div className={reversed ? 'md:col-start-1 md:row-start-1' : ''}>
                  <BrowserFrame url={p.browserUrl} src={p.liveUrl} title={`${p.name} Website Demo`} />
                </div>
              </div>
            </div>
          );
        })}

        <p className="scroll-hidden text-center font-body text-sm text-agency-text-muted italic mt-12">
          Simple websites. Real results. No confusion.
        </p>
      </div>

      <WhatsAppSelector isOpen={whatsappOpen} onClose={() => setWhatsappOpen(false)} />
    </section>
  );
};

export default Portfolio;
