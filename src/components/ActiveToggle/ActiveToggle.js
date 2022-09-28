import { useState } from "react";
import "./ActiveToggle.css";

function ActiveToggle() {
  const [active, setActive] = useState(false);

  function boxColorHandler() {
    setActive(!active);
    const boxEl = document.querySelector(".box");
    return boxEl.classList.toggle("box--active");
  }

  return (
    <main>
      <div className="box" />
      <button type="button" onClick={boxColorHandler}>
        {!active ? "Activate" : "Deactivate"}
      </button>
    </main>
  );
}

export default ActiveToggle;
