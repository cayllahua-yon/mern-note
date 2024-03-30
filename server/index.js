import {connectDB} from "./conexionDB.js"
import {PORT} from "./config.js"
import app from "./app.js"

// Setting
connectDB();

// Middlewares
// Routes

//Static files

//Starting the server
app.listen(PORT);
console.log("servidor inicializado", PORT)