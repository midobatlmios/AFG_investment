import { useEffect, useRef, useState } from 'react';
import { Target, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

const Investment = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const strategies = [
    {
      icon: Users,
      title: 'Co-Investissements',
      description:
        "AFG investit aux côtés d'un ou de plusieurs partenaires dans des sociétés non cotées sans jouer de rôle actif dans la gouvernance.",
    },
    {
      icon: Target,
      title: 'Investissements Actifs',
      description:
        "AFG participe en tant qu'investisseur majoritaire à des opérations portant sur le capital de sociétés non cotées, dans lesquelles elle assure la gouvernance et le développement.",
    },
  ];

  const sectors = [
    'Immobilier et foncier touristiques',
    'Agribusiness',
    'Services financiers',
    'Énergie',
    'Upstream Oil & Gas',
    'Éditique',
    'Agriculture',
    'Télécoms & NTI',
    'Restauration collective et rapide',
    'Aménagement foncier',
    'Promotion immobilière',
  ];

  return (
    <section
      id="investment"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <div
                className={`flex items-center gap-3 mb-6 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
              >
                <div className="w-12 h-px bg-gold" />
                <span className="text-gold text-sm font-medium tracking-wider uppercase">
                  Capital-Investissement
                </span>
              </div>

              <h2
                className={`font-serif text-black mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
              >
                Des professionnels engagés au service de la{' '}
                <span className="text-gradient-gold">création de valeur</span>
              </h2>

              <p
                className={`text-gray-600 leading-relaxed mb-8 transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                L'activité de capital-investissement d'AFG se différencie par son approche
                particulière : une forte culture entrepreneuriale, associée à une démarche
                financière diligente, lui permettant d'identifier, pour son compte et celui
                de partenaires de premier plan, des opportunités d'investissement originales
                à travers le Royaume et dans la région MEA.
              </p>

              <div
                className={`p-6 rounded-xl bg-gray-50 border border-gold/20 transition-all duration-700 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="text-gold font-medium">AFG apporte des solutions sur-mesure</span>{' '}
                  aux entreprises partenaires et à leurs dirigeants, en leur garantissant
                  l'accès à un écosystème performant.
                </p>
              </div>
            </div>

            {/* Strategies */}
            <div className="space-y-6">
              {strategies.map((strategy, index) => (
                <div
                  key={strategy.title}
                  className={`group p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:border-gold/30 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                  }`}
                  style={{ transitionDelay: `${0.4 + index * 0.15}s` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <strategy.icon className="w-7 h-7 text-gold group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                        {strategy.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {strategy.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sectors */}
          <div
            className={`transition-all duration-700 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="flex items-center gap-3 mb-8">
              <ArrowRight className="w-5 h-5 text-gold" />
              <h3 className="font-serif text-xl font-semibold text-navy">
                Investissements réalisés à ce jour
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {sectors.map((sector, index) => (
                <div
                  key={sector}
                  className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:border-gold/30 transition-all group"
                  style={{ animationDelay: `${0.7 + index * 0.05}s` }}
                >
                  <CheckCircle2 className="w-4 h-4 text-gold/60 group-hover:text-gold transition-colors flex-shrink-0" />
                  <span className="text-xs text-gray-600 group-hover:text-navy transition-colors">
                    {sector}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
