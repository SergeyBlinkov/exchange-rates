import React, { useState } from "react";
import "./Login.css";
import PropTypes from "prop-types";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataUser = {
      user: username.length,
      pass: password.length,
    };
    if (dataUser.user < 1 && dataUser.pass < 1) {
      document.getElementById("err").innerHTML =
        "username and password is required";
    } else if (dataUser.user < 1) {
      document.getElementById("err").innerHTML =
        "username is required";
    }
    else if (dataUser.pass < 1) {
      return (document.getElementById("err").innerHTML =
        "password is required");
    } 
    else {
      const token = await loginUser(username, password);
      setToken(token);
      window.location.reload();
    }
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit} className='logform'>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <p id="err"></p>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
