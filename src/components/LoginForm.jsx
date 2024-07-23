import axios from "axios";
import React, { useState } from "react";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    //username | password =>chatengine ->give messages
    //works out =>logged in
    //error - >try with new profile

    const authObject = {
      "Project-ID": "de04efba-efd7-41ea-9e12-b72f85205d83",
      "User-Name": userName,
      "User-Secret": password,
    };
    try {
      //username | password =>chatengine ->give messages
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      //works out =>logged in
      localStorage.setItem("userName", userName);
      localStorage.setItem("password", password);
      window.location.reload();
    } catch (err) {
      //error - >try with new profile
      setError("oops, incorrect credentials.");
    }
  };
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">
          <form action="#" onSubmit={handleSubmit}>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="input"
              placeholder="Enter User Name"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="Enter password"
              required
            />
            <div style={{ alignContent: "center" }}>
              <button type="submit" className="button">
                <span>Start Chatting</span>
              </button>
            </div>
            <h2 className="error">{error}</h2>
          </form>
        </h1>
      </div>
    </div>
  );
};

export default LoginForm;
