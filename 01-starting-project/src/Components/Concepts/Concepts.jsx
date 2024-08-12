import React from "react";
import { CORE_CONCEPTS } from "../../data.js";
import CoreConcepts from "../CoreConcepts/CoreConcepts.jsx";
import "./Concepts.css";

export default function Concepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcepts key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
}
