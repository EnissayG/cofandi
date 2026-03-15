import { Instagram, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router';
import logo from 'figma:asset/b7ec7fdfcd8637e0209af3852c2e68f9d38597e8.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2A3B8F] text-white py-16 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-6">
            <div>
              <img 
                src={logo} 
                alt="Confandi" 
                className="h-10 w-auto"
              />
            </div>
            <p 
              className="text-white/80 leading-relaxed"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
            >
              L'expérience café premium en libre-service sur le campus Concordia.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#2A3B8F] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#2A3B8F] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 
              className="mb-6 text-white"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Accueil', href: '/' },
                { label: 'À propos', href: '/a-propos' },
                { label: 'Nos machines', href: '/machines' },
                { label: 'Emplacements', href: '/emplacements' },
              ].map((item) => (
                <li key={item.href}>
                  <Link 
                    to={item.href}
                    className="text-white/80 hover:text-white transition-colors"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 
              className="mb-6 text-white"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {['Installation', 'Maintenance', 'Support technique', 'Approvisionnement'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/contact"
                    className="text-white/80 hover:text-white transition-colors"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 
              className="mb-6 text-white"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:info@confandi.com"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
                >
                  <Mail size={16} className="text-white" />
                  info@confandi.com
                </a>
              </li>
              <li className="text-white/80" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}>
                Montréal, Québec<br />
                Canada
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p 
              className="text-white/60 text-sm"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
            >
              © {currentYear} Confandi. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <a 
                href="#" 
                className="text-white/60 text-sm hover:text-white transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
              >
                Politique de confidentialité
              </a>
              <a 
                href="#" 
                className="text-white/60 text-sm hover:text-white transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
              >
                Conditions d'utilisation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}