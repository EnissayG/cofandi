import { Sparkles, Clock, Shield, Coffee, BadgeCheck } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Qualité premium',
    description: 'Des boissons préparées avec des ingrédients de première qualité pour une expérience gustative exceptionnelle.'
  },
  {
    icon: Clock,
    title: 'Rapidité et simplicité',
    description: 'Obtenez votre boisson en quelques secondes grâce à notre interface intuitive et notre technologie avancée.'
  },
  {
    icon: Shield,
    title: 'Fiabilité garantie',
    description: 'Un service disponible 24/7 avec un entretien régulier et un support technique réactif.'
  },
  {
    icon: BadgeCheck,
    title: 'Fairtrade',
    description: 'Un café issu du commerce équitable, pour un impact positif tout au long de la chaîne d’approvisionnement.'
  },
  {
    icon: Coffee,
    title: 'Large sélection',
    description: 'Du café classique aux boissons spécialisées, découvrez une variété adaptée à tous les goûts.'
  }
];

export function WhyCofandi() {
  return (
    <section id="pourquoi" className="py-24 md:py-32 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-6 leading-tight">
            Pourquoi choisir Cofandi ?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
            Une expérience pensée pour répondre aux besoins des environnements modernes et exigeants.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 items-stretch">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 rounded-[28px] bg-white border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon size={28} className="text-primary" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-xl font-medium text-primary mb-4">{feature.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed mt-auto">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
