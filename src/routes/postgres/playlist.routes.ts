import {Router} from "express";
import {createPlaylist, deletePlaylist, getPlaylists} from "../../controllers/postgres/playlists.controller";

export const playlistRouter = Router();

playlistRouter
    .get("/", getPlaylists)
    .post("/:userId", createPlaylist)
    .delete("/:playlistId", deletePlaylist)


export default playlistRouter;
