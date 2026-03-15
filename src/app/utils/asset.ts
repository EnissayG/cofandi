const base = import.meta.env.BASE_URL;

export function asset(path: string): string {
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return base + normalized;
}
