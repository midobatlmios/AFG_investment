import { useEffect, useRef, useState } from 'react';
import { Shield, Users2, Lightbulb } from 'lucide-react';

const ValuesEn = () => {
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
      title: 'Independence & Confidentiality',
      description:
        "AFG is not affiliated with any financial institution, avoiding any conflict of interest and prioritizing the sole interest of its clients and partners. Respecting confidentiality is a key success factor in any operation, and our teams are committed to maintaining strict professional secrecy.",
    },
    {
      icon: Users2,
      title: 'Commitment & Professionalism',
      description:
        "Known for their rigor and efficiency, our teams are constantly available and fully committed to the success of the mandate entrusted to them. Armed with multisector expertise, they demonstrate training to the highest international standards.",
    },
    {
      icon: Lightbulb,
      title: 'Creativity & Innovation',
      description:
        "Constantly seeking innovation and always concerned with providing refined and quality services, AFG's teams stand out for their ability to approach and handle complex or demanding operations.",
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
                Our Values
              </span>
              <div className="w-12 h-px bg-gold" />
            </div>

            <h2
              className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy max-w-3xl mx-auto transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              They guide us and commit us
            </h2>

            <p
              className={`mt-4 text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Our core values guide every action and define our relationship with our clients and partners.
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

export default ValuesEn;
