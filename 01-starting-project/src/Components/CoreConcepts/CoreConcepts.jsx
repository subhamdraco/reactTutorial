import React from "react";
import "./CoreConcepts.css";

export default function Components({ image, description, title }) {
  return (
    <li>
      <img src={image} alt="..." />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
