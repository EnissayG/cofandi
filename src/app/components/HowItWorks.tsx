import { Smartphone, SlidersHorizontal, CreditCard } from 'lucide-react';
import { useMemo } from 'react';
import { useI18n } from '../../i18n/I18nProvider';

export function HowItWorks() {
  const { t } = useI18n();

  const steps = useMemo(
    () => [
      { icon: Smartphone, step: '01', titleKey: 'how.s1t', descKey: 'how.s1d' },
      { icon: SlidersHorizontal, step: '02', titleKey: 'how.s2t', descKey: 'how.s2d' },
      { icon: CreditCard, step: '03', titleKey: 'how.s3t', descKey: 'how.s3d' },
    ],
    []
  );

  return (
    <section id="comment" className="py-24 md:py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-6 leading-tight">
            {t('how.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
            {t('how.subtitle')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16 md:mb-20">
          <div className="rounded-[28px] overflow-hidden shadow-sm bg-gray-50">
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/WGokvgBxv1g?rel=0&modestbranding=1"
                title={t('how.videoTitle')}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/30 to-transparent" />
              )}
              <div className="relative bg-white rounded-[28px] p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center text-2xl font-semibold shadow-lg">
                  {step.step}
                </div>
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <step.icon size={32} className="text-primary" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-primary mb-4">{t(step.titleKey)}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{t(step.descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
