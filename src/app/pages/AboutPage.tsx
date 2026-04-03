import { Users } from 'lucide-react';
import { SectionWave } from '../components/SectionWave';
import { useI18n } from '../../i18n/I18nProvider';

export function AboutPage() {
  const { t, messages } = useI18n();
  const { about } = messages;

  const values = [
    { title: t('about.v1t'), description: t('about.v1d') },
    { title: t('about.v2t'), description: t('about.v2d') },
    { title: t('about.v3t'), description: t('about.v3d') },
  ];

  return (
    <div className="pt-32 pb-20">
      <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-primary to-primary/90">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-6 py-3 mb-6">
            <Users size={20} className="text-white" />
            <span className="text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}>
              {t('about.heroBadge')}
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
            {t('about.heroTitle')}
          </h1>
          <p
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
          >
            {t('about.heroSubtitle')}
          </p>
        </div>
      </section>

      <SectionWave className="text-white" />

      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[720px] mx-auto space-y-8">
          <h2
            className="text-2xl md:text-3xl text-primary text-center"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
          >
            {t('about.storyIntro')}
          </h2>
          {about.storyParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg text-gray-600 leading-relaxed"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl mb-6 text-primary"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
              }}
            >
              {t('about.valuesTitle')}
            </h2>
            <p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
            >
              {t('about.valuesSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-[28px] p-8 shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-2xl mb-4 font-semibold text-primary">{value.title}</h3>
                <p
                  className="text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full mb-6">
              <Users size={24} className="text-primary" />
              <span className="text-primary" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                {t('about.teamBadge')}
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl mb-6 text-primary"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
              }}
            >
              {t('about.teamTitle')}
            </h2>
            <p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
            >
              {t('about.teamSubtitle')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/90 rounded-[32px] p-12 md:p-16 text-center">
            <p
              className="text-2xl md:text-3xl text-white mb-8"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
            >
              {t('about.teamQuote')}
            </p>
            <p className="text-xl text-white/80" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}>
              {t('about.teamSign')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
