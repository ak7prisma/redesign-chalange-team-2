import { apiConfig } from '../config/api';

const ALLOWED_PATHS = /^\/games(\/\d+)?$/;
const TIMEOUT_MS = 10_000;

export class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

function assertSafePath(path) {
  if (typeof path !== 'string' || !ALLOWED_PATHS.test(path)) {
    throw new ApiError('Path tidak diizinkan', 400);
  }
}

function assertSafeBaseUrl(baseUrl) {
  try {
    const url = new URL(baseUrl);
    if (!['http:', 'https:'].includes(url.protocol)) {
      throw new ApiError('Protokol URL tidak diizinkan', 400);
    }
  } catch {
    throw new ApiError('URL API tidak valid', 400);
  }
}

export async function fetchApi(path) {
  if (!apiConfig.isEnabled) {
    throw new ApiError('API tidak diaktifkan', 503);
  }

  assertSafePath(path);
  assertSafeBaseUrl(apiConfig.baseUrl);

  const url = `${apiConfig.baseUrl}${path}`;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: { Accept: 'application/json' },
      signal: controller.signal,
    });

    if (!res.ok) {
      throw new ApiError(`API ${res.status}: ${res.statusText}`, res.status);
    }

    const contentType = res.headers.get('content-type') ?? '';
    if (!contentType.includes('application/json')) {
      throw new ApiError('Response bukan JSON', 415);
    }

    return res.json();
  } catch (err) {
    if (err.name === 'AbortError') {
      throw new ApiError('Request timeout', 408);
    }
    throw err;
  } finally {
    clearTimeout(timeoutId);
  }
}