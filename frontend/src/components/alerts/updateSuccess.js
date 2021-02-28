import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { loginContext } from "../context";


export default function UpdateSuccess () {

    const {userInfo} = useContext(loginContext)

    return (
        <div>
            <h1>You updated your profile successfully. Go get them {userInfo.spiritAnimal}! See your <Link to="/profile">profile</Link></h1>
        </div>
    )
}