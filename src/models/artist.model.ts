import {DataTypes, Model} from "sequelize";
import {sequelize} from "../db/connect";
import AlbumModel from "./album.model";


export interface ArtistAttributes {
    id?: number,
    name: string
}

class ArtistModel extends Model<ArtistAttributes> implements ArtistAttributes {
    public id?: number;
    public name!: string;
    public createdAt?: Date;
    public updatedAt?: Date;
}

ArtistModel.init({
        name: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        modelName: "artist"
    }
)


ArtistModel.belongsToMany(AlbumModel, {through: "artist_album"})
AlbumModel.belongsToMany(ArtistModel, {through: "artist_album"})

export default ArtistModel


