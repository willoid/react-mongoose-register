import React, { useState, useContext } from "react";
import axios from "axios";
import { loginContext } from "./context";

export default function Chatbox() {
    
    const { userInfo } = useContext(loginContext);


  return (
    <div>
      <h1>chatbox</h1>
      <form>
        <input type="text" id="userPrompter" value={userInfo.name} />
        <input type="text" id="messagePrompter" />
        <input type="text" id="messagePad" name="messagePad" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
