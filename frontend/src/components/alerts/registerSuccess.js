import React from "react";
import { Link } from "react-router-dom";


export default function Success () {

    return (
        <div>
            <h1>Hey! Thanks for registering! you can <Link to="/login">log in</Link> now</h1>
        </div>
    )
}