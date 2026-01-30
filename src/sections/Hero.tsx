import { useEffect, useRef, useState } from 'react';
import { ChevronRight, TrendingUp, Building2, Landmark } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    { icon: TrendingUp, label: 'Conseil Financier' },
    { icon: Building2, label: 'Gestion d\'Actifs' },
    { icon: Landmark, label: 'Capital-Investissement' },
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
              Banque d'affaires indépendante depuis 1999
            </span>
          </div>

          {/* Main Title */}
          <h1
            className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Conseil &{' '}
            <span className="text-gradient-gold">Investissement</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-12 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            AFG accompagne ses clients dans la réalisation de leurs projets
            stratégiques avec expertise, indépendance et confidentialité
          </p>

          {/* Service Cards */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {services.map((service, index) => (
              <div
                key={service.label}
                className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-gold/5 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <service.icon className="w-8 h-8 text-gold mb-3 mx-auto group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-white/90">
                  {service.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="#expertise"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#expertise')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group flex items-center gap-2 px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-all hover:shadow-gold"
            >
              Découvrir nos services
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 border border-white/30 text-white font-medium rounded-lg hover:border-gold hover:text-gold transition-all"
            >
              Prendre rendez-vous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
