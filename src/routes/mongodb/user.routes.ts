import {Router} from 'express';
import {getUsers, signUp} from "../../controllers/mongodb/user.controller";


export const userRoutesSequelize = Router();

userRoutesSequelize
    .get('/', getUsers)
    .post("/signup", signUp)



