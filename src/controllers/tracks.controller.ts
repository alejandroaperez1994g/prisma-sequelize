import {Request, Response} from "express";
import TrackModel from "../models/tracks.model";


export const createTrack = async (req: Request, res: Response) => {
    const {albumId} = req.params
    const {name, url} = req.body

    if (!name || !url || !albumId) {
        return res.status(400).json({msg: "Please enter all fields"});
    }

    try {
        const newTrack = await TrackModel.create({
            name,
            url
        })

        // @ts-ignore
        newTrack.setAlbum(albumId)

        res.status(200).json({msg: "Track Created Successfully", data: newTrack});

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: `Server Error:${err} `});
    }
}


export const getTracks = async (req: Request, res: Response) => {
    try {
        const tracks = await TrackModel.findAll()

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
        const deletedTrack = await TrackModel.destroy({
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


