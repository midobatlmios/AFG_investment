import { Mail, Phone, MapPin } from 'lucide-react';

const FooterEn = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'About',
      links: [
        { label: 'Our Story', href: '#about' },
        { label: 'Team', href: '#team' },
        { label: 'Careers', href: '#careers' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Mergers & Acquisitions', href: '#expertise' },
        { label: 'Capital Markets', href: '#expertise' },
        { label: 'Financing', href: '#expertise' },
        { label: 'Asset Management', href: '#asset-management' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#privacy' },
        { label: 'Terms of Service', href: '#terms' },
        { label: 'Compliance', href: '#compliance' },
      ],
    },
  ];

  return (
    <footer className="relative bg-navy overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/footer-bg.gif"
        alt="footer background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/80" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid md:grid-cols-3 gap-12 mb-16 pb-12 border-b border-white/10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/images/logo-normalfinal.png"
                  alt="AFG Investment Bank Logo"
                  className="h-8 lg:h-10"
                />
                <span className="font-serif text-xl font-bold text-white">
                  AFG
                </span>
              </div>
              <p className="text-white/70 leading-relaxed">
                An independent investment bank committed to delivering exceptional results for our clients across Africa.
              </p>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 gap-8">
              {footerSections.slice(0, 2).map((section) => (
                <div key={section.title}>
                  <h4 className="font-semibold text-white mb-4">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-white/60 hover:text-gold transition-colors text-sm"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-3">
                <a
                  href="tel:+212537264747"
                  className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>+212 (0)5 37 26 47 47</span>
                </a>
                <a
                  href="mailto:contact@afggroup.ma"
                  className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>contact@afggroup.ma</span>
                </a>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Rabat, Morocco</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {footerSections[2].links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/60 hover:text-gold transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-white/60 text-sm">
                © {currentYear} AFG - Advisory & Finance Group. All rights reserved.
              </p>
              <p className="text-white/40 text-xs mt-2">
                Made with care in Rabat, Morocco
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-lg bg-gold text-navy flex items-center justify-center hover:bg-gold-light transition-all z-50 shadow-lg"
        aria-label="Scroll to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7-7m0 0L5 14m7-7v12"
          />
        </svg>
      </button>
    </footer>
  );
};

export default FooterEn;
