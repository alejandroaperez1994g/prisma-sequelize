import {Router} from 'express';
import {addTrackToAlbum, createTrack, deleteTrack, getTracks} from "../controllers/tracks.controller";


const tracksRoutes = Router();

tracksRoutes
    .post("/add", createTrack)
    .patch("/toAlbum", addTrackToAlbum)
    .get("/", getTracks)
    .delete("/", deleteTrack)


export default tracksRoutes;
