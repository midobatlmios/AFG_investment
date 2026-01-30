import { useEffect, useRef, useState } from 'react';
import { ChevronRight, TrendingUp, Building2, Landmark } from 'lucide-react';

const HeroEn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    { icon: TrendingUp, label: 'Financial Advisory' },
    { icon: Building2, label: 'Asset Management' },
    { icon: Landmark, label: 'Private Equity' },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.gif"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(201, 169, 98, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(201, 169, 98, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20 pt-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm text-gold tracking-wide">
              Independent Investment Bank since 1999
            </span>
          </div>

          {/* Main Title */}
          <h1
            className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Advisory &{' '}
            <span className="text-gradient-gold">Investment</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-12 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            AFG assists its clients in achieving their strategic projects with expertise, independence and confidentiality
          </p>

          {/* Service Cards */}
          <div
            className={`grid sm:grid-cols-3 gap-6 mb-12 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {services.map((service, index) => (
              <div
                key={service.label}
                className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 transition-all hover:bg-white/10"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <service.icon className="w-8 h-8 text-gold mb-3 mx-auto group-hover:scale-110 transition-transform" />
                <p className="text-white/80 text-sm font-medium">{service.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className={`transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-all group"
            >
              <span>Discover Our Services</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroEn;
