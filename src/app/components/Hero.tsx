import { ArrowRight, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { asset } from '../utils/asset';

const heroImages = [asset('hero-cup1.png'), asset('hero-cup2.png')];

export function Hero() {
  const [currentCup, setCurrentCup] = useState(0);
  const cups = heroImages;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCup((prev) => (prev + 1) % cups.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-8 md:space-y-10">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary leading-tight">
                L'expérience café premium, réinventée
              </h1>
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-xl">
                Des boissons de qualité supérieure, disponibles en libre-service dans les espaces que vous fréquentez.
              </p>
            </div>

            <div className="flex items-center gap-3 text-gray-700 bg-gray-50 rounded-full px-6 py-3 w-fit">
              <MapPin size={20} className="text-primary" />
              <span className="font-normal">Disponible sur le campus Concordia</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#emplacements"
                className="px-10 py-4 bg-primary text-white rounded-[28px] hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group font-medium"
              >
                Trouver une machine
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#pourquoi"
                className="px-10 py-4 bg-white text-primary rounded-[28px] border-2 border-primary hover:bg-gray-50 transition-all duration-300 font-medium"
              >
                En savoir plus
              </a>
            </div>
          </div>

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
                    fetchPriority="high"
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -z-10 bottom-10 -left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {cups.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCup(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentCup === index ? 'bg-primary w-8' : 'bg-primary/30 hover:bg-primary/50'
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