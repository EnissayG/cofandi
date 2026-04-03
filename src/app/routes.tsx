import { createBrowserRouter, Link, Navigate } from 'react-router';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MachinesPage } from './pages/MachinesPage';
import { LocationsPage } from './pages/LocationsPage';
import { ContactPage } from './pages/ContactPage';
import { useI18n } from '../i18n/I18nProvider';

const base = import.meta.env.BASE_URL;

function NotFoundPage() {
  const { t } = useI18n();
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-semibold text-primary mb-2">404</h1>
      <p className="text-gray-600 font-light mb-6">{t('notFound.desc')}</p>
      <Link to="/" className="px-8 py-3 bg-primary text-white rounded-[28px] hover:bg-primary/90 font-medium">
        {t('notFound.back')}
      </Link>
    </div>
  );
}

function RouteError() {
  const { t } = useI18n();
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-semibold text-primary mb-2">{t('routeError.title')}</h1>
      <p className="text-gray-600 font-light mb-6">{t('routeError.desc')}</p>
      <Link to="/" className="px-8 py-3 bg-primary text-white rounded-[28px] hover:bg-primary/90 font-medium">
        {t('routeError.back')}
      </Link>
    </div>
  );
}

export const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: Layout,
      errorElement: <RouteError />,
      children: [
        { index: true, Component: HomePage },
        { path: '', element: <Navigate to="/" replace /> },
        { path: 'a-propos', Component: AboutPage },
        { path: 'machines', Component: MachinesPage },
        { path: 'emplacements', Component: LocationsPage },
        { path: 'contact', Component: ContactPage },
        { path: '*', Component: NotFoundPage },
      ],
    },
  ],
  { basename: base === '/' ? '' : base.replace(/\/$/, '') }
);
