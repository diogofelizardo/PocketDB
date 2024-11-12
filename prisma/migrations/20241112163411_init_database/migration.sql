-- CreateEnum
CREATE TYPE "ElementType" AS ENUM ('GRASS', 'FIRE', 'WATER', 'LIGHTNING', 'PSYCHIC', 'FIGHTING', 'DARKNESS', 'METAL', 'DRAGON', 'COLORLESS');

-- CreateEnum
CREATE TYPE "MechanicType" AS ENUM ('EX');

-- CreateEnum
CREATE TYPE "CardType" AS ENUM ('POKEMON', 'TRAINER', 'ITEM', 'SUPPORTER', 'TOOL');

-- CreateEnum
CREATE TYPE "Rarity" AS ENUM ('◊', '◊◊', '◊◊◊', '◊◊◊◊', '☆', '☆☆', '☆☆☆', 'CROWN_RARE', 'PROMO');

-- CreateEnum
CREATE TYPE "Stage" AS ENUM ('BASIC', 'STAGE_1', 'STAGE_2');

-- CreateTable
CREATE TABLE "Set" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "codeName" TEXT,
    "image" TEXT,
    "releaseDate" TIMESTAMP(3),

    CONSTRAINT "Set_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pack" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "setId" TEXT NOT NULL,

    CONSTRAINT "Pack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Card" (
    "id" TEXT NOT NULL,
    "pokedexNumber" INTEGER,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "hp" INTEGER NOT NULL,
    "elementType" "ElementType" NOT NULL,
    "weakness" "ElementType",
    "mechanic" "MechanicType",
    "cardType" "CardType" NOT NULL,
    "retreatCost" INTEGER NOT NULL,
    "hasSkill" BOOLEAN NOT NULL DEFAULT false,
    "skillDescription" TEXT,
    "artistName" TEXT,
    "rarity" "Rarity" NOT NULL,
    "stage" "Stage" NOT NULL,
    "setId" TEXT NOT NULL,
    "packId" TEXT,
    "evolvesFromId" TEXT,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CardVersions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Set_name_key" ON "Set"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Pack_name_setId_key" ON "Pack"("name", "setId");

-- CreateIndex
CREATE INDEX "Card_pokedexNumber_idx" ON "Card"("pokedexNumber");

-- CreateIndex
CREATE UNIQUE INDEX "_CardVersions_AB_unique" ON "_CardVersions"("A", "B");

-- CreateIndex
CREATE INDEX "_CardVersions_B_index" ON "_CardVersions"("B");

-- AddForeignKey
ALTER TABLE "Pack" ADD CONSTRAINT "Pack_setId_fkey" FOREIGN KEY ("setId") REFERENCES "Set"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_setId_fkey" FOREIGN KEY ("setId") REFERENCES "Set"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_packId_fkey" FOREIGN KEY ("packId") REFERENCES "Pack"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_evolvesFromId_fkey" FOREIGN KEY ("evolvesFromId") REFERENCES "Card"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardVersions" ADD CONSTRAINT "_CardVersions_A_fkey" FOREIGN KEY ("A") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardVersions" ADD CONSTRAINT "_CardVersions_B_fkey" FOREIGN KEY ("B") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;
