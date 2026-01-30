import { useEffect, useRef, useState } from 'react';
import { PieChart, TrendingUp, Shield, ExternalLink } from 'lucide-react';

const AssetManagementEn = () => {
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

  const features = [
    {
      icon: Shield,
      title: 'Capital Preservation',
      description: 'Ensure the preservation of capital entrusted to us',
    },
    {
      icon: TrendingUp,
      title: 'Performance',
      description: 'Generate returns on investments based on set objectives',
    },
    {
      icon: PieChart,
      title: 'Diversification',
      description: 'Wide range of funds covering all asset classes',
    },
  ];

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

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div
                className={`flex items-center gap-3 mb-6 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
              >
                <div className="w-12 h-px bg-gold" />
                <span className="text-gold text-sm font-medium tracking-wider uppercase">
                  Asset Management
                </span>
              </div>

              <h2
                className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 transition-all duration-700 delay-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                AFG <span className="text-gradient-gold">Asset Management</span>
              </h2>

              <p
                className={`text-white/70 leading-relaxed mb-8 transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Through its subsidiary AFG Asset Management, AFG offers asset management solutions for third parties. Its main mission is to ensure the preservation of capital entrusted to it and to generate returns in line with the performance objectives set by its clients.
              </p>

              {/* Features */}
              <div
                className={`space-y-4 mb-8 transition-all duration-700 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-navy-light border border-white/5 hover:border-gold/20 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <feature.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">{feature.title}</h4>
                      <p className="text-sm text-white/60">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div
                className={`transition-all duration-700 delay-400 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <a
                  href="http://www.afgassetmanagement.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-all group"
                >
                  Visit AFG Asset Management
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Content - Visual */}
            <div
              className={`relative transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
            >
              <div className="relative p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-navy-light to-navy border border-white/10">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                      <PieChart className="w-10 h-10 text-navy" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-white mb-2">
                      Professional Management
                    </h3>
                    <p className="text-white/60">
                      A rigorous and personalized approach
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-navy border border-white/5 text-center">
                      <div className="font-serif text-2xl font-bold text-gold mb-1">
                        15+
                      </div>
                      <div className="text-xs text-white/60">Funds Managed</div>
                    </div>
                    <div className="p-4 rounded-xl bg-navy border border-white/5 text-center">
                      <div className="font-serif text-2xl font-bold text-gold mb-1">
                        5Bn+
                      </div>
                      <div className="text-xs text-white/60">DH Under Management</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssetManagementEn;
