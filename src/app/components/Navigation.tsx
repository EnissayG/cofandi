import { Menu, X } from 'lucide-react';
import { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router';
import { asset } from '../utils/asset';
import { useI18n } from '../../i18n/I18nProvider';
import { LanguageSwitcher } from '../../i18n/LanguageSwitcher';

const logo = asset('logo.png');

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useI18n();

  const navLinks = useMemo(
    () =>
      [
        { href: '/', key: 'nav.home' },
        { href: '/a-propos', key: 'nav.about' },
        { href: '/machines', key: 'nav.machines' },
        { href: '/emplacements', key: 'nav.locations' },
      ] as const,
    []
  );

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-5">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center shrink-0">
            <img src={logo} alt="Cofandi" className="h-10 md:h-12 w-auto" fetchPriority="high" />
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`transition-all duration-300 ${isActive(link.href) ? 'text-white border-b-2 border-white pb-1 font-medium' : 'text-white/70 hover:text-white/90 font-light'}`}
              >
                {t(link.key)}
              </Link>
            ))}
            <LanguageSwitcher />
            <Link
              to="/contact"
              className={`px-6 lg:px-8 py-3 rounded-[28px] transition-all duration-300 shadow-sm hover:shadow-md font-medium whitespace-nowrap ${isActive('/contact') ? 'bg-white text-primary ring-2 ring-white/50' : 'bg-white text-primary hover:bg-gray-100'}`}
            >
              {t('nav.contact')}
            </Link>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher />
            <button
              className="text-white p-2"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pt-6 pb-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 transition-colors ${isActive(link.href) ? 'text-white border-l-4 border-white pl-4 font-medium' : 'text-white/70 hover:text-white/90 pl-4 font-light'}`}
              >
                {t(link.key)}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full px-8 py-3 rounded-[28px] transition-all duration-300 text-center font-medium ${isActive('/contact') ? 'bg-white text-primary ring-2 ring-white/50' : 'bg-white text-primary hover:bg-gray-100'}`}
            >
              {t('nav.contact')}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
