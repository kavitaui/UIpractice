import { useState } from "react";
export default function Blank() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setModal(true);
        }}
      >
        MY MODAL
      </button>

      {modal && (
        <div
          className="bg"
          onClick={() => {
            setModal(false);
          }}
        >
          <div className="my-modal">
            <h1>some text in the Modal..</h1>{" "}
            <button
              className="cross"
              onClick={() => {
                setModal(false);
              }}
            >
              x
            </button>
          </div>
        </div>
      )}
    </>
  );
}
