import { apiConfig } from '../config/api';

export async function fetchApi(path) {
  if (!apiConfig.isEnabled) return null;

  const url = `${apiConfig.baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`API ${res.status}: ${res.statusText}`);
  }

  return res.json();
}
