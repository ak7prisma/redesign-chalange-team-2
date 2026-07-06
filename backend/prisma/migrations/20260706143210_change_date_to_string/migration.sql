-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Game" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "developer" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "releaseDate" TEXT NOT NULL,
    "logoUrl" TEXT NOT NULL,
    "galleryUrls" TEXT NOT NULL,
    "evolutionTitle" TEXT NOT NULL,
    "evolutionDesc" TEXT NOT NULL,
    "tipsWaktuLayarTitle" TEXT NOT NULL,
    "tipsWaktuLayarDesc" TEXT NOT NULL,
    "tipsPembayaranTitle" TEXT NOT NULL,
    "tipsPembayaranDesc" TEXT NOT NULL,
    "tipsFiturChatTitle" TEXT,
    "tipsFiturChatDesc" TEXT,
    "tipsInteraksiTitle" TEXT,
    "tipsInteraksiDesc" TEXT,
    "saranPsikologis" TEXT NOT NULL,
    "ratingId" INTEGER NOT NULL,
    CONSTRAINT "Game_ratingId_fkey" FOREIGN KEY ("ratingId") REFERENCES "Rating" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Game" ("description", "developer", "evolutionDesc", "evolutionTitle", "galleryUrls", "id", "logoUrl", "publisher", "ratingId", "releaseDate", "saranPsikologis", "tipsFiturChatDesc", "tipsFiturChatTitle", "tipsInteraksiDesc", "tipsInteraksiTitle", "tipsPembayaranDesc", "tipsPembayaranTitle", "tipsWaktuLayarDesc", "tipsWaktuLayarTitle", "title") SELECT "description", "developer", "evolutionDesc", "evolutionTitle", "galleryUrls", "id", "logoUrl", "publisher", "ratingId", "releaseDate", "saranPsikologis", "tipsFiturChatDesc", "tipsFiturChatTitle", "tipsInteraksiDesc", "tipsInteraksiTitle", "tipsPembayaranDesc", "tipsPembayaranTitle", "tipsWaktuLayarDesc", "tipsWaktuLayarTitle", "title" FROM "Game";
DROP TABLE "Game";
ALTER TABLE "new_Game" RENAME TO "Game";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
