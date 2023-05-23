import {Router} from 'express';
import {createAlbum, deleteAlbum, getAlbums, updateAlbumName} from "../controllers/albums.controller";

const albumRoutes = Router();


albumRoutes
    .post("/", createAlbum)
    .get("/", getAlbums)
    .patch("/:albumId", updateAlbumName)
    .delete("/:albumId", deleteAlbum)


export default albumRoutes;
