import {DataTypes, Model} from "sequelize";
import {sequelize} from "../db/connect";
import TrackModel from "./tracks.model";


interface AlbumAttributes {
    id?: number,
    name: string,
    year: number
}

class AlbumModel extends Model<AlbumAttributes> implements AlbumAttributes {
    public id?: number;
    public name!: string;
    public year!: number;
    public createdAt?: Date;
    public updatedAt?: Date;
}


AlbumModel.init({
    name: {
        type: DataTypes.STRING
    },
    year: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize,
    modelName: "album"
})

AlbumModel.hasMany(TrackModel, {onDelete: "CASCADE", foreignKey: "albumId", sourceKey: "id"})
TrackModel.belongsTo(AlbumModel, {onDelete: "CASCADE", foreignKey: "albumId", targetKey: "id"})


export default AlbumModel
