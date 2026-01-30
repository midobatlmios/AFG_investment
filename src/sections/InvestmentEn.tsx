import { useEffect, useRef, useState } from 'react';
import { Target, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

const InvestmentEn = () => {
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
      title: 'Co-Investments',
      description:
        "AFG invests alongside one or more partners in unlisted companies without playing an active role in governance.",
    },
    {
      icon: Target,
      title: 'Active Investments',
      description:
        "AFG participates as majority investor in operations involving the capital of unlisted companies, where it ensures governance and development.",
    },
  ];

  const sectors = [
    'Real Estate & Tourism Land',
    'Agribusiness',
    'Financial Services',
    'Energy',
    'Upstream Oil & Gas',
    'Publishing',
    'Agriculture',
    'Telecoms & IT',
    'Collective & Quick Service Restaurants',
    'Land Development',
    'Real Estate Development',
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
                  Private Equity
                </span>
              </div>

              <h2
                className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 transition-all duration-700 delay-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Professionals committed to creating{' '}
                <span className="text-gradient-gold">value</span>
              </h2>

              <p
                className={`text-gray-600 leading-relaxed mb-8 transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                AFG's private equity activity is distinguished by its particular approach: a strong entrepreneurial culture, combined with diligent financial management, enabling it to identify investment opportunities for its own account and that of leading partners across the Kingdom and the MEA region.
              </p>

              <div
                className={`p-6 rounded-xl bg-gray-50 border border-gold/20 transition-all duration-700 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="text-gold font-medium">AFG provides tailored solutions</span>{' '}
                  to partner companies and their managers, guaranteeing them access to a high-performing ecosystem.
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
                Investments made to date
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

export default InvestmentEn;
