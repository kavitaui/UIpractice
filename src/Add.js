import React, { useEffect, useState } from "react";
export default function Add() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [item, setItem] = useState(0);
  useEffect(
    () => {
      setItem();
    },
    [count],
    [item]
  );
  useEffect(() => {});

  return (
    <>
      ADD:{item}{" "}
      <button
        onClick={() => {
          setItem(item - 1);
        }}
      >
        {" "}
        addItem
      </button>
      <button
        onClick={() => {
          setItem(item - 1);
        }}
      >
        removeItem
      </button>
      REMOVE:{item}
      <br />
      <br />
    </>
  );
}
