import {DataTypes, Model} from "sequelize";
import {sequelize} from "../db/connect";

interface PlaylistAttributes {
    id?: number,
    name: string
}

class PlaylistModel extends Model<PlaylistAttributes> implements PlaylistAttributes {
    public id?: number;
    public name!: string;
    public createdAt?: Date;
    public updatedAt?: Date;
}


PlaylistModel.init({
    name: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: "playlist"
})


export default PlaylistModel
