import { ArrowRight, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import cup1 from 'figma:asset/bbc6eea3fd1b1c636a02470ff1ee22689d9c6c1e.png';
import cup2 from 'figma:asset/7e6fbc1b1fe09c83839a07c176606ad61bb800fc.png';

export function Hero() {
  const [currentCup, setCurrentCup] = useState(0);
  const cups = [cup1, cup2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCup((prev) => (prev + 1) % cups.length);
    }, 5000); // Ralenti à 5 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 md:space-y-10">
            <div className="space-y-6">
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl leading-tight"
                style={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  fontWeight: 600, 
                  color: '#2A3B8F',
                  lineHeight: 1.15
                }}
              >
                L'expérience café premium, réinventée
              </h1>
              <p 
                className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
              >
                Des boissons de qualité supérieure, disponibles en libre-service dans les espaces que vous fréquentez.
              </p>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-3 text-gray-700 bg-gray-50 rounded-full px-6 py-3 w-fit">
              <MapPin size={20} className="text-[#2A3B8F]" />
              <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}>
                Disponible sur le campus Concordia
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#emplacements"
                className="px-10 py-4 bg-[#2A3B8F] text-white rounded-[28px] hover:bg-[#1f2d6b] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
              >
                Trouver une machine
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#pourquoi"
                className="px-10 py-4 bg-white text-[#2A3B8F] rounded-[28px] border-2 border-[#2A3B8F] hover:bg-gray-50 transition-all duration-300"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
              >
                En savoir plus
              </a>
            </div>
          </div>

          {/* Right Column - Animated Cups */}
          <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCup}
                initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotate: 0,
                }}
                exit={{ opacity: 0, scale: 0.9, rotate: 3 }}
                transition={{ 
                  duration: 1.2,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div 
                  className="relative w-full h-full max-w-[400px] mx-auto"
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <img 
                    src={cups[currentCup]}
                    alt={currentCup === 0 ? "Café Confandi avec latte art" : "Tasse Confandi fermée"}
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
            
            {/* Floating accent elements */}
            <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-[#2A3B8F]/5 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-10 -left-10 w-72 h-72 bg-[#2A3B8F]/5 rounded-full blur-3xl"></div>

            {/* Indicator dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
              {cups.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCup(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentCup === index 
                      ? 'bg-[#2A3B8F] w-8' 
                      : 'bg-[#2A3B8F]/30 hover:bg-[#2A3B8F]/50'
                  }`}
                  aria-label={`Voir la tasse ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}