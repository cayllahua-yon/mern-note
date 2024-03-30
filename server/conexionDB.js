import mongoose from "mongoose";
import {CONEXION_MONGODB_URI} from "./config.js"

export async function connectDB() {
    try {
        const resultDB = await mongoose.connect(CONEXION_MONGODB_URI);    
        console.log(`conectado a ${resultDB.connection.name}`)
    } catch (error) {
        console.error(error)
    }    
}