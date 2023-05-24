import {DataTypes} from "sequelize";
import {sequelize} from "../db/connect";


const UsuarioModel = sequelize.define("Usuario", {
    id: {
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    }

})
