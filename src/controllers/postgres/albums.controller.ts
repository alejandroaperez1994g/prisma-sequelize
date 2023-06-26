import {Request, Response} from "express";
import {postgresClient as prisma} from "../../db/prismaClient";


export const createAlbum = async (req: Request, res: Response) => {
    const {name, releaseDate} = req.body


    if (!name || !releaseDate) return res.status(400).json({msg: "Please enter all fields"});


    try {
        const newAlbum = await prisma.album.create({
            data: {
                name,
                releaseDate
            }
        })

        res.status(200).json({msg: "Album Created Successfully", data: newAlbum});


    } catch (err) {
        console.error(err)
        res.status(500).json({msg: `Server Error:${err} `})
    }
}


export const getAlbums = async (req: Request, res: Response) => {
    try {

        const albums = await prisma.album.findMany({
            select: {
                id: true,
                name: true,
                releaseDate: true,
                tracks: {
                    select: {
                        id: true,
                        name: true,
                    }
                }
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

        const deletedAlbum = await prisma.album.delete({
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

        const updatedAlbum = await prisma.album.update({
            where: {
                id: Number(albumId)
            },
            data: {
                name: name
            }
        })

        res.status(200).json({msg: "Album Name Updated Successfully", data: updatedAlbum});

    } catch (err) {
        console.error(err)
        res.status(500).json({msg: `Server Error:${err} `})
    }
}



