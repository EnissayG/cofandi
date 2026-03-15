import machineFullImage from 'figma:asset/377ff176bfe70b1e2f92e4692b49909aed25b084.png';
import interfaceImage from 'figma:asset/5716e2c17b0aefb43be3a9ebe4449c2f9911eb66.png';
import closeupImage from 'figma:asset/029e86b895224b44e971ed5dc7a466fbeb427a2e.png';

export function MachineShowcase() {
  return (
    <section id="machines" className="py-24 md:py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column - Images */}
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 rounded-[32px] overflow-hidden shadow-xl">
              <img 
                src={machineFullImage}
                alt="Machine Confandi - vue complète"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="rounded-[28px] overflow-hidden shadow-lg">
              <img 
                src={interfaceImage}
                alt="Détail de l'interface Confandi"
                className="w-full h-[280px] object-cover"
              />
            </div>
            <div className="rounded-[28px] overflow-hidden shadow-lg">
              <img 
                src={closeupImage}
                alt="Café premium Confandi"
                className="w-full h-[280px] object-cover"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl leading-tight"
                style={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  fontWeight: 600, 
                  color: '#2A3B8F',
                  lineHeight: 1.2
                }}
              >
                Design élégant, technologie avancée
              </h2>
              <p 
                className="text-lg md:text-xl text-gray-600 leading-relaxed"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
              >
                Nos machines allient esthétique moderne et performance exceptionnelle. Chaque détail a été pensé pour offrir une expérience utilisateur intuitive et agréable.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-5 pt-4">
              {[
                'Interface tactile haute définition',
                'Système de paiement sans contact',
                'Maintenance préventive régulière',
                'Design compact et élégant'
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#2A3B8F]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#2A3B8F]"></div>
                  </div>
                  <p 
                    className="text-gray-700"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                  >
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            <button 
              className="px-10 py-4 bg-[#2A3B8F] text-white rounded-[28px] hover:bg-[#1f2d6b] transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
            >
              Découvrir nos machines
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}