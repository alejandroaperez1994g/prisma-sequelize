import {Router} from 'express';
import {deleteUser, getUsers, signIn, signUp} from "../controllers/user.controller";

const userRoutes = Router();

userRoutes
    .post("/signin", signIn)
    .post("/signup", signUp)
    .get("/", getUsers)
    .delete("/", deleteUser)


export default userRoutes;
