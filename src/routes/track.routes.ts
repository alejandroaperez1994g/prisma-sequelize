import {Router} from 'express';
import {createTrack, deleteTrack, getTracks} from "../controllers/tracks.controller";


const tracksRoutes = Router();

tracksRoutes
    .post("/add/:albumId", createTrack)
    .get("/", getTracks)
    .delete("/:trackId", deleteTrack)


export default tracksRoutes;
