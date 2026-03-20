import { Coffee, CreditCard, Smartphone, Droplet, Zap, Shield, ChevronDown } from 'lucide-react';
import { Link } from 'react-router';
import { asset } from '../utils/asset';
import { SectionWave } from '../components/SectionWave';
import React, { useState } from 'react';

const machineFullImage = asset('machine-full.png');
const interfaceImage = asset('machine-interface.png');
const closeupImage = asset('machine-closeup.png');

export function MachinesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faq = [
    {
      q: "1. Combien coûte l'installation d'une machine Cofandi ?",
      a: "L'installation, l'entretien et le réapprovisionnement sont entièrement pris en charge par Cofandi. Quelques conditions peuvent s'appliquer."
    },
    {
      q: '2. Quelles boissons sont disponibles ?',
      bullets: [
        'Espresso simple & double',
        'Café allongé',
        'Latte, cappuccino, mocha',
        'Vanille française',
        'Matcha et chai (sur machines compatibles)',
        'Options chaudes et froides selon le modèle'
      ]
    },
    {
      q: "3. Qui s'occupe de l'entretien ?",
      a: "Nous assurons l'entretien régulier, le nettoyage et la maintenance."
    },
    {
      q: "4. Que faire en cas de panne ?",
      a: "Un numéro d'assistance est affiché sur la machine. Notre équipe intervient rapidement pour toute défaillance technique ou réclamation."
    },
    {
      q: '5. Quels types de paiements sont acceptés ?',
      a: "Les machines acceptent les paiements sans contact (carte bancaire, téléphone, smartwatch), via le système sécurisé Nayax."
    },
    {
      q: '6. Peut-on générer des revenus avec la machine ?',
      a: "Oui. Selon l'entente, un partage des revenus peut être offert à l'établissement en fonction des ventes réalisées."
    },
    {
      q: "7. Peut-on personnaliser la machine ?",
      a: "Absolument. Il est possible d’y afficher votre logo ou d’utiliser l’écran pour des annonces internes, événements ou promotions."
    },
    {
      q: '9. Quel est l’espace requis pour installer une machine ?',
      a: "Nos machines nécessitent une prise électrique standard (120V) et, selon le modèle, un accès à une source d’eau. L’installation est rapide (moins d’une journée). Certaines conditions s’appliquent."
    }
  ] as const;

  return (
    <div className="pt-32 pb-20">
      <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-primary to-primary/90">
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

      <SectionWave className="text-white" />

      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2 rounded-[32px] overflow-hidden shadow-xl">
              <img
                src={machineFullImage}
                alt="Machine Cofandi - vue complète"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-8">
              <div className="rounded-[28px] overflow-hidden shadow-lg">
                <img
                  src={interfaceImage}
                  alt="Détail de l'interface Cofandi"
                  className="w-full h-[240px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-[28px] overflow-hidden shadow-lg">
                <img
                  src={closeupImage}
                  alt="Café premium Cofandi"
                  className="w-full h-[240px] object-cover"
                  loading="lazy"
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
                color: 'primary'
              }}
            >
              Technologie et Innovation
            </h2>
            <p 
              className="text-xl text-gray-600 text-center max-w-3xl mx-auto"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
            >
              Chaque machine Cofandi est équipée des dernières technologies pour garantir 
              qualité, rapidité et facilité d'utilisation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 
            className="text-3xl md:text-4xl text-center mb-16"
            style={{ 
              fontFamily: 'Poppins, sans-serif', 
              fontWeight: 600,
              color: 'primary'
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
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon size={32} className="text-primary" />
                </div>
                <h3 
className="text-xl mb-4 font-semibold text-primary"
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

      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl mb-6"
              style={{ 
                fontFamily: 'Poppins, sans-serif', 
                fontWeight: 600,
                color: 'primary'
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
                className="bg-gray-50 rounded-[20px] px-6 py-4 text-center hover:bg-primary/10 transition-colors cursor-pointer"
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

      <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-primary to-primary/90">
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
            d'une machine Cofandi dans votre établissement.
          </p>
          <Link 
            to="/contact"
            className="inline-block px-12 py-4 bg-white text-primary rounded-[28px] hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
          >
            Demander une démo
          </Link>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl mb-6 font-semibold text-primary"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              FAQ Machines Cofandi
            </h2>
            <p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
            >
              Les réponses aux questions les plus fréquentes sur l’installation, l’utilisation et le service.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faq.map((item, index) => {
              const open = openFaqIndex === index;
              return (
                <div key={item.q} className="rounded-[28px] border border-gray-100 bg-gray-50 overflow-hidden">
                  <button
                    type="button"
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                    onClick={() => setOpenFaqIndex(open ? null : index)}
                  >
                    <span className="text-primary font-medium">{item.q}</span>
                    <ChevronDown
                      size={22}
                      className={`text-primary transition-transform ${open ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ${
                      open
                        ? 'max-h-[320px] pb-5 opacity-100'
                        : 'max-h-0 pb-0 opacity-0'
                    }`}
                  >
                    {('bullets' in item && item.bullets) ? (
                      <ul className="list-disc pl-6 text-gray-600 font-light leading-relaxed space-y-2">
                        {item.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    ) : (
                      'a' in item ? (
                        <p className="text-gray-600 font-light leading-relaxed">{item.a}</p>
                      ) : null
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
