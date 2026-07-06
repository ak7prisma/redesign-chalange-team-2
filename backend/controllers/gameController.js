const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllGames = async (req, res) => {
    try {
        const games = await prisma.game.findMany({
            include: {
                rating: true,
                platform: true,
                genres: true
            }
        });
        
        const result = games.map(game => ({
            ...game,
            galleryUrls: JSON.parse(game.galleryUrls) 
        }));

        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};