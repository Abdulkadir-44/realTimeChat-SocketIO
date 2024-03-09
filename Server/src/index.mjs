import express from "express"
import cors from "cors"
import http from "http"
import { Server } from "socket.io"



const app = express();
const PORT = 3000

app.use(cors())

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
})

io.on("connection", (socket) => {
    console.log("User connected : ", socket.id);

    socket.on("roomId",(data)=>{
        socket.join(data)
    })

    socket.on("message",(data)=>{
        console.log(data);
        socket.to(data.roomId).emit("messageReturn",data)
    })
})

server.listen(PORT, () => {
    console.log("The server is running  : 3000");
})