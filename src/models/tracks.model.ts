import {DataTypes, Model} from "sequelize";
import {sequelize} from "../db/connect";

interface TrackAttributes {
    id?: number,
    name: string,
    url: string
}

class TrackModel extends Model<TrackAttributes> implements TrackAttributes {
    public id?: number;
    public name!: string;
    public url!: string;
    public createdAt?: Date;
    public updatedAt?: Date;
}

TrackModel.init({
    name: {
        type: DataTypes.STRING
    },
    url: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: "track"
})


export default TrackModel
