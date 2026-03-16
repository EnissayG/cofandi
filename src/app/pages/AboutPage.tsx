import { Target, Heart, Lightbulb, Users, Award, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';
import { SectionWave } from '../components/SectionWave';

export function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-primary to-primary/90">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-6 py-3 mb-6">
            <Users size={20} className="text-white" />
            <span className="text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}>
              À propos de Cofandi
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
            Notre Histoire
          </h1>
          <p 
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
          >
            Révolutionner l'expérience café en libre-service avec élégance et technologie
          </p>
        </div>
      </section>

      <SectionWave className="text-white" />

      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full">
                <Target size={24} className="text-primary" />
                <span 
                  className="text-primary"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                >
                  Notre Mission
                </span>
              </div>
              <h2 
                className="text-3xl md:text-4xl"
                style={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  fontWeight: 600,
                  color: 'primary'
                }}
              >
                Rendre le café premium accessible à tous
              </h2>
              <p 
                className="text-lg text-gray-600 leading-relaxed"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
              >
                Chez Cofandi, nous croyons que chacun mérite d'avoir accès à des boissons de qualité exceptionnelle, 
                peu importe où il se trouve. Notre mission est de transformer les espaces communs en destinations café haut de gamme.
              </p>
              <p 
                className="text-lg text-gray-600 leading-relaxed"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
              >
                Nous combinons design élégant, technologie de pointe et service impeccable pour créer une expérience 
                utilisateur exceptionnelle qui dépasse les attentes.
              </p>
            </div>
            <div className="bg-gray-50 rounded-[32px] p-12 space-y-8">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart size={32} className="text-primary" />
                </div>
                <h3 
className="text-xl font-medium text-primary"
                >
                  Passion pour la qualité
                </h3>
                <p 
                  className="text-gray-600"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
                >
                  Chaque tasse servie répond aux plus hauts standards de qualité, utilisant des ingrédients premium soigneusement sélectionnés.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Lightbulb size={32} className="text-primary" />
                </div>
                <h3 
className="text-xl font-medium text-primary"
                >
                  Innovation continue
                </h3>
                <p 
                  className="text-gray-600"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
                >
                  Nous investissons constamment dans les dernières technologies pour améliorer l'expérience utilisateur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-gray-50">
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
              Nos Valeurs
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
            >
              Les principes qui guident chacune de nos décisions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'Nous ne faisons aucun compromis sur la qualité de nos produits et services.'
              },
              {
                title: 'Accessibilité',
                description: 'Rendre le café premium accessible partout où les gens vivent, travaillent et étudient.'
              },
              {
                title: 'Durabilité',
                description: 'Un engagement envers des pratiques respectueuses de l\'environnement et responsables.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-[28px] p-8 shadow-sm hover:shadow-lg transition-shadow">
                <h3 
className="text-2xl mb-4 font-semibold text-primary"
                >
                  {value.title}
                </h3>
                <p 
                  className="text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full mb-6">
              <Users size={24} className="text-primary" />
              <span 
                className="text-primary"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
              >
                Notre Équipe
              </span>
            </div>
            <h2 
              className="text-3xl md:text-4xl mb-6"
              style={{ 
                fontFamily: 'Poppins, sans-serif', 
                fontWeight: 600,
                color: 'primary'
              }}
            >
              Une équipe passionnée et dévouée
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
            >
              Experts en technologie, en café et en service client, unis par une vision commune : 
              offrir la meilleure expérience café possible.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/90 rounded-[32px] p-12 md:p-16 text-center">
            <p 
              className="text-2xl md:text-3xl text-white mb-8"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
            >
              "Notre équipe travaille sans relâche pour garantir que chaque interaction avec Cofandi 
              soit mémorable et exceptionnelle."
            </p>
            <p 
              className="text-xl text-white/80"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
            >
              L'équipe Cofandi
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
