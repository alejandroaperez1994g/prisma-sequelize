import {Request, Response} from "express";
import {mongoClient as prisma} from "../../db/prismaClient";
import {comparePassword, hashPassword} from "../../utils/bcrypt";

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                playlists: {
                    select: {
                        id: true,
                        name: true,
                    }
                }
            }
        })

        res.status(200).json({msg: "Users Fetched Successfully", data: users});

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: `Server Error:${err} `});
    }
}


export const signUp = async (req: Request, res: Response) => {
    const {name, email, password} = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({msg: "Please enter all fields"});
    }

    try {
        // const user = await prisma.user.findUnique({
        //     where: {
        //         email
        //     }
        // });
        //
        // if (user) {
        //     return res.status(409).json({msg: "User already exists"});
        // }

        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: await hashPassword(String(password)),
            }
        });

        res.status(200).json({msg: "SignUp Successful", data: {newUser}});
    } catch (err) {
        console.error(err);
        res.status(500).json({msg: `Server Error:${err} `});
    }
}

export const signIn = async (req: Request, res: Response) => {
    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(400).json({msg: "Please enter all fields"});
    }

    try {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if (!user) {
            return res.status(400).json({msg: "User Does not exist"});
        }

        const isMatch = await comparePassword(String(password), String(user.password));

        if (!isMatch) {
            return res.status(400).json({msg: "Invalid credentials"});
        }

        res.status(200).json({msg: "SignIn Successful"});
    } catch (err) {
        console.error(err);
        res.status(500).json({msg: `Server Error:${err} `});
    }
}
