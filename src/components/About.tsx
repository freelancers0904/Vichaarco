import { useEffect, useRef, useState } from 'react';
import MTPhoto from '../assets/MT.jpg';
import PSPhoto from '../assets/PS.jpg';

const About = () => {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const founders = [
    {
      name: 'Mahesh Tolanur',
      role: 'Co-Founder & Lead Developer',
      bio: 'Works closely with clients to understand their business goals and leads the development of modern, high-performing websites that help businesses establish a strong online presence.',
      photo: MTPhoto,
    },
    {
      name: 'Palak Shah',
      role: 'Co-Founder & Product Designer',
      bio: 'Manages project execution, client communication, and overall coordination while contributing to website development to ensure smooth and successful project delivery.',
      photo: PSPhoto,
    },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: 'hsl(var(--bg-primary))',
        backgroundImage:
          'radial-gradient(circle at 1px 1px, rgba(201,168,76,0.06) 1px, transparent 0)',
        backgroundSize: '24px 24px',
      }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 900px 500px at 50% 50%, rgba(149,124,61,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.1s' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: 'rgba(201,168,76,0.1)',
              border: '1px solid rgba(201,168,76,0.3)',
              boxShadow: '0 0 20px rgba(201,168,76,0.15)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse-dot" style={{ background: '#C9A84C' }} />
            <span className="font-body font-medium text-[13px]" style={{ color: '#C9A84C' }}>
              👥 Meet the Founders
            </span>
          </div>

          <h2
            className="font-display font-bold text-fluid-h2 mb-4"
            style={{
              background: 'linear-gradient(120deg, #C9A84C, #957C3D)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            The Team Behind Vichaar Co.
          </h2>

        </div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
            >
              <div
                className="glass-card group flex flex-col sm:flex-row gap-6 p-6 sm:p-8"
                style={{
                  background: 'rgba(210, 100, 14, 0.06)',
                }}
              >
                {/* Photo Section */}
                <div className="flex-shrink-0 w-full sm:w-48 flex justify-center sm:block">
                  <div
                    className="relative w-32 h-40 sm:w-40 sm:h-48 overflow-hidden rounded-lg"
                    style={{
                      border: '2px solid rgba(201,168,76,0.25)',
                      boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                    }}
                  >
                    <img
                      src={founder.photo}
                      alt={founder.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col justify-start">
                  <h3
                    className="font-display font-bold text-2xl mb-1 text-center sm:text-left"
                    style={{ color: '#C9A84C' }}
                  >
                    {founder.name}
                  </h3>
                  <p
                    className="font-body font-semibold text-sm mb-4 text-center sm:text-left"
                    style={{ color: 'hsl(var(--text-secondary))' }}
                  >
                    {founder.role}
                  </p>

                  <p
                    className="font-body text-base leading-relaxed mb-4 text-justify"
                    style={{ color: 'hsl(var(--text-secondary))' }}
                  >
                    {founder.bio}
                  </p>

                  {/* Quick Stats */}
                  <div className="flex gap-6 mt-auto pt-4 border-t" style={{ borderColor: 'rgba(201,168,76,0.15)' }}>
                    <div>
                      <p className="font-body font-semibold text-sm" style={{ color: '#C9A84C' }}>
                        Expertise
                      </p>
                      <p className="font-body text-xs text-agency-text-muted">
                        {index === 0 ? 'Website Development & Technical Strategy' : 'Project Coordination & Website Development'}
                      </p>
                    </div>
                    {/* <div>
                      <p className="font-body font-semibold text-sm" style={{ color: '#C9A84C' }}>
                        Mission
                      </p>
                      <p className="font-body text-xs text-agency-text-muted">
                        {index === 0 ? 'Building Reliable Web Solutions' : 'Designing Better User Experiences'}
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div
          className={`mt-16 md:mt-20 transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.5s' }}
        >
          <div
            className="glass-card p-8 sm:p-12"
            style={{
              background: 'rgba(210, 100, 14, 0.06)',
              border: '1px solid rgba(201,168,76,0.2)',
            }}
          >
            <h3
              className="font-display font-bold text-2xl mb-4"
              style={{ color: '#C9A84C' }}
            >
              Our Story
            </h3>
            <p className="font-body text-base leading-relaxed text-justify max-w-[68ch] mx-auto" style={{ color: 'hsl(var(--text-secondary))' }}>
              Vichaar Co. was founded with a simple goal — helping businesses build a strong digital presence. As a team of developers and problem-solvers, we work closely with clients to create websites that are professional, modern, and built to support business growth. Every project we take on is driven by a commitment to quality, clear communication, and delivering real value to our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
