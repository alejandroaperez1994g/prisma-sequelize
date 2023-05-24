import express from 'express';
import helmet from "helmet";
import morgan from "morgan";
import * as dotenv from 'dotenv'
import userRoutes from "./routes/user.routes";


dotenv.config()

const app = express();

app.use(express.json())
app.use(helmet())
app.use(morgan("dev"))
app.use(express.urlencoded({extended: false}))

app.use("/user", userRoutes)
// app.use("/track", tracksRoutes)
// app.use("/albums", albumRoutes)
// app.use("/playlist", playlistRouter)

export default app
