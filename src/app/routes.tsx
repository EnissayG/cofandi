import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MachinesPage } from './pages/MachinesPage';
import { LocationsPage } from './pages/LocationsPage';
import { ContactPage } from './pages/ContactPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'a-propos', Component: AboutPage },
      { path: 'machines', Component: MachinesPage },
      { path: 'emplacements', Component: LocationsPage },
      { path: 'contact', Component: ContactPage },
    ],
  },
]);
