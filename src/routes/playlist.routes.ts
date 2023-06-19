import {Router} from "express";
import {createPlaylist, deletePlaylist, getPlaylists, updatePlaylist} from "../controllers/playlists.controller";

const playlistRouter = Router();

playlistRouter
    .get("/", getPlaylists)
    .post("/:userId", createPlaylist)
    .put("/:playlistId", updatePlaylist)
    .delete("/:playlistId", deletePlaylist)


export default playlistRouter;
