// whenever you talk with database always use async await and try -catch.
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT  || 8000, ()=>{
        console.log(`Server is runnint  at port : ${process.env.PORT}`);
        
    })
})
.catch((err)=>{
    console.log(`MongoDB connection failed  !!!${err}`);
    
})











// import express from "express";

// (async ()=>{
//     try {
//       await  mongoose.connect(`${process.env.MONGODV_URI}/${DB_NAME}`)
//       app.on("error",(error)=>{
//         console.log("ERR:", error);
//         throw error
//       })
//       app.listen(process.env.PORT, ()=>{
//         console.log(`App is listening on port ${process.env.PORT}`)
//       })
//     } catch (error) {
//         console.error("ERROR:", error)
//         throw error
//     }
// })()