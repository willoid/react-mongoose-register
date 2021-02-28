import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      Hey welcome! I can feel a strong animal in you!
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}
