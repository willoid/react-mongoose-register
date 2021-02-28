import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { loginContext } from "./context";




export default function Update() {

    const {userInfo} = useContext(loginContext)

    return (
        <div>
            <h1>Hey {userInfo.name}! I sense the {userInfo.spiritAnimal} is strong in you. well done! if you want to change anything, go <Link to="/update">here</Link></h1>
            <h1><Link to="/chat">chatbox</Link></h1>
        </div>
    )
}