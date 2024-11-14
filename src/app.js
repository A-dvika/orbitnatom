import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
const app=express()
app.use(cors(
    {
        origin:process.env.CORS_ORIGIN,
        credentials:true,
        allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"], // Allowed headers
        exposedHeaders: ["Content-Length", "X-Content-Range"],  // Headers exposed to the client
        preflightContinue: false,  // If true, passes preflight request to next handler
        optionsSuccessStatus: 204,  // Status code for OPTIONS requests
        maxAge: 86400  // Time (in seconds) preflight request can be cached (1 day)

    }
))

app.use(express.json({limit:"10kb"}))
app.use(express.urlencoded({extended:true,limit:"10kb"}))
app.use(express.static("public"))
app.use(cookieParser())


export { app };