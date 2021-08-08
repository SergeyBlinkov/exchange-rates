import React, { useState } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Components/Main/Main";

function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
}

function App() {
  const token = getToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
<Router>
    <div>
      {/* <form action='/dashboard'>
    <Button variant='primary'>Click to get Exchange Rates</Button>
    </form> */}

      
        <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/dashboard" component={Dashboard} />
        </Switch>
     
    </div>
    </Router>
  );
}

export default App;
