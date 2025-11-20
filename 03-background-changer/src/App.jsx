import React, { useState } from "react";

const App = () => {
  const [color, setcolor] = useState("olive");
  return (
    <div
      className="h-screen w-full duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-row gap-4 justify-center items-center h-full flex-wrap">
        <button
          style={{ backgroundColor: "yellow" }}
          className=" text-white px-3 py-2 rounded-2xl border-3 border-white"
          onClick={() => setcolor("yellow")}
        >
          Yellow
        </button>
        <button
          style={{ backgroundColor: "purple" }}
          className=" text-white px-3 py-2 rounded-2xl border-3 border-white"
          onClick={() => setcolor("purple")}
        >
          Purple
        </button>
        <button
          style={{ backgroundColor: "pink" }}
          className=" text-white px-3 py-2 rounded-2xl border-3 border-white"
          onClick={() => setcolor("pink")}
        >
          Pink
        </button>
        <button
          style={{ backgroundColor: "green" }}
          className=" text-white px-3 py-2 rounded-2xl border-3 border-white"
          onClick={() => setcolor("green")}
        >
          Green
        </button>
        <button
          style={{ backgroundColor: "blue" }}
          className=" text-white px-3 py-2 rounded-2xl border-3 border-white"
          onClick={() => setcolor("blue")}
        >
          Blue
        </button>
        <button
          style={{ backgroundColor: "red" }}
          className=" text-white px-3 py-2 rounded-2xl border-3 border-white"
          onClick={() => setcolor("red")}
        >
          Red
        </button>
        <button
          style={{ backgroundColor: "orange" }}
          className=" text-white px-3 py-2 rounded-2xl border-3 border-white"
          onClick={() => setcolor("orange")}
        >
          Orange
        </button>
        <button
          style={{ backgroundColor: "black" }}
          className=" text-white px-3 py-2 rounded-2xl border-3 border-white"
          onClick={() => setcolor("black")}
        >
          Black
        </button>
        <button
          style={{ backgroundColor: "white", color: "black" }}
          className=" px-3 py-2 rounded-2xl border-3 border-white"
          onClick={() => setcolor("white")}
        >
          White
        </button>
        <button
          style={{ backgroundColor: "gray" }}
          className=" text-white px-3 py-2 rounded-2xl border-3 border-white"
          onClick={() => setcolor("gray")}
        >
          Gray
        </button>
      </div>
    </div>
  );
};

export default App;
