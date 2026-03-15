import { Instagram, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router';

const logo = '/logo.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'À propos', href: '/a-propos' },
    { label: 'Nos machines', href: '/machines' },
    { label: 'Emplacements', href: '/emplacements' },
  ];
  const services = ['Installation', 'Maintenance', 'Support technique', 'Approvisionnement'];

  return (
    <footer className="bg-primary text-white py-16 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-12">
          <div className="md:col-span-1 space-y-6">
            <img src={logo} alt="Confandi" className="h-10 w-auto" />
            <p className="text-white/80 font-light leading-relaxed">
              L'expérience café premium en libre-service sur le campus Concordia.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-300" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-300" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 font-medium">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-white/80 hover:text-white transition-colors font-light">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-medium">Services</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item}>
                  <Link to="/contact" className="text-white/80 hover:text-white transition-colors font-light">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-medium">Contact</h4>
            <ul className="space-y-4 font-light">
              <li>
                <a href="mailto:info@confandi.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <Mail size={16} className="text-white" />
                  info@confandi.com
                </a>
              </li>
              <li className="text-white/80">
                Montréal, Québec<br />Canada
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm font-light">© {currentYear} Confandi. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 text-sm hover:text-white transition-colors font-light">Politique de confidentialité</a>
              <a href="#" className="text-white/60 text-sm hover:text-white transition-colors font-light">Conditions d'utilisation</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}