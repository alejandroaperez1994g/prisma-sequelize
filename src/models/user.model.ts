import {DataTypes} from "sequelize";
import {sequelize} from "../db/connect";


const UserModel = sequelize.define("User", {
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    }
},{
    freezeTableName: true,
})


export default UserModel
