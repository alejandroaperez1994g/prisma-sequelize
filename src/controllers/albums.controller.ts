import {Request, Response} from "express";
import AlbumModel from "../models/album.model";
import TrackModel from "../models/tracks.model";


export const createAlbum = async (req: Request, res: Response) => {
    const {name, releaseDate} = req.body


    if (!name || !releaseDate) return res.status(400).json({msg: "Please enter all fields"});


    try {
        const newAlbum = await AlbumModel.create({
            name,
            year: releaseDate
        })

        res.status(200).json({msg: "Album Created Successfully", data: newAlbum});


    } catch (err) {
        console.error(err)
        res.status(500).json({msg: `Server Error:${err} `})
    }
}


export const getAlbums = async (req: Request, res: Response) => {
    try {

        const albums = await AlbumModel.findAll({
            attributes: ["id", "name", "year"],
            include: {
                model: TrackModel,
                attributes: ["id", "name", "url"]
            }
        })

        res.status(200).json({msg: "Albums Fetched Successfully", data: albums});

    } catch (err) {
        console.error(err)
        res.status(500).json({msg: `Server Error:${err} `})
    }
}


export const deleteAlbum = async (req: Request, res: Response) => {
    const {albumId} = req.params

    if (!albumId) return res.status(400).json({msg: "Please enter all fields"})

    try {

        const deletedAlbum = await AlbumModel.destroy({
            where: {
                id: Number(albumId)
            }
        })

        res.status(200).json({msg: "Album Deleted Successfully", data: deletedAlbum});
    } catch (err) {
        console.error(err)
        res.status(500).json({msg: `Server Error:${err} `})
    }
}

export const updateAlbumName = async (req: Request, res: Response) => {
    const {albumId} = req.params
    const {name} = req.body

    if (!albumId || !name) return res.status(400).json({msg: "Please enter all fields"})

    try {

        const updatedAlbum = await AlbumModel.update({name}, {
            where: {
                id: Number(albumId)
            }
        })

        res.status(200).json({msg: "Album Name Updated Successfully", data: updatedAlbum});

    } catch (err) {
        console.error(err)
        res.status(500).json({msg: `Server Error:${err} `})
    }
}



