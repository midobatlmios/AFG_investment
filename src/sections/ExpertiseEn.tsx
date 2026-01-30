import { useEffect, useRef, useState } from 'react';
import { 
  Handshake, 
  Building, 
  TrendingUp, 
  Landmark, 
  ChevronRight 
} from 'lucide-react';

const ExpertiseEn = () => {
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
      title: 'Mergers & Acquisitions',
      items: [
        'Sell-Side Advisory / Divestiture',
        'Buy-Side Advisory',
        'Financial Modeling & Valuation',
        'Transaction Optimization',
        'Deal Structuring & Financing',
        'Negotiation Support',
      ],
    },
    {
      icon: Building,
      title: 'Privatizations, PPP & Concessions',
      items: [
        'Advisory to Public Authorities',
        'Investor Support',
        'Partnership Structuring',
        'Financial Due Diligence',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Capital Markets (ECM/DCM)',
      items: [
        'Initial Public Offerings (IPOs)',
        'Capital Increases',
        'Bond Issuances',
        'Private Placements',
      ],
    },
    {
      icon: Landmark,
      title: 'Financing Structuring',
      items: [
        'Acquisition Financing (LBO)',
        'Refinancing & Restructuring',
        'Structured Finance',
        'Debt Advisory',
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
                  Our Expertise
                </span>
              </div>

              <h2
                className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 transition-all duration-700 delay-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Comprehensive solutions for your financial challenges
              </h2>

              <p
                className={`text-white/70 leading-relaxed transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                AFG provides integrated advisory services across all major financial activities, combining deep sectoral expertise with proven transaction experience.
              </p>
            </div>

            {/* Service Quick Links */}
            <div
              className={`space-y-3 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <button
                    key={service.title}
                    onClick={() => setActiveService(index)}
                    className={`w-full p-4 rounded-xl text-left transition-all ${
                      activeService === index
                        ? 'bg-gold text-navy'
                        : 'bg-white/5 border border-white/10 text-white hover:border-gold/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{service.title}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Service Details */}
          <div className="grid lg:grid-cols-3 gap-6">
            {services[activeService].items.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-gold/20 transition-all group"
              >
                <ChevronRight className="w-5 h-5 text-gold mt-0.5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                <span className="text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseEn;
