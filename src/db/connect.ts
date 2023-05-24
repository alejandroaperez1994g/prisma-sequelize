import {Sequelize} from "sequelize";

const databaseURL = process.env.DATABASE_URL_SEQUELIZE || 'postgres://postgres2:secret@localhost:5432/postgres'

export const sequelize = new Sequelize(databaseURL)

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }
}


export default connectDB
