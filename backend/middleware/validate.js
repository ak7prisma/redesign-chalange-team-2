const MAX_GAMES_LIMIT = 50;

function parsePositiveInt(value, { min = 1, max = MAX_GAMES_LIMIT } = {}) {
  const num = Number(value);
  if (!Number.isInteger(num) || num < min || num > max) return null;
  return num;
}

function validateGameId(req, res, next) {
  const id = parsePositiveInt(req.params.id, { min: 1, max: 999999 });
  if (!id) {
    return res.status(400).json({ error: 'ID game tidak valid' });
  }
  req.validatedId = id;
  next();
}

function validateListQuery(req, res, next) {
  const limit = req.query.limit != null
    ? parsePositiveInt(req.query.limit, { min: 1, max: MAX_GAMES_LIMIT })
    : MAX_GAMES_LIMIT;

  if (req.query.limit != null && limit === null) {
    return res.status(400).json({ error: 'Parameter limit tidak valid (1-50)' });
  }

  req.listLimit = limit ?? MAX_GAMES_LIMIT;
  next();
}

module.exports = { validateGameId, validateListQuery, MAX_GAMES_LIMIT };