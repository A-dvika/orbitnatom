import dotenv from "dotenv"

import connectDB from "./db/index.js";

connectDB()
.then(()=>{
    //handling potential errors
    app.on("error", (err) => {
        console.error("Server Error:", err);
    });

    //start the server
    app.listen(process.env.PORT||8000,()=>{
        console.log(`server is running at ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !!",err)
})