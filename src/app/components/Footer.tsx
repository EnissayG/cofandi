import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router';
import { asset } from '../utils/asset';
import { useI18n } from '../../i18n/I18nProvider';

const logo = asset('logo.png');

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useI18n();

  const footerLinks = [
    { labelKey: 'nav.home', href: '/' },
    { labelKey: 'nav.about', href: '/a-propos' },
    { labelKey: 'nav.machines', href: '/machines' },
    { labelKey: 'nav.locations', href: '/emplacements' },
  ];
  const serviceKeys = ['footer.s1', 'footer.s2', 'footer.s3', 'footer.s4'] as const;

  return (
    <footer className="bg-primary text-white py-16 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-12">
          <div className="md:col-span-1 space-y-6">
            <img src={logo} alt="Cofandi" className="h-10 w-auto" />
            <p className="text-white/80 font-light leading-relaxed">{t('footer.tagline')}</p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/cofandiservice/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://fr.linkedin.com/posts/yann-kedja-91506227a_les-machines-distributrices-cofandi-pour-activity-7388455950883536896-FtlY"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 font-medium">{t('footer.navigation')}</h4>
            <ul className="space-y-3">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-white/80 hover:text-white transition-colors font-light">
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-medium">{t('footer.services')}</h4>
            <ul className="space-y-3">
              {serviceKeys.map((key) => (
                <li key={key}>
                  <Link to="/contact" className="text-white/80 hover:text-white transition-colors font-light">
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-medium">{t('footer.contact')}</h4>
            <ul className="space-y-4 font-light">
              <li>
                <a
                  href="mailto:info@cofandiservice.com"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                >
                  <Mail size={16} className="text-white" />
                  info@cofandiservice.com
                </a>
              </li>
              <li>
                <a href="tel:+15145604627" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <Phone size={16} className="text-white" />
                  (514) 560-4627
                </a>
              </li>
              <li className="text-white/80">
                {t('footer.montreal')}
                <br />
                {t('footer.canada')}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm font-light">
              © {currentYear} Cofandi. {t('footer.rights')}
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 text-sm hover:text-white transition-colors font-light">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-white/60 text-sm hover:text-white transition-colors font-light">
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
