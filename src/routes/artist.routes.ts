import {Router} from 'express';
import {
    addAlbumToArtist,
    createArtist,
    deleteArtist,
    getAllArtists,
    getArtistById,
    removeAlbumFromArtist,
    updateArtist
} from "../controllers/artists.controller";

const artistRoutes = Router();


artistRoutes
    .post("/", createArtist)
    .get("/", getAllArtists)
    .get("/:artistId", getArtistById)
    .post("/:artistId", updateArtist)
    .delete("/:artistId", deleteArtist)
    .patch("/:artistId/albums/:albumId", addAlbumToArtist)
    .delete("/:artistId/albums/:albumId", removeAlbumFromArtist)

export default artistRoutes
