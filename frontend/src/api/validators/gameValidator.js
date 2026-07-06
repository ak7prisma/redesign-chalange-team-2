const VALID_RATINGS = new Set(['3+', '7+', '13+', '15+', '18+']);
const SAFE_PATH = /^(\/|https?:\/\/)/;

function isObject(v) {
  return v != null && typeof v === 'object' && !Array.isArray(v);
}

function safeString(v, max = 500) {
  if (typeof v !== 'string') return '';
  return v.slice(0, max);
}

function safeImageUrl(v) {
  const raw = safeString(v, 500);
  if (!raw) return '';
  const tokens = raw.trim().split(/\s+/);
  for (const token of tokens) {
    if (token.startsWith('/')) return token.slice(0, 300);
    if (token.startsWith('https://')) return token.slice(0, 300);
  }
  return '';
}

export function validateApiGame(raw) {
  if (!isObject(raw)) return null;
  if (typeof raw.id !== 'number' || raw.id < 1) return null;
  if (typeof raw.title !== 'string' || !raw.title.trim()) return null;

  const rating = isObject(raw.rating)
    ? { code: safeString(raw.rating.code, 10), description: safeString(raw.rating.description, 1000) }
    : null;

  if (rating?.code && !VALID_RATINGS.has(rating.code)) {
    rating.code = '13+';
  }

  return {
    id: raw.id,
    title: safeString(raw.title, 200),
    description: safeString(raw.description, 5000),
    developer: safeString(raw.developer, 200),
    publisher: safeString(raw.publisher, 200),
    releaseDate: safeString(raw.releaseDate, 20),
    logoUrl: safeImageUrl(raw.logoUrl),
    galleryUrls: typeof raw.galleryUrls === 'string' ? raw.galleryUrls : '[]',
    evolutionTitle: safeString(raw.evolutionTitle, 200),
    evolutionDesc: safeString(raw.evolutionDesc, 2000),
    tipsWaktuLayarTitle: safeString(raw.tipsWaktuLayarTitle, 200),
    tipsWaktuLayarDesc: safeString(raw.tipsWaktuLayarDesc, 1000),
    tipsPembayaranTitle: safeString(raw.tipsPembayaranTitle, 200),
    tipsPembayaranDesc: safeString(raw.tipsPembayaranDesc, 1000),
    tipsFiturChatTitle: raw.tipsFiturChatTitle ? safeString(raw.tipsFiturChatTitle, 200) : null,
    tipsFiturChatDesc: raw.tipsFiturChatDesc ? safeString(raw.tipsFiturChatDesc, 1000) : null,
    tipsInteraksiTitle: raw.tipsInteraksiTitle ? safeString(raw.tipsInteraksiTitle, 200) : null,
    tipsInteraksiDesc: raw.tipsInteraksiDesc ? safeString(raw.tipsInteraksiDesc, 1000) : null,
    saranPsikologis: safeString(raw.saranPsikologis, 2000),
    rating,
    genres: Array.isArray(raw.genres)
      ? raw.genres.filter((g) => isObject(g) && typeof g.name === 'string').map((g) => ({ name: safeString(g.name, 50) }))
      : [],
    platforms: Array.isArray(raw.platforms)
      ? raw.platforms.filter((p) => isObject(p) && typeof p.name === 'string').map((p) => ({ name: safeString(p.name, 50) }))
      : [],
  };
}

export function validateApiGameList(data) {
  if (!Array.isArray(data)) return [];
  return data.map(validateApiGame).filter(Boolean);
}

export function validateGameId(id) {
  const num = Number(id);
  if (!Number.isInteger(num) || num < 1 || num > 999999) return null;
  return num;
}

export { SAFE_PATH, VALID_RATINGS };