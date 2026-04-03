import type { Messages } from '../i18n/dictionaries';

export type PageSeoKey = keyof Messages['seo']['pages'];

export function pageSeoKeyFromPath(pathname: string): PageSeoKey {
  const p = pathname.replace(/\/$/, '') || '/';
  if (p === '/') return 'home';
  if (p === '/a-propos') return 'about';
  if (p === '/machines') return 'machines';
  if (p === '/emplacements') return 'locations';
  if (p === '/contact') return 'contact';
  return 'home';
}
