import {Router} from 'express';
import {createAlbum, deleteAlbum, getAlbums, updateAlbumName} from "../../controllers/postgres/albums.controller";

export const albumRoutes = Router();


albumRoutes
    .post("/", createAlbum)
    .get("/", getAlbums)
    .patch("/:albumId", updateAlbumName)
    .delete("/:albumId", deleteAlbum)


export default albumRoutes;
