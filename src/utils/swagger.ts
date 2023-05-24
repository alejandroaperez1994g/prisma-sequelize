import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import {version} from "../../package.json"
import {Express} from "express";

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Rest API Prisma-Postgres-Express-Typescript",
            version,
            description: "A Express Library API",
        },
        servers: [
            {
                url: "http://localhost:8080",
            }
        ]
    },
    apis: ["./src/routes/*.ts"]
}

export const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app: Express, port: number) => {
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    // app.get("/docs.json", (req, res) => {
    //     res.setHeader("Content-Type", "application/json");
    //     res.send(swaggerSpec)
    // })
    console.info(`Swagger Docs available at http://localhost:${port}/docs`)
}

export default swaggerDocs
