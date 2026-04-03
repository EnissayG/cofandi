import { MapPin, Clock, ChevronDown, Maximize2, Minimize2 } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';
import { SectionWave } from '../components/SectionWave';
import { useI18n } from '../../i18n/I18nProvider';

export function LocationsPage() {
  const { t, messages } = useI18n();
  const { locationsPage: lp } = messages;
  const locations = lp.locations;

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [expandAll, setExpandAll] = useState(false);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
    setExpandAll(false);
  };

  const toggleExpandAll = () => {
    setExpandAll(!expandAll);
  };

  return (
    <div className="pt-32 pb-20">
      <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-primary to-primary/90">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-6 py-3 mb-6">
            <MapPin size={20} className="text-white" />
            <span className="text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}>
              {t('locationsPage.heroBadge')}
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
            {t('locationsPage.heroTitle')}
          </h1>
          <p
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
          >
            {t('locationsPage.heroSubtitle')}
          </p>
        </div>
      </section>

      <SectionWave className="text-white" />

      <section className="py-16 px-6 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 gap-10 md:gap-8 text-center">
            <div className="space-y-2">
              <p className="text-5xl md:text-6xl font-semibold text-primary">10+</p>
              <p
                className="text-xl text-gray-600"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
              >
                {t('locationsPage.stat1')}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl md:text-6xl font-semibold text-primary">5000+</p>
              <p
                className="text-xl text-gray-600"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
              >
                {t('locationsPage.stat2')}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl md:text-6xl font-semibold text-primary">99&nbsp;%</p>
              <p
                className="text-xl text-gray-600"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
              >
                {t('locationsPage.stat3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-4 font-semibold text-primary">
            {t('locationsPage.sectionTitle')}
          </h2>
          <p
            className="text-center text-gray-600 mb-12"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
          >
            {t('locationsPage.sectionHint')}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {locations.map((location, index) => (
              <div
                key={location.name}
                className="bg-white rounded-[20px] overflow-hidden shadow-md hover:shadow-lg transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleExpand(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary">{location.name}</h3>
                  </div>
                  <ChevronDown
                    size={24}
                    className={`text-primary transition-transform duration-300 flex-shrink-0 ${
                      expandedIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedIndex === index || expandAll ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-2 space-y-4 border-t border-gray-100">
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p
                          className="text-sm text-gray-500 mb-1"
                          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                        >
                          {t('locationsPage.address')}
                        </p>
                        <p
                          className="text-gray-700"
                          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                        >
                          {location.address}
                        </p>
                        <p
                          className="text-gray-600 text-sm mt-1"
                          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
                        >
                          {location.floor}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock size={18} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p
                          className="text-sm text-gray-500 mb-1"
                          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                        >
                          {t('locationsPage.hours')}
                        </p>
                        <p
                          className="text-gray-700"
                          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                        >
                          {location.hours}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={toggleExpandAll}
              className="mt-8 inline-flex items-center justify-center gap-2 px-12 py-4 bg-primary text-white rounded-[28px] hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
            >
              {expandAll ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
              {expandAll ? t('locationsPage.collapseAll') : t('locationsPage.expandAll')}
            </button>
          </div>

          <p
            className="text-center text-gray-600 mt-8"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
          >
            {t('locationsPage.footerNote')}
          </p>
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
            {t('locationsPage.ctaBannerTitle')}
          </h2>
          <p
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
          >
            {t('locationsPage.ctaBannerSubtitle')}
          </p>
          <Link
            to="/contact"
            className="inline-block px-12 py-4 bg-white text-primary rounded-[28px] hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
          >
            {t('locationsPage.ctaBtn')}
          </Link>
        </div>
      </section>
    </div>
  );
}
