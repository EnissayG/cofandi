import { Outlet } from 'react-router';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { usePageSeo } from '../../seo/usePageSeo';

export function Layout() {
  usePageSeo();
  return (
    <div className="min-h-screen font-sans">
      <ScrollToTop />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}