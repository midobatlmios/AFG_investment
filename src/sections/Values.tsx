import { useEffect, useRef, useState } from 'react';
import { Shield, Users2, Lightbulb } from 'lucide-react';

const Values = () => {
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

  const values = [
    {
      icon: Shield,
      title: 'Indépendance & Confidentialité',
      description:
        "AFG n'est liée à aucune institution financière évitant ainsi tout conflit d'intérêt et privilégiant le seul intérêt de ses clients et partenaires. Le respect de la confidentialité étant un facteur clé de succès de toute opération, nos équipes s'obligent au respect d'un strict secret professionnel.",
    },
    {
      icon: Users2,
      title: 'Engagement & Professionnalisme',
      description:
        "Connues pour leur rigueur et leur efficacité, nos équipes sont en permanence disponibles et totalement engagées dans le succès du mandat qui leur est confié. Munies d'une expertise multisectorielle, elles affichent une formation aux meilleurs standards.",
    },
    {
      icon: Lightbulb,
      title: 'Créativité & Innovation',
      description:
        "Constamment en quête d'innovation et toujours soucieuses d'offrir une prestation élaborée et de qualité, les équipes d'AFG se singularisent par leur capacité à aborder et traiter des opérations complexes ou exigeantes.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50" />

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div
              className={`flex items-center gap-3 mb-6 justify-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold text-sm font-medium tracking-wider uppercase">
                Nos valeurs
              </span>
              <div className="w-12 h-px bg-gold" />
            </div>

            <h2
              className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy max-w-3xl mx-auto transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Elles nous <span className="text-gradient-gold">portent</span> et nous{' '}
              <span className="text-gradient-gold">engagent</span>
            </h2>

            <p
              className={`mt-4 text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Nos valeurs fondamentales guident chacune de nos actions et définissent
              notre relation avec nos clients et partenaires.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`group relative p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:border-gold/30 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${0.3 + index * 0.15}s` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <value.icon className="w-7 h-7 text-gold group-hover:scale-110 transition-transform" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-semibold text-navy mb-4">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {value.description}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
