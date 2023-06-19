import {DataTypes, Model} from "sequelize";
import {sequelize} from "../db/connect";
import PlaylistModel from "./playlist.model";

interface UserAttributes {
    id?: number,
    name: string,
    email: string,
    password: string
}

class UserModel extends Model<UserAttributes> implements UserAttributes {
    public id?: number;
    public name!: string;
    public email!: string;
    public password!: string;
    public createdAt?: Date;
    public updatedAt?: Date;
}

UserModel.init({
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    }
}, {
    sequelize,
    modelName: "user"
})


//ONE TO ONE
// UserModel.hasOne(PlaylistModel, {as: "playlist", foreignKey: "userID", onDelete: "CASCADE"})
// PlaylistModel.belongsTo(UserModel, {as: "user", foreignKey: "userID", onDelete: "CASCADE"})

//ONE TO MANY
UserModel.hasMany(PlaylistModel, {onDelete: "CASCADE", foreignKey: "userId", sourceKey: "id"})
PlaylistModel.belongsTo(UserModel, {onDelete: "CASCADE", foreignKey: "userId", targetKey: "id"})


// // Importante añadir las columnas de createdAt & updatedAt
// // Podemos eliminar las columnas de createdAt & updatedAt en el modelo usando el siguiente código:
// // {timestamps: false}
export default UserModel
