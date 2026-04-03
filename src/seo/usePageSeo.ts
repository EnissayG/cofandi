import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useI18n } from '../i18n/I18nProvider';
import { pageSeoKeyFromPath } from './pageSeoKey';

const siteRoot = (import.meta.env.VITE_SITE_URL as string | undefined)?.trim().replace(/\/$/, '');

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  const sel = attr === 'name' ? `meta[name="${key}"]` : `meta[property="${key}"]`;
  let el = document.querySelector(sel);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string | null) {
  const el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!href) {
    el?.remove();
    return;
  }
  if (!el) {
    const link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
    link.href = href;
    return;
  }
  el.href = href;
}

export function usePageSeo() {
  const { pathname } = useLocation();
  const { messages, locale } = useI18n();
  const key = pageSeoKeyFromPath(pathname);
  const page = messages.seo.pages[key];

  useEffect(() => {
    document.title = page.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', page.description);

    setMeta('property', 'og:title', page.title);
    setMeta('property', 'og:description', page.description);
    setMeta('name', 'twitter:title', page.title);
    setMeta('name', 'twitter:description', page.description);
    setMeta('property', 'og:locale', locale === 'fr' ? 'fr_CA' : 'en_CA');

    if (siteRoot) {
      const path = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
      const canonical = path === '/' ? `${siteRoot}/` : `${siteRoot}${path}`;
      setCanonical(canonical);
      setMeta('property', 'og:url', canonical);
      const img = `${siteRoot}/logo.png`;
      setMeta('property', 'og:image', img);
      setMeta('name', 'twitter:image', img);
    }
  }, [pathname, page.title, page.description, locale]);
}
