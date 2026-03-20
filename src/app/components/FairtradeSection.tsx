import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { asset } from '../utils/asset';

export function FairtradeSection() {
  const coffeeImg = asset('fairtrade-coffee.png');
  const logosImg = asset('stingers-roast-logos.png');
  const bagRef = useRef<HTMLImageElement | null>(null);
  const bagWrapperRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let rafId: number | null = null;

    const update = () => {
      if (!sectionRef.current || !bagRef.current || !bagWrapperRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const winH = window.innerHeight;

      // Scroll progress (0..1)
      // Objectif: devenir "bien visible" plus tôt (au moment où tu lis le texte),
      // sans faire une grosse animation.
      // On limite la variation "au début" pour que ça n'anime pas tout le trajet.
      // Ici on anime sur ~1/2 de viewport.
      const startTop = winH * 0.9;
      const endTop = winH * 0.4;
      const t = (startTop - rect.top) / (startTop - endTop);
      const progress = Math.min(1, Math.max(0, t));

      const minOpacity = 0;
      const smooth = progress * progress * (3 - 2 * progress); // smoothstep

      const opacity = minOpacity + (1 - minOpacity) * Math.pow(smooth, 0.55);
      const scale = 0.96 + 0.08 * smooth;

      bagRef.current.style.opacity = opacity.toFixed(3);
      bagWrapperRef.current.style.transform = `scale(${scale.toFixed(3)})`;
    };

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        update();
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={sectionRef} className="relative flex items-center justify-center">
            <div
              ref={bagWrapperRef}
              className="relative w-full h-[480px] md:h-[560px] flex items-center justify-center will-change-transform"
              style={{ transform: 'scale(1)' }}
            >
              <img
                ref={bagRef}
                src={coffeeImg}
                alt="Cafe Fairtrade"
                className="fairtrade-coffee-bag w-full h-full object-contain drop-shadow-[0_14px_18px_rgba(0,0,0,0.16)]"
                loading="lazy"
                style={{ transition: 'opacity 0.06s linear', opacity: 0 }}
              />
            </div>
          </div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-semibold text-primary">
                Le Stingers Roast : Une tasse engagée, de la ferme à votre campus.
              </h2>
              <p className="text-gray-600 font-light leading-relaxed">
                Le café que nous servons est bien plus qu’un simple mélange ; c'est le Stingers Roast, un café exclusif né d'un partenariat entre l'Université Concordia, la Brûlerie Faro et les producteurs de la région de La Unión, à Nariño, en Colombie.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 font-light leading-relaxed">
                Nos grains proviennent de la coopérative FUDAM (Manos de Mujeres), un collectif de femmes caféicultrices dévouées à une agriculture durable et de haute qualité. En choisissant ces grains, nous garantissons un produit certifié Fairtrade (Équitable) et Biologique.
                La certification Fairtrade assure que les productrices reçoivent non seulement un prix minimum garanti, les protégeant des fluctuations du marché, mais aussi une prime de développement réinvestie directement dans leurs projets communautaires, de santé et d'éducation.
              </p>

              <p className="text-gray-600 font-light leading-relaxed">
                Chaque sac de Stingers Roast représente notre engagement envers une rémunération juste des travailleurs, le respect des droits humains et la préservation de l'environnement. Torréfié localement au Québec pour une fraîcheur optimale, ce torréfaction moyenne équilibrée est le reflet de nos valeurs : soutenir l'autonomie des femmes à la source tout en offrant une expérience café d'exception à notre communauté.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              <div className="rounded-[24px] border border-gray-200 bg-white/90 p-6 shadow-sm">
                <img
                  src={logosImg}
                  alt="Certifications Stingers Roast"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

