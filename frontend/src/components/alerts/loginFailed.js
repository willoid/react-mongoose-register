import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Failed () {

    return (
        <div>
            <h1>this user and password don't exist</h1>
            <p>please <Link to="/register">log in</Link></p>
        </div>
    )
}