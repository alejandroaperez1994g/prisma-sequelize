import {Router} from "express";
import {userRoutesSequelize} from "./user.routes";


export const mongoRouter = Router();

mongoRouter.use("/user", userRoutesSequelize)
