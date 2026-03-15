import { MapPin } from 'lucide-react';

const locations = [
  'J. Renaud Science Complex',
  'Recreation and Athletic Complex',
  'Instant Hall',
  'Wynn HB',
  'GW McConnell Building',
  'Visual Art Building',
  'Faubourg Building',
  'Henry F. Hall Building',
  'John Molson Building'
];

export function Locations() {
  return (
    <section id="emplacements" className="py-24 md:py-32 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#2A3B8F]/10 rounded-full px-6 py-3 mb-6">
            <MapPin size={20} className="text-[#2A3B8F]" />
            <span className="text-[#2A3B8F]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}>
              Présent sur le campus
            </span>
          </div>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl mb-6"
            style={{ 
              fontFamily: 'Poppins, sans-serif', 
              fontWeight: 600,
              lineHeight: 1.2,
              color: '#2A3B8F'
            }}
          >
            Trouvez-nous à l'Université Concordia
          </h2>
          <p 
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
          >
            Nos machines sont stratégiquement placées dans plusieurs bâtiments pour votre commodité.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {locations.map((location, index) => (
            <div 
              key={index}
              className="group bg-white border border-gray-200 rounded-[24px] p-6 hover:shadow-lg hover:border-[#2A3B8F]/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#2A3B8F]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2A3B8F]/20 transition-colors">
                  <MapPin size={20} className="text-[#2A3B8F]" strokeWidth={2} />
                </div>
                <p 
                  className="text-gray-700 leading-relaxed pt-1"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                >
                  {location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <button 
            className="px-10 py-4 bg-[#2A3B8F] text-white rounded-[28px] hover:bg-[#1f2d6b] transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
          >
            Voir toutes les emplacements
          </button>
        </div>
      </div>
    </section>
  );
}