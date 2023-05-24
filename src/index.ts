import app from './server';
import swaggerDocs from "./utils/swagger";
import connectDB from "./db/connect";

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
    console.log(`Server is running in port ${PORT}`)
    swaggerDocs(app, Number(PORT))
    await connectDB()
})

