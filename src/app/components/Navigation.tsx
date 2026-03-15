import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import logo from 'figma:asset/b7ec7fdfcd8637e0209af3852c2e68f9d38597e8.png';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/a-propos', label: 'À propos' },
    { href: '/machines', label: 'Nos machines' },
    { href: '/emplacements', label: 'Emplacements' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2A3B8F] shadow-lg">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Confandi" 
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`transition-all duration-300 ${
                  isActive(link.href) 
                    ? 'text-white border-b-2 border-white pb-1' 
                    : 'text-white/70 hover:text-white/90'
                }`}
                style={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  fontWeight: isActive(link.href) ? 500 : 300 
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/contact"
              className={`px-8 py-3 rounded-[28px] transition-all duration-300 shadow-sm hover:shadow-md ${
                isActive('/contact')
                  ? 'bg-white text-[#2A3B8F] ring-2 ring-white/50'
                  : 'bg-white text-[#2A3B8F] hover:bg-gray-100'
              }`}
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
            >
              Contactez-nous
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-6 pb-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 transition-colors ${
                  isActive(link.href)
                    ? 'text-white border-l-4 border-white pl-4'
                    : 'text-white/70 hover:text-white/90 pl-4'
                }`}
                style={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  fontWeight: isActive(link.href) ? 500 : 300 
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full px-8 py-3 rounded-[28px] transition-all duration-300 text-center ${
                isActive('/contact')
                  ? 'bg-white text-[#2A3B8F] ring-2 ring-white/50'
                  : 'bg-white text-[#2A3B8F] hover:bg-gray-100'
              }`}
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
            >
              Contactez-nous
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}