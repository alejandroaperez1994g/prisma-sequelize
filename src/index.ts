import app from './server';
import swaggerDocs from "./utils/swagger";

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("Server is running")
    swaggerDocs(app, Number(PORT))
})
