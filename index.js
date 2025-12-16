const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    }
});

io.on("connection", (socket) => {
    console.log(" connected", socket.id);

    socket.on("join_room", (data) => {
        socket.join(data);
        console.log(`user with ID: ${socket.id} joined room: ${data}`);

    });
    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);

    });

    socket.on("start_typing", (data) => {
        
        // msg
        // console.log(`user with ID: ${socket.id} is typing in room: ${data.room}`);
        // timestamps
        socket.to(data.room).emit("typing", data);
    })

    socket.on("stop_typing", (data) => {
        // msg
        // console.log(`user with ID: ${socket.id} stopped typing in room: ${data.room}`);
        // timestamps
        socket.to(data.room).emit("stop_typing", data);
    })


    socket.on("disconnect", () => {
        console.log(" disconnected", socket.id);
    });
});

server.listen(3001, () => {
    console.log("Server is running on port 3001");
});