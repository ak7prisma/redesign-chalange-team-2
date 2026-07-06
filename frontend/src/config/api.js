const API_URL = import.meta.env.VITE_API_URL ?? '';

export const isApiEnabled =
  import.meta.env.VITE_ENABLE_API === 'true' ||
  import.meta.env.VITE_ENABLE_API === true;

export const apiConfig = {
  baseUrl: API_URL.replace(/\/$/, ''),
  isEnabled: isApiEnabled && Boolean(API_URL),
};