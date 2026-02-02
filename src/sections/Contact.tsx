import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Linkedin, Clock } from 'lucide-react';

const Contact = () => {
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

  const offices = [
    {
      city: 'Rabat',
      address: '2, rue Honaïn, Agdal - 10.080',
      phone: '+212 (0) 537 67 40 23 / 27',
      isMain: true,
    },
    {
      city: 'Casablanca',
      address: '3, Bd Al Massira Al Khadra - 20.330',
      phone: '+212 (0) 522 05 12 12',
      isMain: false,
    },
  ];

  return (
    <section
      id="contact"
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
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
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
              <div className="w-12 h-px bg-white" />
              <span className="text-white text-sm font-medium tracking-wider uppercase">
                Contact
              </span>
              <div className="w-12 h-px bg-white" />
            </div>

            <h2
              className={`font-serif text-white mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            >
              Restons en contact
            </h2>

            <p
              className={`text-white/60 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Notre équipe est à votre disposition pour discuter de vos projets et vous
              accompagner dans la réalisation de vos objectifs.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div
              className={`lg:col-span-1 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="p-8 rounded-2xl bg-navy-light border border-white/10 h-full">
                <h3 className="font-serif text-xl font-semibold text-white mb-6">
                  Informations de contact
                </h3>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">Email</p>
                      <a
                        href="mailto:contact@afginvestmentbank.com"
                        className="text-white hover:text-gold transition-colors"
                      >
                        contact@afginvestmentbank.com
                      </a>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/company/afg-investment-bank/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gold transition-colors"
                      >
                        AFG Investment Bank
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">Horaires</p>
                      <p className="text-white">Lun - Ven : 9h00 - 18h00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Offices */}
            {offices.map((office, index) => (
              <div
                key={office.city}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${0.4 + index * 0.15}s` }}
              >
                <div className="relative p-8 rounded-2xl bg-navy-light border border-white/10 hover:border-gold/30 transition-all h-full group">
                  {office.isMain && (
                    <div className="absolute -top-3 left-8 px-3 py-1 bg-gold text-navy text-xs font-semibold rounded">
                      Siège Social
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <MapPin className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-white">
                      {office.city}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gold/60 mt-0.5 flex-shrink-0" />
                      <p className="text-white/70">{office.address}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-gold/60 flex-shrink-0" />
                      <a
                        href={`tel:${office.phone.replace(/\s/g, '')}`}
                        className="text-white/70 hover:text-gold transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>
                  </div>

                  {/* Decorative */}
                  <div className="absolute bottom-4 right-4 w-16 h-16 bg-gold/5 rounded-full blur-xl group-hover:bg-gold/10 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
