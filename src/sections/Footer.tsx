import { Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { label: 'À propos', href: '#about' },
        { label: 'Expertise', href: '#expertise' },
        { label: 'Capital-Investissement', href: '#investment' },
        { label: 'Équipes', href: '#teams' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Conseil Financier', href: '#expertise' },
        { label: 'Fusions-Acquisitions', href: '#expertise' },
        { label: 'Marchés de Capitaux', href: '#expertise' },
        { label: 'Gestion d\'Actifs', href: '#expertise' },
      ],
    },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#') {
      scrollToTop();
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t  overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/footerd.gif"
        alt="footer background"
        className="absolute inset-0 w-full h-full "
      />
      
      {/* Main Footer */}
      <div className="relative w-full px-6 lg:px-12 xl:px-20 py-16 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              

              <p className="text-white/60 leading-relaxed mb-6 max-w-md">
                Banque d'affaires indépendante spécialisée dans le conseil financier
                et la gestion de véhicules d'investissement depuis 1999.
              </p>

              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/company/afg-investment-bank/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-gold/20 transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-white/60 group-hover:text-gold transition-colors" />
                </a>
                <a
                  href="mailto:contact@afginvestmentbank.com"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-gold/20 transition-colors group"
                >
                  <Mail className="w-5 h-5 text-white/60 group-hover:text-gold transition-colors" />
                </a>
              </div>
            </div>

            {/* Links */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="font-serif text-lg font-semibold text-white mb-6">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => scrollToSection(e, link.href)}
                        className="text-white/60 hover:text-gold transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/5 z-10">
        <div className="w-full px-6 lg:px-12 xl:px-20 py-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center sm:text-left">
              Copyright © {currentYear} ADVISORY & FINANCE GROUP S.A. Tous droits réservés.
            </p>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors group"
            >
              <span className="text-sm">Retour en haut</span>
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <ArrowUp className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
