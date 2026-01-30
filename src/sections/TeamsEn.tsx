import { useEffect, useRef, useState } from 'react';
import { Users, Award, GraduationCap, Heart, Mail } from 'lucide-react';

const TeamsEn = () => {
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

  const strengths = [
    {
      icon: Users,
      title: 'Talented Professionals',
      description: 'Highly involved in achieving each transaction',
    },
    {
      icon: Award,
      title: 'Multisectoral Expertise',
      description: 'In-depth knowledge of the industrial and services world',
    },
    {
      icon: GraduationCap,
      title: 'Excellence Training',
      description: 'To the highest international standards',
    },
    {
      icon: Heart,
      title: 'Total Commitment',
      description: 'Exclusively at the service of our clients and partners',
    },
  ];

  return (
    <section
      id="teams"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

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
                Our Teams
              </span>
              <div className="w-12 h-px bg-gold" />
            </div>

            <h2
              className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 max-w-4xl mx-auto transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Experienced <span className="text-gradient-gold">teams</span> at the service
              of our clients & partners
            </h2>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left - Human Capital Card */}
            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              <div className="relative p-8 lg:p-10 rounded-3xl bg-gray-50 border border-gray-200">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold/20 rounded-full blur-2xl" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center">
                      <Users className="w-8 h-8 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-navy">
                        Our Human Capital
                      </h3>
                      <p className="text-gold text-sm">Excellence at the heart of our business</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {strengths.map((strength) => (
                      <div
                        key={strength.title}
                        className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:border-gold/20 transition-all group"
                      >
                        <strength.icon className="w-5 h-5 text-gold mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <div>
                          <h4 className="font-medium text-navy mb-1">{strength.title}</h4>
                          <p className="text-sm text-gray-600">{strength.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Join Us */}
            <div
              className={`transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
            >
              <div className="text-center lg:text-left">
                <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-navy mb-4">
                  Join our team
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Are you passionate about corporate finance and want to evolve in a stimulating
                  environment? AFG is looking for talent to strengthen its teams.
                </p>

                <div className="p-6 rounded-2xl bg-gray-50 border border-gold/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-5 h-5 text-gold" />
                    <span className="text-gray-600 text-sm">Send your application</span>
                  </div>
                  <a
                    href="mailto:joinfg@afginvestmentbank.com"
                    className="text-gold hover:text-gold-light transition-colors font-medium break-all"
                  >
                    joinfg@afginvestmentbank.com
                  </a>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <div className="font-serif text-2xl font-bold text-gold mb-1">40+</div>
                    <div className="text-xs text-gray-600">Collaborators</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <div className="font-serif text-2xl font-bold text-gold mb-1">8</div>
                    <div className="text-xs text-gray-600">Nationalities</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <div className="font-serif text-2xl font-bold text-gold mb-1">15+</div>
                    <div className="text-xs text-gray-600">Years average</div>
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

export default TeamsEn;
