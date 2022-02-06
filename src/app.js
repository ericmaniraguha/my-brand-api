import express from "express"
import mongoose from "mongoose"
import routes from "./routes/index.js"
import cors from "cors";
import morgan from "morgan";
import swaggerUI from 'swagger-ui-express';
import { swaggerDocument } from "../swagger.json";
import 'dotenv/config'
<<<<<<< HEAD



const app = express()

const port = process.env.PORT || 4000
=======
const app = express()
const port = process.env.PORT || 3000
>>>>>>> a4f5e006f73fcd6f329f1a04f2c16abe9f98ace6
const mode = process.env.NODE_ENV || 'development'
try {
    if (mode === "development") {
        mongoose.connect(process.env.DEVELOPMENT_DB, { useNewUrlParser: true })
<<<<<<< HEAD
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

=======
    } else if (mode === "test") {
        mongoose.connect(process.env.TEST_DB, { useNewUrlParser: true })
    } else if (mode === "production") {
        mongoose.connect(process.env.PRODUCTION_DB, { useNewUrlParser: true })
    }
    app.use(express.json())
    app.use("/api/v1/", routes)
>>>>>>> a4f5e006f73fcd6f329f1a04f2c16abe9f98ace6
    app.listen(port, () => {
        console.log(`The server is running on port ${port}`)
    })
} catch (error) {
    console.log(error)
}
export default app