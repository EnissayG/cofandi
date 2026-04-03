import { Link } from 'react-router';
import { asset } from '../utils/asset';
import { useI18n } from '../../i18n/I18nProvider';

const machineFullImage = asset('machine-full.png');
const interfaceImage = asset('machine-interface.png');
const closeupImage = asset('machine-closeup.png');

export function MachineShowcase() {
  const { t } = useI18n();
  const featureKeys = ['showcase.f1', 'showcase.f2', 'showcase.f3', 'showcase.f4'] as const;

  return (
    <section id="machines" className="py-24 md:py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 rounded-[32px] overflow-hidden shadow-xl">
              <img
                src={machineFullImage}
                alt={t('showcase.alt1')}
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-[28px] overflow-hidden shadow-lg">
              <img
                src={interfaceImage}
                alt={t('showcase.alt2')}
                className="w-full h-[280px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-[28px] overflow-hidden shadow-lg">
              <img
                src={closeupImage}
                alt={t('showcase.alt3')}
                className="w-full h-[280px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary leading-tight">
                {t('showcase.title')}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                {t('showcase.subtitle')}
              </p>
            </div>

            <div className="space-y-5 pt-4">
              {featureKeys.map((key, index) => (
                <div key={key} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-gray-700 font-normal">{t(key)}</p>
                </div>
              ))}
            </div>

            <Link
              to="/machines"
              className="inline-block px-10 py-4 bg-primary text-white rounded-[28px] hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
            >
              {t('showcase.cta')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
