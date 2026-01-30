import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';

const FounderMessageEn = () => {
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
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-sm font-medium tracking-wider uppercase">
              Founder's Message
            </span>
            <div className="w-12 h-px bg-gold" />
          </div>

          {/* Quote Card */}
          <div
            className={`relative p-8 lg:p-12 rounded-3xl bg-navy border border-white/10 transition-all duration-700 delay-200 z-20 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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
                  Dear friends, clients and partners,
                </p>
                <p
                  className={`transition-all duration-700 delay-400 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  Over the past quarter-century, the Kingdom of Morocco has confirmed its commitment to strengthening and diversifying its economic fabric, as well as its determination to pursue significant transformation to position itself as an economic and financial hub at the crossroads of continents.
                </p>
                <p
                  className={`transition-all duration-700 delay-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  Ambitious policies have been implemented to consolidate macroeconomic fundamentals and drive substantial regulatory and institutional reforms.
                </p>
                <p
                  className={`transition-all duration-700 delay-600 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  It is in this context that, through the expertise of AFG's teams and their know-how, we accompany our clients and partners with complete independence and confidentiality in achieving their projects, offering them, in line with their interests, a complete range of premium services in financial advisory and investment.
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
                  <div className="text-gold text-sm">Founder & Chairman</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessageEn;
