import {Request, Response} from "express";
import UserModel from "../models/user.model";

import {comparePassword, hashPassword} from "../utils/bcrypt";

export const signIn = async (req: Request, res: Response) => {
    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(400).json({msg: "Please enter all fields"});
    }

    try {
        const user = await UserModel.findOne({
            where: {
                email
            }
        })

        if (!user) {
            return res.status(400).json({msg: "User Does not exist"});
        }

        const isMatch = await comparePassword(String(password), String(user.dataValues.password));

        if (!isMatch) {
            return res.status(400).json({msg: "Invalid credentials"});
        }

        res.status(200).json({msg: "SignIn Successful"});
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
        const user = await UserModel.findOne({
            where: {
                email
            }
        })

        if (user) {
            return res.status(409).json({msg: "User already exists"});
        }

        const newUser = await UserModel.create({
            name,
            email,
            password: await hashPassword(String(password))
        })

        res.status(200).json({msg: "SignUp Successful", data: {newUser}});
    } catch (err) {
        console.error(err);
        res.status(500).json({msg: `Server Error:${err} `});
    }
}

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await UserModel.findAll()

        res.status(200).json({msg: "Users Fetched Successfully", data: users});

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: `Server Error:${err} `});
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const {userId} = req.params;
    try {
        await UserModel.destroy({
            where: {
                id: userId
            },
        })


        res.status(204).json({msg: "User Deleted Successfully"});
    } catch (err) {
        console.error(err);
        res.status(500).json({msg: `Server Error:${err} `});
    }
}
