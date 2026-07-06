import { fetchApi } from './fetchApi';
import { mapGameListItem, mapGameDetail } from './mapGame';
import { validateApiGame, validateApiGameList, validateGameId } from './validators/gameValidator';

export async function fetchGames() {
  const raw = await fetchApi('/games');
  const validated = validateApiGameList(raw);
  return validated.map(mapGameListItem).filter(Boolean);
}

export async function fetchGameById(id) {
  const validId = validateGameId(id);
  if (!validId) throw new Error('ID game tidak valid');

  const raw = await fetchApi(`/games/${validId}`);
  const validated = validateApiGame(raw);
  if (!validated) throw new Error('Data game tidak valid');

  const mapped = mapGameDetail(validated);
  if (!mapped) throw new Error('Data game tidak valid');

  return mapped;
}