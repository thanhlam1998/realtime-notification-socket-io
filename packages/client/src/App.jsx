import { useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(username);
  }

  return (
    <div className="container">
      {user ? (
        <> 
          <Navbar />
          <Card />
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
