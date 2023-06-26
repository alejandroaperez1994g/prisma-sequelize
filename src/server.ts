import express from 'express';
import helmet from "helmet";
import morgan from "morgan";
import {mongoRouter} from "./routes/mongodb/router";
import {postgresRouter} from "./routes/postgres/router";


const app = express();

app.use(express.json())
app.use(helmet())
app.use(morgan("dev"))
app.use(express.urlencoded({extended: false}))

app.use("/postgres", postgresRouter)
app.use("/mongo", mongoRouter)

export default app
