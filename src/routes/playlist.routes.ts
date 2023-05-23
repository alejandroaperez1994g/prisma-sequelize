import {Router} from "express";
import {createPlaylist, deletePlaylist, getPlaylists} from "../controllers/playlists.controller";

const playlistRouter = Router();

playlistRouter
    .get("/", getPlaylists)
    .post("/", createPlaylist)
    .delete("/", deletePlaylist)


export default playlistRouter;
