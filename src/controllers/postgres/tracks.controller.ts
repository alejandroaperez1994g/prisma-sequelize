import {Request, Response} from "express";
import {postgresClient as prisma} from "../../db/prismaClient";


export const createTrack = async (req: Request, res: Response) => {
    const {name, url} = req.body

    if (!name || !url) {
        return res.status(400).json({msg: "Please enter all fields"});
    }

    try {
        const newTrack = await prisma.track.create({
            data: {
                name,
                url,
            }
        })

        res.status(200).json({msg: "Track Created Successfully", data: newTrack});

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: `Server Error:${err} `});
    }
}

export const addTrackToAlbum = async (req: Request, res: Response) => {
    const {trackId} = req.params
    const {albumId} = req.body

    try {

        const updatedAlbum = await prisma.track.update({
            where: {
                id: Number(trackId)
            },
            data: {
                albumId: albumId
            }
        })

        res.status(200).json({msg: "Album Tracks Updated Successfully", data: updatedAlbum});

    } catch (err) {
        console.error(err)
        res.status(500).json({msg: `Server Error:${err} `})
    }
}

export const getTracks = async (req: Request, res: Response) => {
    try {
        const tracks = await prisma.track.findMany({
            orderBy: {
                id: "asc"
            }
        })
        res.status(200).json({msg: "Tracks Fetched Successfully", data: tracks});
    } catch (err) {
        console.log(err)
        res.status(500).json({msg: `Server Error:${err} `})
    }
}

export const deleteTrack = async (req: Request, res: Response) => {
    const {trackId} = req.params

    if (!trackId) return res.status(400).json({msg: "Please enter all fields"})
    try {
        const deletedTrack = await prisma.track.delete({
            where: {
                id: Number(trackId)
            }
        })

        res.status(200).json({msg: "Track Deleted Successfully", data: deletedTrack});
    } catch (err) {
        console.error(err)
        res.status(500).json({msg: `Server Error:${err} `})
    }
}


