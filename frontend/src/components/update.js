import React, { useState, useContext } from "react";
import axios from "axios";
import { loginContext } from "./context";
import UpdateSuccess from "./alerts/updateSuccess";

export default function Update() {
  const [user, setUser] = useState({});
  const { userInfo, setUserInfo } = useContext(loginContext);
  const { isUpdated, setIsUpdated } = useState(false);

  const getValue = (e) => {
    setUser(() => {
      return { ...user, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = (e) => {
 
    e.preventDefault();
    axios({
      method: "PUT",
      url: "/users/update",
      data: user,
    })
      .then((response) => {
        console.log(response);
        response.data.updated ? setIsUpdated(true) : setIsUpdated(false);
        setUserInfo({
          name: response.data.name,
          spiritAnimal: response.data.spiritAnimal,
          email: response.data.email,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main>
      {isUpdated ? (
        <UpdateSuccess/>
      ) : (
        <div>
          <h1>Profile page</h1>
          <p>
            Hi there {userInfo.name}, you beautiful {userInfo.spiritAnimal}.
            Something is different, perhaps?
          </p>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="form-group">
              <label htmlFor="updateEmail">Email address</label>
              <input
                type="email"
                className="form-control"
                id="updateEmail"
                placeholder={userInfo.email}
                name="email"
                onChange={getValue}
              />
            </div>
            <div className="form-group">
              <label htmlFor="updatePassword">Password</label>
              <input
                type="password"
                className="form-control"
                id="updatePassword"
                placeholder="Password"
                name="password"
                onChange={getValue}
              />
            </div>
            <div className="form-group">
              <label htmlFor="updateNeWPassword">New Password</label>
              <input
                type="Password"
                className="form-control"
                id="updateNewPassword"
                placeholder="New Password"
                name="newPassword"
                onChange={getValue}
              />
            </div>
            <div className="form-group">
              <label htmlFor="updateName">Name</label>
              <input
                type="text"
                className="form-control"
                id="updateName"
                placeholder={userInfo.name}
                name="name"
                onChange={getValue}
              />
            </div>
            <div className="form-group">
              <label htmlFor="updateSpiritAnimal">Spirit Animal</label>
              <input
                type="text"
                className="form-control"
                id="updateSpiritAnimal"
                placeholder={userInfo.spiritAnimal}
                name="spiritAnimal"
                onChange={getValue}
              />
            </div>
            <input type="submit" value="submit" className="btn btn-primary" />
          </form>
        </div>
      )}
    </main>
  );
}
