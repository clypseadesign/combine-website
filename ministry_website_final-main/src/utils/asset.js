// Resolve a public/ asset path against Vite's configured base so images
// load correctly whether served from domain root, a subpath (GitHub Pages),
// or a relative deployment. Pass the path exactly as it appears under /public.
export function asset(path) {
  const base = import.meta.env.BASE_URL || '/';
  return base.replace(/\/$/, '') + '/' + String(path).replace(/^\//, '');
}
