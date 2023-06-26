import {Router} from "express";
import albumRoutes from "./album.routes";
import playlistRoutes from "./playlist.routes";
import {tracksRoutes} from "./track.routes";
import {userRoutes} from "./user.routes";


export const postgresRouter = Router();

postgresRouter.use("/album", albumRoutes)
postgresRouter.use("/playlist", playlistRoutes)
postgresRouter.use("/track", tracksRoutes)
postgresRouter.use("/user", userRoutes)
