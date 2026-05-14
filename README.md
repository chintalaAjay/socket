# Real-Time Chat Application using Socket.IO

This project is a simple real-time chat application built using:

- React.js
- Node.js
- Express.js
- Socket.IO

The application allows multiple users to join chat rooms and exchange messages instantly in real time.

---

# Features

- Real-time messaging
- Multiple chat rooms
- Socket.IO integration
- Client-Server communication
- Instant message broadcasting
- Dynamic room joining

---

# Project Structure

```text
socket-io
 ├── client
 └── server
```

- `client` → React frontend
- `server` → Node.js + Socket.IO backend

---

# Technologies Used

## Frontend
- React.js
- CSS
- Socket.IO Client

## Backend
- Node.js
- Express.js
- Socket.IO
- Nodemon

---

# Installation and Setup

## Step 1: Clone Repository

```bash
git clone https://github.com/chintalaAjay/socket.git
```

---

# Backend Setup

## Open Terminal 1

Go to server folder:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Run server:

```bash
npm start
```

Server runs on:

```text
http://localhost:3001
```

---

# Frontend Setup

## Open Terminal 2

Go to client folder:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Start React app:

```bash
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

# How It Works

1. Users enter a room ID.
2. Socket.IO connects users to the server.
3. Users joining the same room can exchange messages instantly.
4. Messages are broadcasted in real time.

---

# Example Server Logs

```text
Server is running on port 3001
connected jc5W0IwntFWainNTAAAB
user with ID: jc5W0IwntFWainNTAAAB joined room: 1
connected zk2vs5BYOiMupIpDAAAD
user with ID: zk2vs5BYOiMupIpDAAAD joined room: 1
```

---

# Learning Outcomes

Through this project, I learned:

- Real-time communication using Socket.IO
- Client-server architecture
- React and Node.js integration
- Event-based programming
- WebSocket communication
- Managing multiple users and rooms

---

# Future Improvements

- User authentication
- Online user status
- Private messaging
- Message notifications
- Database integration
- Chat history storage

---

# Author

Ajay Chintala

---

# GitHub Profile

https://github.com/chintalaAjay
