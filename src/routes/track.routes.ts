import {Router} from 'express';
import {addTrackToAlbum, createTrack, deleteTrack, getTracks} from "../controllers/tracks.controller";


const tracksRoutes = Router();

tracksRoutes
    .post("/add", createTrack)
    .patch("/toAlbum/:trackId", addTrackToAlbum)
    .get("/", getTracks)
    .delete("/:trackId", deleteTrack)


export default tracksRoutes;
