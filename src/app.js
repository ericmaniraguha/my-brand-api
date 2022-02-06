import express from "express"
import mongoose from "mongoose"
import routes from "./routes/index.js"
import cors from "cors";
import morgan from "morgan";
import swaggerUI from 'swagger-ui-express';
import { swaggerDocument } from "../swagger.json";
import 'dotenv/config'



const app = express()

const port = process.env.PORT || 4000
const mode = process.env.NODE_ENV || 'development'
try {
    if (mode === "development") {
        mongoose.connect(process.env.DEVELOPMENT_DB, { useNewUrlParser: true })
        .then(res =>{
            console.log("Dev DB Connected")
        })
    } else if (mode === "test") {
        mongoose.connect(process.env.TEST_DB, { useNewUrlParser: true })  
        .then(res =>{
            console.log("Dev DB Connected")
        })
    } else if (mode === "production") {
        mongoose.connect(process.env.PRODUCTION_DB, { useNewUrlParser: true })
        .then(res =>{
            console.log("Dev DB Connected")
        })
    }
    app.use(express.json());
    app.use(cors());
    app.use(morgan("dev"));

    app.get("/",(req, res) =>{
        res.json({message: "Welcome to our API"})
    });
    
    app.use("/api/v1/", routes);
    app.use("api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

    app.use("",(req, res, next) =>{
           res.status(404).json({
               error:"Page not found"
           });
    });

    app.listen(port, () => {
        console.log(`The server is running on port ${port}`)
    })
} catch (error) {
    console.log(error)
}
export default app