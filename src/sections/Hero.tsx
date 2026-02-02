import { useEffect, useRef, useState } from 'react';
import { ChevronRight, TrendingUp, Building2, Landmark } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

const backgroundImages = [
  '/images/imagefirst.jpg',
  '/images/imagesecond.jpg',
  '/images/ten.jpeg',
];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % backgroundImages.length
    );
  }, 5000);

  return () => clearInterval(interval);
}, []);

  const services = [
    { icon: TrendingUp, label: 'Conseil Financier' },
    { icon: Building2, label: 'Gestion d\'Actifs' },
    { icon: Landmark, label: 'Capital-Investissement' },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      {/* Background Images */}
<div className="absolute inset-0">
  {backgroundImages.map((image, index) => (
    <div
      key={image}
      className={`absolute inset-0 transition-opacity duration-1000 ${
        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
  ))}
  <div className="absolute inset-0 bg-black/40" />
  </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(201, 169, 98, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(201, 169, 98, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20 pt-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-sm text-white tracking-wide" style={{ color: '#ffffff' }}>
              Banque d'affaires indépendante depuis 1999
            </span>
          </div>

          {/* Main Title */}
          <h1
            className={`font-serif text-white mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Conseil et Investissement
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-12 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            AFG accompagne ses clients dans la réalisation de leurs projets
            stratégiques avec expertise, indépendance et confidentialité
          </p>

          {/* Service Cards */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {services.map((service, index) => (
              <div
                key={service.label}
                className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-gold/5 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <service.icon className="w-8 h-8 text-gold mb-3 mx-auto group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-white/90">
                  {service.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="#expertise"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#expertise')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group flex items-center gap-2 px-8 py-4 bg-white text-navy font-semibold rounded-lg hover:bg-white transition-all hover:shadow-white"
            >
              Découvrir nos services
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 border border-white/30 text-white font-medium rounded-lg hover:border-white hover:text-white transition-all"
            >
              Prendre rendez-vous
            </a>
          </div>
        </div>
      </div>
      {/* Navigation Arrows */}
<button
  onClick={() => setCurrentImageIndex((prev) => 
    prev === 0 ? backgroundImages.length - 1 : prev - 1
  )}
  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 transition-all"
>
  <ChevronRight className="w-6 h-6 text-white rotate-180" />
</button>

<button
  onClick={() => setCurrentImageIndex((prev) => 
    (prev + 1) % backgroundImages.length
  )}
  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 transition-all"
>
  <ChevronRight className="w-6 h-6 text-white" />
</button>
    </section>
  );
};

export default Hero;
