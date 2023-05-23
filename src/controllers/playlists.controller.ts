import {Request, Response} from "express"
import prisma from "../db/prismaClient";

export const createPlaylist = async (req: Request, res: Response) => {
    const {name, userId} = req.body
    try {

        const newPlaylist = await prisma.playlist.create({
            data: {
                name,
                userId
            }
        })

        res.status(200).json({msg: "Playlist Created Successfully", data: newPlaylist});

    } catch (err) {
        console.error(err)
        res.status(500).json({msg: `Server Error:${err} `})
    }
}

export const getPlaylists = async (req: Request, res: Response) => {
    try {

        const playlists = await prisma.playlist.findMany({})

        res.status(200).json({msg: "Playlists Fetched Successfully", data: playlists});

    } catch (err) {
        console.error(err)
        res.status(500).json({msg: `Server Error:${err} `})
    }
}

export const deletePlaylist = async (req: Request, res: Response) => {
    const {playlistId} = req.body
    try {
        const deletedPlaylist = await prisma.playlist.delete({
            where: {
                id: playlistId
            }
        })
        res.status(200).json({msg: "Playlist Deleted Successfully", data: deletedPlaylist});
    } catch (err) {
        console.error(err)
        res.status(500).json({msg: `Server Error:${err} `})
    }
}

