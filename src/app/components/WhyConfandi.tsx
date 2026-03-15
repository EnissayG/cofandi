import { Sparkles, Clock, Shield, Coffee } from 'lucide-react';

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
    icon: Coffee,
    title: 'Large sélection',
    description: 'Du café classique aux boissons spécialisées, découvrez une variété adaptée à tous les goûts.'
  }
];

export function WhyConfandi() {
  return (
    <section id="pourquoi" className="py-24 md:py-32 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl mb-6"
            style={{ 
              fontFamily: 'Poppins, sans-serif', 
              fontWeight: 600, 
              color: '#2A3B8F',
              lineHeight: 1.2
            }}
          >
            Pourquoi choisir Confandi ?
          </h2>
          <p 
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
          >
            Une expérience pensée pour répondre aux besoins des environnements modernes et exigeants.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-[28px] bg-white border border-gray-100 hover:border-[#2A3B8F]/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#2A3B8F]/10 flex items-center justify-center group-hover:bg-[#2A3B8F]/20 transition-colors">
                  <feature.icon size={28} className="text-[#2A3B8F]" strokeWidth={1.5} />
                </div>
              </div>
              <h3 
                className="text-xl mb-4"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, color: '#2A3B8F' }}
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
  );
}