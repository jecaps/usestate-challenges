import { useState } from "react";
import "./ActiveToggle.css";

function ActiveToggle() {
  const [active, setActive] = useState(false);

  function boxColorHandler() {
    setActive(!active);
  }

  return (
    <main>
      <div className={`box ${active ? "box--active" : ""}`} />
      <button type="button" onClick={boxColorHandler}>
        {!active ? "Activate" : "Deactivate"}
      </button>
    </main>
  );
}

export default ActiveToggle;
