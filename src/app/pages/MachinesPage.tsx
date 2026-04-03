import { Coffee, CreditCard, Smartphone, Droplet, Zap, Shield, ChevronDown } from 'lucide-react';
import { Link } from 'react-router';
import { asset } from '../utils/asset';
import { SectionWave } from '../components/SectionWave';
import React, { useState } from 'react';
import { useI18n } from '../../i18n/I18nProvider';

const machineFullImage = asset('machine-full.png');
const interfaceImage = asset('machine-interface.png');
const closeupImage = asset('machine-closeup.png');

const featureIcons = [Coffee, CreditCard, Smartphone, Droplet, Zap, Shield] as const;

export function MachinesPage() {
  const { t, messages } = useI18n();
  const mp = messages.machinesPage;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="pt-32 pb-20">
      <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-primary to-primary/90">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-6 py-3 mb-6">
            <Coffee size={20} className="text-white" />
            <span className="text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}>
              {t('machinesPage.heroBadge')}
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            {t('machinesPage.heroTitle')}
          </h1>
          <p
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
          >
            {t('machinesPage.heroSubtitle')}
          </p>
        </div>
      </section>

      <SectionWave className="text-white" />

      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2 rounded-[32px] overflow-hidden shadow-xl">
              <img
                src={machineFullImage}
                alt={mp.altMachine}
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-8">
              <div className="rounded-[28px] overflow-hidden shadow-lg">
                <img
                  src={interfaceImage}
                  alt={mp.altInterface}
                  className="w-full h-[240px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-[28px] overflow-hidden shadow-lg">
                <img
                  src={closeupImage}
                  alt={mp.altCloseup}
                  className="w-full h-[240px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2
              className="text-3xl md:text-4xl text-center text-primary"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
              }}
            >
              {t('machinesPage.techTitle')}
            </h2>
            <p
              className="text-xl text-gray-600 text-center max-w-3xl mx-auto"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
            >
              {t('machinesPage.techSubtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <h2
            className="text-3xl md:text-4xl text-center mb-16 text-primary"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
            }}
          >
            {t('machinesPage.featuresTitle')}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mp.features.map((feature, index) => {
              const Icon = featureIcons[index] ?? Coffee;
              return (
                <div key={feature.title} className="bg-white rounded-[28px] p-8 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl mb-4 font-semibold text-primary">{feature.title}</h3>
                  <p
                    className="text-gray-600 leading-relaxed"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
                  >
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl mb-6 text-primary"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
              }}
            >
              {t('machinesPage.drinksTitle')}
            </h2>
            <p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
            >
              {t('machinesPage.drinksSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mp.drinks.map((beverage) => (
              <div
                key={beverage}
                className="bg-gray-50 rounded-[20px] px-6 py-4 text-center hover:bg-primary/10 transition-colors cursor-pointer"
              >
                <p
                  className="text-gray-700"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                >
                  {beverage}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-primary to-primary/90">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl mb-6 text-white"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
            }}
          >
            {t('machinesPage.ctaTitle')}
          </h2>
          <p
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
          >
            {t('machinesPage.ctaSubtitle')}
          </p>
          <Link
            to="/contact"
            className="inline-block px-12 py-4 bg-white text-primary rounded-[28px] hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
          >
            {t('machinesPage.ctaBtn')}
          </Link>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl mb-6 font-semibold text-primary"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {t('machinesPage.faqTitle')}
            </h2>
            <p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
            >
              {t('machinesPage.faqIntro')}
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {mp.faq.map((item, index) => {
              const open = openFaqIndex === index;
              return (
                <div key={item.q} className="rounded-[28px] border border-gray-100 bg-gray-50 overflow-hidden">
                  <button
                    type="button"
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                    onClick={() => setOpenFaqIndex(open ? null : index)}
                  >
                    <span className="text-primary font-medium">{item.q}</span>
                    <ChevronDown
                      size={22}
                      className={`text-primary transition-transform ${open ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ${
                      open ? 'max-h-[320px] pb-5 opacity-100' : 'max-h-0 pb-0 opacity-0'
                    }`}
                  >
                    {'bullets' in item && item.bullets ? (
                      <ul className="list-disc pl-6 text-gray-600 font-light leading-relaxed space-y-2">
                        {item.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    ) : 'a' in item && item.a ? (
                      <p className="text-gray-600 font-light leading-relaxed">{item.a}</p>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
