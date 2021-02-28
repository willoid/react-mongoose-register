import React, { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { loginContext } from "./context";

export default function Login() {
  const [user, setUser] = useState({});
  const {setIsLogged, setUserInfo} = useContext(loginContext)
  


  const getValue = (e) => {
    setUser(() => {
      return { ...user, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "/users/login",
      data: user,
    })
      .then((response) => {
        console.log(response);
        response.data.logged ? setIsLogged(true) : setIsLogged(false);
        setUserInfo({name:response.data.name, spiritAnimal: response.data.spiritAnimal, email:response.data.email})
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main>
      <h1>Login</h1>
      <form onSubmit={(e)=>{submitHandler(e)}}>
        <div className="form-group">
          <label htmlFor="loginEmail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="registerEmail"
            placeholder="Enter email"
            name="email"
            onChange={getValue}
          />
        </div>
        <div className="form-group">
          <label htmlFor="loginPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="loginPassword"
            placeholder="Password"
            name="password"
            onChange={getValue}
          />
        </div>
        <input type="submit" value="submit" className="btn btn-primary"/>
      </form>
      <p>
        not a member yet? please <Link to="/register">register</Link>
      </p>
    </main>
  );
}
