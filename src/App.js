import "./styles.css";
import Add from "./Add";

import { useState } from "react";
export default function App() {
  const [modal, setModal] = useState(false);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Add />
      <button
        onClick={() => {
          setModal(true);
        }}
      >
        {" "}
        Open Modal
      </button>
      if(modal)
      {
        <>
          <div
            className="bg"
            onClick={() => {
              setModal(false);
            }}
          ></div>
          <div className="modal-wrapper">
            <h1>Hello World</h1>
          </div>
        </>
      }
    </div>
  );
}

if (true) {
}
