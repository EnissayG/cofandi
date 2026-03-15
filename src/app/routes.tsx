import { createBrowserRouter, Link, Navigate } from 'react-router';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MachinesPage } from './pages/MachinesPage';
import { LocationsPage } from './pages/LocationsPage';
import { ContactPage } from './pages/ContactPage';

const base = import.meta.env.BASE_URL;

function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-semibold text-primary mb-2">404</h1>
      <p className="text-gray-600 font-light mb-6">Cette page n'existe pas.</p>
      <Link to="/" className="px-8 py-3 bg-primary text-white rounded-[28px] hover:bg-primary/90 font-medium">
        Retour à l'accueil
      </Link>
    </div>
  );
}

function RouteError() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-semibold text-primary mb-2">Erreur</h1>
      <p className="text-gray-600 font-light mb-6">Une erreur s'est produite.</p>
      <Link to="/" className="px-8 py-3 bg-primary text-white rounded-[28px] hover:bg-primary/90 font-medium">
        Retour à l'accueil
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
