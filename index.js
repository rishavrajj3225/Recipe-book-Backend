import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path: "./.env",
});




const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerData = await readFile(path.join(__dirname, 'swagger-output.json'), 'utf-8');
const swaggerFile = JSON.parse(swaggerData);
import swaggerUi from 'swagger-ui-express';
import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

connectDB()
    .then(()=>{
        app.on("error", (error) => {
            console.error("ERROR: ", error);
            throw error;
        });
        app.listen(process.env.PORT || 3001, () => {
            console.log(`APP listening on ${process.env.PORT}`);
        });
    })
    .catch((error) => {
         console.log("FAILED TO CONNECT DB!!!", error);
    });