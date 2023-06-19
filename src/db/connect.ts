import {Sequelize} from "sequelize";
import * as dotenv from 'dotenv'

dotenv.config()

const databaseURL = process.env.DATABASE_URL_SEQUELIZE || 'postgres://postgres2:secret@localhost:5432/postgres'

export const sequelize = new Sequelize(databaseURL, {
    logging: true
})

const connectDB = async () => {
    try {
        await sequelize.authenticate();

        sequelize.sync({alter: true}).then(() => {
            console.log("Tables Updated")
        }).then((err) => {
            console.log(err)
        })
        console.log('Connection has been established successfully.');
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }
}


export default connectDB
