const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const count = await prisma.game.count();
  const games = await prisma.game.findMany({
    take: 10,
    select: { id: true, title: true, logoUrl: true, ratingId: true },
  });
  console.log('GAME_COUNT:', count);
  console.log('SAMPLE:', JSON.stringify(games, null, 2));
}

main()
  .catch((e) => { console.error('ERROR:', e.message); process.exit(1); })
  .finally(() => prisma.$disconnect());