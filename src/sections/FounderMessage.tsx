import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';

const FounderMessage = () => {
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

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/hero-bg.gif"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-5xl mx-auto">
          {/* Section Label */}
          <div
            className={`flex items-center gap-3 mb-12 justify-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-12 h-px bg-white" />
            <span className="text-white text-sm font-medium tracking-wider uppercase">
              Mot du fondateur
            </span>
            <div className="w-12 h-px bg-white" />
          </div>

          {/* Quote Card */}
          <div
           className={`relative p-12 rounded-3xl bg-navy-light border border-white/5 hover:border-gold/30 transition-all duration-500 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
          >
            {/* Quote Icon */}
            <Quote className="absolute top-8 left-8 w-12 h-12 text-gold/20" />

            <div className="relative z-10">
              {/* Message */}
              <div className="space-y-6 text-white/80 leading-relaxed text-lg mb-10 pl-8">
                <p
                  className={`transition-all duration-700 delay-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  Chers amis, clients et partenaires,
                </p>
                <p
                  className={`transition-all duration-700 delay-400 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  Au cours du dernier quart de siècle, le Royaume du Maroc a confirmé sa volonté
                  de renforcer et de diversifier son tissu économique, ainsi que son dessein
                  d'engager une importante transformation visant à se positionner en tant que
                  hub économique et financier à la croisée des continents.
                </p>
                <p
                  className={`transition-all duration-700 delay-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  D'ambitieuses politiques ont ainsi été mises en œuvre, favorisant la consolidation
                  des fondamentaux macroéconomiques et induisant des réformes réglementaires et
                  institutionnelles substantielles.
                </p>
                <p
                  className={`transition-all duration-700 delay-600 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  C'est dans ce contexte, que grâce à l'expertise des équipes d'AFG et à leur
                  savoir-faire, nous accompagnons en toute indépendance et confidentialité nos
                  clients et partenaires dans la réalisation de leurs projets, et leur proposons,
                  en ligne avec leurs intérêts, une gamme complète de prestations premium en
                  matière de conseil financier et d'investissement.
                </p>
              </div>

              {/* Signature */}
              <div
                className={`flex items-center gap-6 pl-8 transition-all duration-700 delay-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                  <span className="font-serif text-2xl font-bold text-navy">MB</span>
                </div>
                <div>
                  <div className="font-serif text-xl font-semibold text-white">
                    Mohammed Benslimane
                  </div>
                  <div className="text-gold text-sm">Fondateur & Président</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
