// @ts-nocheck
import { useEffect, useState } from "react";

import Card from "./components/card/Card";
import Navbar from "./components/navbar/Navbar";
import { posts } from "./data";
import { io } from "socket.io-client";

import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setSocket(io("http://localhost:5000"));
  }, []);

  useEffect(() => {
    socket?.emit("newUser", user);
  }, [socket, user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(username);
  };

  return (
    <div className="container">
      {user ? (
        <>
          <Navbar socket={socket} />
          {posts.map((post) => (
            <Card key={post.id} post={post} socket={socket} user={user} />
          ))}
          <span className="username">{user}</span>
        </>
      ) : (
        <form className="login" onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default App;
