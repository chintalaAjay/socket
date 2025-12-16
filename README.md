# socket
Secret Chatting App – A real-time one-to-one chat application built using WebSockets, allowing two users to communicate securely using a unique room ID. Messages are exchanged only within the same room, ensuring session isolation.

# 🔐 Secret Chatting App (WebSockets)

A real-time one-to-one chatting application built using **HTML, CSS, JavaScript, Node.js, and WebSockets (Socket.io)**.  
The app allows two users to communicate securely by joining the same chat room using a **unique room ID**.

---

## 🚀 Features
- Real-time messaging using WebSockets
- One-to-one private chat functionality
- Unique room ID based communication
- Message isolation between different rooms
- Low-latency, event-driven communication
- Simple and clean UI

---

## 🧠 How It Works
1. Users enter a **room ID**
2. Only users with the **same room ID** can join the chat
3. Messages are broadcast **only within that room**
4. Users without the correct room ID cannot send or receive messages

---

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js
- **Real-Time Communication:** WebSockets (Socket.io)

---

## 📂 Project Structure
socket-io/
│
├── client/ # Frontend files
│ ├── index.html
│ ├── style.css
│ └── script.js
│
├── server/ # Backend WebSocket server
│ ├── index.js
│ └── package.json
│
└── README.md

yaml
Copy code

---

## ▶️ How to Run Locally

### 1️⃣ Start the server
```bash
cd server
npm install
node index.js
2️⃣ Open client
Open client/index.html in your browser
(or use Live Server)

🎯 Use Case
Learning WebSockets and real-time systems

Understanding room-based message broadcasting

Practicing event-driven backend concepts

📌 Future Improvements
User authentication

Message encryption

Chat history storage

UI enhancements

