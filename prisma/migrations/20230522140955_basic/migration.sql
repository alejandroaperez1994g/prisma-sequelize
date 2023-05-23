/*
  Warnings:

  - You are about to drop the column `albumId` on the `Track` table. All the data in the column will be lost.
  - You are about to drop the column `playlistId` on the `Track` table. All the data in the column will be lost.
  - You are about to drop the `Album` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AlbumsOfArtists` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Artist` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Playlist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AlbumsOfArtists" DROP CONSTRAINT "AlbumsOfArtists_albumId_fkey";

-- DropForeignKey
ALTER TABLE "AlbumsOfArtists" DROP CONSTRAINT "AlbumsOfArtists_artistId_fkey";

-- DropForeignKey
ALTER TABLE "Playlist" DROP CONSTRAINT "Playlist_userId_fkey";

-- DropForeignKey
ALTER TABLE "Track" DROP CONSTRAINT "Track_albumId_fkey";

-- DropForeignKey
ALTER TABLE "Track" DROP CONSTRAINT "Track_playlistId_fkey";

-- AlterTable
ALTER TABLE "Track" DROP COLUMN "albumId",
DROP COLUMN "playlistId";

-- DropTable
DROP TABLE "Album";

-- DropTable
DROP TABLE "AlbumsOfArtists";

-- DropTable
DROP TABLE "Artist";

-- DropTable
DROP TABLE "Playlist";
