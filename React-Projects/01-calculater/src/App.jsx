import React from "react";
import { useState } from 'react';
import { twMerge } from "tailwind-merge";

function CalculatorButton({ children, className }) {
  return (
    <button
      className={twMerge(
        "p-4 bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-90 transition-all duration-100  " +
          className
      )}
    >
      {children}
    </button>
  );
}
function App() {
  
  return (
    <div className="bg-sky-950 h-screen flex justify-center items-center ">
      <div className="bg-white p-5 rounded-2xl">
        <div className="bg-gray-100 text-3xl shadow-sm mb-6 rounded-xl p-3 text-right  ">0</div>
        <div className="grid grid-cols-4 gap-5">
          <CalculatorButton className="bg-red-100 text-red-400">
            AC
          </CalculatorButton>
          <CalculatorButton>+/-</CalculatorButton>
          <CalculatorButton>%</CalculatorButton>
          <CalculatorButton className="bg-orange-500 text-white">
            /
          </CalculatorButton>

          <CalculatorButton>7</CalculatorButton>
          <CalculatorButton>8</CalculatorButton>
          <CalculatorButton>9</CalculatorButton>
          <CalculatorButton className="bg-orange-500 text-white">
            *
          </CalculatorButton>

          <CalculatorButton>4</CalculatorButton>
          <CalculatorButton>5</CalculatorButton>
          <CalculatorButton>6</CalculatorButton>
          <CalculatorButton className="bg-orange-500 text-white">
            -
          </CalculatorButton>

          <CalculatorButton>1</CalculatorButton>
          <CalculatorButton>2</CalculatorButton>
          <CalculatorButton>3</CalculatorButton>
          <CalculatorButton className="bg-orange-500 text-white">
            +
          </CalculatorButton>

          <CalculatorButton className="col-span-2 aspect-auto">0</CalculatorButton>
          <CalculatorButton>.</CalculatorButton>
          <CalculatorButton className="bg-green-400 text-white">
            =
          </CalculatorButton>
        </div>
      </div>
    </div>
  );
}

export default App;
