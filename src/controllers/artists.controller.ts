import {Request, Response} from 'express'
import ArtistModel, {ArtistAttributes} from "../models/artist.model";
import AlbumModel from "../models/album.model";

export const createArtist = async (req: Request, res: Response) => {
    const {name} = req.body

    try {
        const newArtist = await ArtistModel.create({
            name,
        })

        res.status(200).json({msg: "Artist Created Successfully", data: newArtist});
    } catch (err) {
        console.error(err)
        res.status(500).json({msg: `Server Error:${err} `})
    }
}


export const getAllArtists = async (req: Request, res: Response) => {
    try {
        const artists = await ArtistModel.findAll({
            attributes: ["id", "name"],
            include: {
                model: AlbumModel,
                attributes: ["id", "name", "year"]
            }
        });
        res.status(200).json(artists);
    } catch (error) {
        res.status(500).json({error: 'Error retrieving artists'});
    }
}

export const getArtistById = async (req: Request, res: Response) => {
    const {artistId} = req.params
    try {
        const artist = await ArtistModel.findByPk(artistId);
        if (artist) {
            res.status(200).json(artist);
        } else {
            res.status(404).json({error: 'Artist not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Error retrieving artist'});
    }
}

export const updateArtist = async (req: Request, res: Response) => {
    const {artistId} = req.params
    const {name}: ArtistAttributes = req.body
    try {
        const artist = await ArtistModel.findByPk(artistId);
        if (artist) {
            const updatedArtist = await ArtistModel.update({name}, {where: {id: artistId}});

            res.status(200).json(updatedArtist);
        } else {
            res.status(404).json({error: 'Artist not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Error updating the artist'});
    }
}

export const deleteArtist = async (req: Request, res: Response) => {
    const {artistId} = req.params
    try {
        await ArtistModel.destroy({where: {id: artistId}});
        res.status(200).json({message: 'Artist deleted successfully'});
    } catch (error) {
        res.status(500).json({error: 'Error deleting the artist'});
    }
}


export const addAlbumToArtist = async (req: Request, res: Response): Promise<void> => {
    const artistId: number = parseInt(req.params.artistId);
    const albumId: number = parseInt(req.params.albumId);
    try {

        const artist = await ArtistModel.findByPk(artistId);
        const album = await AlbumModel.findByPk(albumId);

        if (!artist || !album) {
            res.status(404).json({error: 'Artist or album not found'});
            return;
        }

        // @ts-ignore
        await artist.addAlbum(album);
        res.status(200).json({message: 'Album added to artist successfully'});
    } catch (error) {
        res.status(500).json({error: 'Error adding album to artist'});
    }
};

export const removeAlbumFromArtist = async (req: Request, res: Response): Promise<void> => {
    const artistId: number = parseInt(req.params.artistId);
    const albumId: number = parseInt(req.params.albumId);
    try {

        const artist = await ArtistModel.findByPk(artistId);
        const album = await AlbumModel.findByPk(albumId);

        if (!artist || !album) {
            res.status(404).json({error: 'Artist or album not found'});
            return;
        }

        // @ts-ignore
        await artist.removeAlbum(album);

        res.status(200).json({message: 'Album removed from artist successfully'});
    } catch (error) {
        res.status(500).json({error: 'Error removing album from artist'});
    }
};
