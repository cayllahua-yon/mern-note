import express from "express"
import morgan from "morgan";
import notesRoutes from "./routes/notes.routes.js"
import fileUpload from "express-fileupload"

// Setting
const app = express()


// Middlewares
app.use(morgan("dev"))
app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "./upload"
}))

// Routes
app.use('/api/', notesRoutes);


//Static files --
//Starting the server --

export default app