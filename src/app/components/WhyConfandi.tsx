import { Sparkles, Clock, Shield, Coffee } from 'lucide-react';
import { useMemo } from 'react';
import { useI18n } from '../../i18n/I18nProvider';

export function WhyCofandi() {
  const { t } = useI18n();

  const features = useMemo(
    () => [
      { icon: Sparkles, titleKey: 'why.f1t', descKey: 'why.f1d' },
      { icon: Clock, titleKey: 'why.f2t', descKey: 'why.f2d' },
      { icon: Shield, titleKey: 'why.f3t', descKey: 'why.f3d' },
      { icon: Coffee, titleKey: 'why.f4t', descKey: 'why.f4d' },
    ],
    []
  );

  return (
    <section id="pourquoi" className="py-24 md:py-32 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-6 leading-tight">
            {t('why.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
            {t('why.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch">
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
              <h3 className="text-xl font-medium text-primary mb-4">{t(feature.titleKey)}</h3>
              <p className="text-gray-600 font-light leading-relaxed mt-auto">{t(feature.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
