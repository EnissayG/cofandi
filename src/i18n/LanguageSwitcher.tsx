import { useI18n } from './I18nProvider';
import type { Locale } from './dictionaries';

export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();

  const btn = (lang: Locale, label: string) => (
    <button
      type="button"
      onClick={() => setLocale(lang)}
      className={`px-2.5 py-1 rounded-md text-sm font-medium transition-colors ${
        locale === lang
          ? 'bg-white text-primary'
          : 'text-white/80 hover:text-white hover:bg-white/10'
      }`}
      aria-pressed={locale === lang}
      aria-label={lang === 'fr' ? 'Français' : 'English'}
    >
      {label}
    </button>
  );

  return (
    <div
      className={`flex items-center gap-0.5 rounded-lg bg-white/10 p-0.5 ${className}`}
      role="group"
      aria-label="Language"
    >
      {btn('fr', t('nav.langFr'))}
      {btn('en', t('nav.langEn'))}
    </div>
  );
}
