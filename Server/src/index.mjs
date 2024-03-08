import express from "express"
import cors from "cors"
import http from "http"
import {Server} from "socket.io"

const app = express();
const PORT = 3000 || import.meta.env.PORT
app.use(cors())


const server = http.createServer(app)

const io = new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        methods:["GET","POST"]
    }
})

app.listen(PORT , ()=>{
    console.log("The server is running  : 3000");
})