import { useEffect, useRef, useState } from 'react';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';

const AboutEn = () => {
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
    { icon: Award, value: '25+', label: 'Years of Expertise' },
    { icon: Users, value: '100+', label: 'Clients Served' },
    { icon: Globe, value: '3', label: 'Regional Offices' },
    { icon: TrendingUp, value: '50+', label: 'Major Transactions' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50" />

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
                  Who We Are
                </span>
              </div>

              {/* Title */}
              <h2
                className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 transition-all duration-700 delay-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                A leading player in the{' '}
                <span className="text-gradient-gold">financial market</span>
              </h2>

              {/* Description */}
              <div
                className={`space-y-4 text-gray-600 leading-relaxed transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <p>
                  Advisory & Finance Group (AFG) is an independent investment bank specializing in financial advisory and management of investment vehicles.
                </p>
                <p>
                  Founded in 1999, AFG quickly gained recognition in landmark financial advisory operations (privatizations, mergers & acquisitions, joint ventures, partnerships, etc.), as well as in capital markets.
                </p>
                <p>
                  Drawing on quality human and intellectual capital, AFG has successfully expanded its scope to private equity and asset management operations.
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
                  className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors group"
                >
                  <span className="font-medium">Discover Our Expertise</span>
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

export default AboutEn;
