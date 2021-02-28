import "./App.css";
import Home from "./components/home";
import Register from "./components/register";
import Login from "./components/login";
import Update from "./components/update";
import Profile from "./components/profile"
import Success from "./components/alerts/registerSuccess";
import { loginContext } from "./components/context";
import { useState } from "react";
import Chatbox from "./components/chatbox";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: "", spiritAnimal: "", email: "" });

  return (
    <loginContext.Provider
      value={{ setIsLogged, isLogged, setUserInfo, userInfo }}
    >
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login"> {isLogged ? <Redirect to="/profile" /> :
              <Login />}
            </Route>
            <Route path="/profile">
              {isLogged ? <Profile /> : <Redirect to="/" />}
            </Route>
            <Route path="/update">
              {isLogged ? <Update /> : <Redirect to="/" />}
            </Route>
            <Route path="/chat">
              {isLogged ? <Chatbox /> : <Redirect to="/"/>}
            </Route>
            <Route path="*">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </div>
      </Router>
    </loginContext.Provider>
  );
}

export default App;
