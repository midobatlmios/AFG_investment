import { useEffect, useRef, useState } from 'react';
import { 
  Handshake, 
  Building, 
  TrendingUp, 
  Landmark, 
  ChevronRight 
} from 'lucide-react';

const Expertise = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
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

  const services = [
    {
      icon: Handshake,
      title: 'Fusions-Acquisitions',
      items: [
        'Conseil à la vente / transmission (Sell-Side)',
        'Conseil à l\'achat (Buy-Side)',
        'Modélisation financière & évaluation',
        'Optimisation des conditions de cession ou d\'acquisition',
        'Structuration de l\'opération et son financement',
        'Organisation et assistance à la négociation',
      ],
    },
    {
      icon: Building,
      title: 'Privatisations, PPP & Concessions',
      items: [
        'Conseil aux autorités publiques',
        'Accompagnement des investisseurs',
        'Structuration des partenariats',
        'Due diligence stratégique et financière',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Marchés de Capitaux (ECM/DCM)',
      items: [
        'Introductions en bourse (IPO)',
        'Augmentations de capital',
        'Émissions obligataires',
        'Placement privé',
      ],
    },
    {
      icon: Landmark,
      title: 'Structuration de Financement',
      items: [
        'Financement d\'acquisition (LBO)',
        'Refinancement et restructuration',
        'Financements structurés',
        'Conseil en dette',
      ],
    },
  ];

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/hero-bg.gif"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div
                className={`flex items-center gap-3 mb-6 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
              >
                <div className="w-12 h-px bg-gold" />
                <span className="text-gold text-sm font-medium tracking-wider uppercase">
                  Notre expertise
                </span>
              </div>

              <h2
                className={`font-serif text-white mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
              >
                Conseil &{' '}
                <span className="text-gradient-gold">Ingénierie Financière</span>
              </h2>

              <p
                className={`text-white/70 leading-relaxed transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Avec une prédilection pour les opérations de taille significative ou qui
                intègrent une forte composante stratégique, nos équipes se distinguent par
                leur savoir-faire en Corporate Finance et leur connaissance des marchés financiers.
              </p>
            </div>

            <div
              className={`flex items-end transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="text-white/60 leading-relaxed">
                Notre capacité reconnue à délivrer un conseil discret, fiable et indépendant
                est mise au service d'une clientèle corporate et institutionnelle de premier plan.
                En raison de ce positionnement caractéristique, AFG a accumulé depuis sa fondation
                une riche expérience, lui valant d'afficher un track record de premier ordre.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group relative p-8 rounded-2xl bg-navy-light border border-white/5 hover:border-gold/30 transition-all duration-500 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } ${activeService === index ? 'border-gold/50' : ''}`}
                style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                    <service.icon className="w-7 h-7 text-gold group-hover:scale-110 transition-transform" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      {service.title}
                      <ChevronRight className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </h3>

                    <ul className="space-y-2">
                      {service.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-sm text-white/60 flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold/60 mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
