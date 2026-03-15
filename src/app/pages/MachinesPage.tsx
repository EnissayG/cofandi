import { Coffee, CreditCard, Smartphone, Droplet, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router';
import machineFullImage from 'figma:asset/377ff176bfe70b1e2f92e4692b49909aed25b084.png';
import interfaceImage from 'figma:asset/5716e2c17b0aefb43be3a9ebe4449c2f9911eb66.png';
import closeupImage from 'figma:asset/029e86b895224b44e971ed5dc7a466fbeb427a2e.png';

export function MachinesPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-[#2A3B8F] to-[#1f2d6b]">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-6 py-3 mb-6">
            <Coffee size={20} className="text-white" />
            <span className="text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}>
              Nos Machines
            </span>
          </div>
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white"
            style={{ 
              fontFamily: 'Poppins, sans-serif', 
              fontWeight: 600,
              lineHeight: 1.2
            }}
          >
            Technologie & Design Premium
          </h1>
          <p 
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
          >
            Design élégant rencontre technologie de pointe pour une expérience café incomparable
          </p>
        </div>
      </section>

      {/* Machine Gallery */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2 rounded-[32px] overflow-hidden shadow-xl">
              <img 
                src={machineFullImage}
                alt="Machine Confandi - vue complète"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="rounded-[28px] overflow-hidden shadow-lg">
                <img 
                  src={interfaceImage}
                  alt="Détail de l'interface Confandi"
                  className="w-full h-[240px] object-cover"
                />
              </div>
              <div className="rounded-[28px] overflow-hidden shadow-lg">
                <img 
                  src={closeupImage}
                  alt="Café premium Confandi"
                  className="w-full h-[240px] object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 
              className="text-3xl md:text-4xl text-center"
              style={{ 
                fontFamily: 'Poppins, sans-serif', 
                fontWeight: 600,
                color: '#2A3B8F'
              }}
            >
              Technologie et Innovation
            </h2>
            <p 
              className="text-xl text-gray-600 text-center max-w-3xl mx-auto"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
            >
              Chaque machine Confandi est équipée des dernières technologies pour garantir 
              qualité, rapidité et facilité d'utilisation.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 
            className="text-3xl md:text-4xl text-center mb-16"
            style={{ 
              fontFamily: 'Poppins, sans-serif', 
              fontWeight: 600,
              color: '#2A3B8F'
            }}
          >
            Caractéristiques Principales
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Coffee,
                title: 'Qualité Barista',
                description: 'Système d\'extraction professionnel pour un café digne des meilleurs cafés.'
              },
              {
                icon: CreditCard,
                title: 'Paiement Sans Contact',
                description: 'Accepte cartes bancaires, Apple Pay, Google Pay et paiements mobiles.'
              },
              {
                icon: Smartphone,
                title: 'Interface Tactile HD',
                description: 'Écran tactile haute définition intuitif et facile à utiliser.'
              },
              {
                icon: Droplet,
                title: 'Système de Filtration',
                description: 'Eau purifiée et filtrée pour un goût optimal à chaque tasse.'
              },
              {
                icon: Zap,
                title: 'Service Rapide',
                description: 'Préparation rapide sans compromis sur la qualité - moins de 60 secondes.'
              },
              {
                icon: Shield,
                title: 'Maintenance Préventive',
                description: 'Entretien régulier et surveillance à distance pour une fiabilité maximale.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-[28px] p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-[#2A3B8F]/10 flex items-center justify-center mb-6">
                  <feature.icon size={32} className="text-[#2A3B8F]" />
                </div>
                <h3 
                  className="text-xl mb-4"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, color: '#2A3B8F' }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beverage Options */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl mb-6"
              style={{ 
                fontFamily: 'Poppins, sans-serif', 
                fontWeight: 600,
                color: '#2A3B8F'
              }}
            >
              Large Sélection de Boissons
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
            >
              Du café classique aux boissons spécialisées, trouvez votre préférence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Espresso',
              'Americano',
              'Cappuccino',
              'Latte',
              'Macchiato',
              'Mocha',
              'Café Glacé',
              'Chocolat Chaud'
            ].map((beverage, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-[20px] px-6 py-4 text-center hover:bg-[#2A3B8F]/10 transition-colors cursor-pointer"
              >
                <p 
                  className="text-gray-700"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                >
                  {beverage}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-[#2A3B8F] to-[#1f2d6b]">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 
            className="text-3xl md:text-4xl mb-6 text-white"
            style={{ 
              fontFamily: 'Poppins, sans-serif', 
              fontWeight: 600
            }}
          >
            Intéressé par nos machines ?
          </h2>
          <p 
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
          >
            Contactez-nous pour une démonstration ou pour discuter de l'installation 
            d'une machine Confandi dans votre établissement.
          </p>
          <Link 
            to="/contact"
            className="inline-block px-12 py-4 bg-white text-[#2A3B8F] rounded-[28px] hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
          >
            Demander une démo
          </Link>
        </div>
      </section>
    </div>
  );
}