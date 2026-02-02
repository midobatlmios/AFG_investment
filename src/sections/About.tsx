import { useEffect, useRef, useState } from 'react';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Award, value: '25+', label: 'Années d\'expertise' },
    { icon: Users, value: '100+', label: 'Clients accompagnés' },
    { icon: Globe, value: '3', label: 'Bureaux régionaux' },
    { icon: TrendingUp, value: '50+', label: 'Transactions majeures' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201, 169, 98, 0.5) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              {/* Section Label */}
              <div
                className={`flex items-center gap-3 mb-6 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
              >
                <div className="w-12 h-px bg-gold" />
                <span className="text-gold text-sm font-medium tracking-wider uppercase">
                  Qui sommes-nous
                </span>
              </div>

              {/* Title */}
              <h2
                className={`font-serif text-black mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
              >
                Un acteur historique du{' '}
                <span className="text-blue-dark">marché financier</span> au Maroc
              </h2>

              {/* Description */}
              <div
                className={`space-y-4 text-gray-600 leading-relaxed transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <p>
                  Advisory & Finance Group ('AFG') est une banque d'affaires indépendante
                  spécialisée dans le conseil financier et la gestion de véhicules d'investissement.
                </p>
                <p>
                  Fondée en 1999, elle acquiert rapidement sa notoriété dans des opérations de
                  conseil financier et stratégique de référence (privatisations, fusions-acquisitions,
                  joint-ventures, partenariats, etc.), ainsi que sur les marchés de capitaux.
                </p>
                <p>
                  S'appuyant sur un capital humain et intellectuel de qualité, AFG a par la suite
                  et avec succès élargi son champ d'intervention aux opérations de capital-investissement
                  et à la gestion d'actifs.
                </p>
              </div>

              {/* CTA */}
              <div
                className={`mt-8 transition-all duration-700 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <a
                  href="#expertise"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#expertise')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-blue-dark hover:text-gold-light transition-colors group"
                >
                  <span className="font-medium">Découvrir notre expertise</span>
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* Right Content - Stats */}
            <div
              className={`grid grid-cols-2 gap-6 transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group p-6 lg:p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:border-gold/30 transition-all duration-300"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <stat.icon className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" />
                  <div className="font-serif text-3xl lg:text-4xl font-bold text-navy mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
