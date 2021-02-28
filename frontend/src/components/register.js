import React, { useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Success from "./alerts/registerSuccess";

export default function Register() {
  const [user, setUser] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);
  const [message, setMessage] = useState(false);
  const [warning, setWarning] = useState(false);

  const getValue = (e) => {
    setUser(() => {
      return { ...user, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    setWarning(false);
    setMessage(false);
    e.preventDefault();
    axios({
      method: "POST",
      url: "/users/add",
      data: user,
    })
      .then((response) => {
        setMessage(!response.data.register);
        setIsRegistered(response.data.register);
         /* response.data.register === true ? <Success/> : <Failed/> */
      })
      .catch((error) => {
        setWarning(true);
        console.log(error);
      });
  };

  return (
    <main>
      {isRegistered ? (
        <Success />
      ) : 
        <div>
          <h1>Register</h1>
          <Form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <Form.Group>
              <label htmlFor="registerEmail">Email address</label>
              <input
                type="email"
                required
                className="form-control"
                id="registerEmail"
                placeholder="Enter email"
                name="email"
                onChange={getValue}
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="registerPassword">Password</label>
              <input
                type="password"
                required
                className="form-control"
                id="registerPassword"
                placeholder="Password"
                name="password"
                onChange={getValue}
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="registerName">Name</label>
              <input
                type="text"
                required
                className="form-control"
                id="registerName"
                placeholder="Name"
                name="name"
                onChange={getValue}
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="registerSpiritAnimal">Spirit Animal</label>
              <input
                type="text"
                required
                className="form-control"
                id="registerSpiritAnimal"
                placeholder="Spirit Animal"
                name="spiritAnimal"
                onChange={getValue}
              />
            </Form.Group>
            <input type="submit" value="submit" className="btn btn-primary" />
          </Form>
          <p>
            already registered? please <Link to="./login">log in</Link>
          </p>
        </div>
      }
      {message ? <div>
            <h1>this email is already registered</h1>
        </div> : null}
      {warning ? <p>server is ooo</p> : null}
    </main>
  );
}
