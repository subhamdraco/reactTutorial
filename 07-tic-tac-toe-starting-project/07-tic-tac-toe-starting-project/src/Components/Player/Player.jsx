import React from "react";
import { useState } from "react";

export default function Player({name, symbol}) {
    const [isEditing , setisEditing] = useState(false);
    function handleEditClick(){
        setisEditing(true);
    }
  return (
    <li>
      <span className="player">
        {isEditing ? <input type="text"></input>: <span className="player-name">{name}</span>}
        <spna className="player-symbol">{symbol}</spna>
      </span>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
}
