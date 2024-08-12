import React from "react";
import { useState } from "react";
import TabButton from "../TabButton/TabButton.jsx";
import { EXAMPLES } from "../../data-with-examples.js";

export default function Examples() {
  const [tabContent, settabContent] = useState(null);
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    settabContent(selectedButton);
    console.log(tabContent);
  }
  return (
    <>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton
            onSelect={() => handleSelect("components")}
            isSelected={tabContent === "components"}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={tabContent === "jsx"}
            onSelect={() => handleSelect("jsx")}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={tabContent === "props"}
            onSelect={() => handleSelect("props")}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={tabContent === "state"}
            onSelect={() => handleSelect("state")}
          >
            State
          </TabButton>
        </menu>
      </section>
      {tabContent ? (
        <div id="tab-content">
          <h3>{EXAMPLES[tabContent].title}</h3>
          <p>{EXAMPLES[tabContent].description}</p>
          <pre>
            <code>{EXAMPLES[tabContent].code}</code>
          </pre>
        </div>
      ) : (
        <p>Please Select a topic</p>
      )}
    </>
  );
}
