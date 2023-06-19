import {Request, Response} from "express"
import PlaylistModel from "../models/playlist.model";
import UserModel from "../models/user.model";


export const createPlaylist = async (req: Request, res: Response) => {
    const {userId} = req.params
    const {name} = req.body

    try {
        const user = await UserModel.findOne({
            where: {
                id: Number(userId)
            }
        })

        if (!user) return res.status(404).json({msg: "User not found"})


        const newPlaylist = await PlaylistModel.create({
            name
        })


        // @ts-ignore
        newPlaylist.setUser(userId)

        res.status(200).json({msg: "Playlist Created Successfully", data: newPlaylist});

    } catch (err) {
        console.error(err)
        res.status(500).json({msg: `Server Error:${err} `})
    }
}

export const getPlaylists = async (req: Request, res: Response) => {
    try {

        //podemos seleccionar solo los campos que queremos mostrar usando attributes
        const playlists = await PlaylistModel.findAll({
            attributes: ["id", "name"],
            include: {
                model: UserModel,
                attributes: ["id", "name", "email"]
            }
        })

        res.status(200).json({msg: "Playlists Fetched Successfully", data: playlists});

    } catch (err) {
        console.error(err)
        res.status(500).json({msg: `Server Error:${err} `})
    }
}

export const deletePlaylist = async (req: Request, res: Response) => {
    const {playlistId} = req.params
    try {
        const deletedPlaylist = await PlaylistModel.destroy({
            where: {
                id: Number(playlistId)
            }
        })
        console.log({deletedPlaylist})

        res.status(204).json({msg: "Playlist Deleted Successfully"});
    } catch (err) {
        console.error(err)
        res.status(500).json({msg: `Server Error:${err} `})
    }
}

export const updatePlaylist = async (req: Request, res: Response) => {
    const {playlistId} = req.params
    const {name} = req.body

    try {
        await PlaylistModel.update({name}, {
            where: {
                id: Number(playlistId)
            }
        })

        res.status(200).json({msg: "Playlist Updated Successfully"});
    } catch (err) {
        console.error(err)
        res.status(500).json({msg: `Server Error:${err} `})
    }

}
