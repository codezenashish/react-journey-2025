import React from "react";
import { useState } from 'react';
import { twMerge } from "tailwind-merge";

function CalculatorButton({ children, className, ...props }) {
  return (
    <button
      className={twMerge(
        "p-4 bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-90 transition-all duration-100  " +
        className
      )}
      {...props}

    >
      {children}
    </button>
  );
}
function App() {

  const [curVal, setCurVal] = useState('')

  function handelDecimalButton(i) {
    setCurVal((prev) => prev + i)

  }

  function handelClearButton() {
    setCurVal('')
  }

  function handelPercent() {
    setCurVal((prev) => prev / 100)

  }

  function handelSqrt() {
    setCurVal((prev) => Math.sqrt(prev))
  }

  



  return (
    <div className="bg-sky-950 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white w-[360px] sm:w-[420px] p-6 rounded-2xl shadow-xl">
        <div className="bg-gray-100 text-3xl font-mono shadow-sm mb-6 rounded-xl px-4 py-4 text-right min-h-16 overflow-x-auto wrap-break-words">
          {curVal || "0"}
        </div>

        <div className="grid grid-cols-4 gap-3">
          <CalculatorButton className="bg-red-100 text-red-600 font-semibold" onClick={handelClearButton}>
            AC
          </CalculatorButton>
          <CalculatorButton className="bg-gray-50">+/-</CalculatorButton>
          <CalculatorButton className="bg-gray-50" onClick={handelPercent}>
            %
          </CalculatorButton>
          <CalculatorButton className="bg-orange-500 text-white font-semibold">
            ÷
          </CalculatorButton>

          <CalculatorButton onClick={() => handelDecimalButton('7')} className="bg-gray-50">
            7
          </CalculatorButton>
          <CalculatorButton onClick={() => handelDecimalButton('8')} className="bg-gray-50">
            8
          </CalculatorButton>
          <CalculatorButton onClick={() => handelDecimalButton('9')} className="bg-gray-50">
            9
          </CalculatorButton>
          <CalculatorButton className="bg-orange-500 text-white font-semibold">
            ×
          </CalculatorButton>

          <CalculatorButton onClick={() => handelDecimalButton('4')} className="bg-gray-50">
            4
          </CalculatorButton>
          <CalculatorButton onClick={() => handelDecimalButton('5')} className="bg-gray-50">
            5
          </CalculatorButton>
          <CalculatorButton onClick={() => handelDecimalButton('6')} className="bg-gray-50">
            6
          </CalculatorButton>
          <CalculatorButton className="bg-orange-500 text-white font-semibold">
            −
          </CalculatorButton>

          <CalculatorButton onClick={() => handelDecimalButton('1')} className="bg-gray-50">
            1
          </CalculatorButton>
          <CalculatorButton onClick={() => handelDecimalButton('2')} className="bg-gray-50">
            2
          </CalculatorButton>
          <CalculatorButton onClick={() => handelDecimalButton('3')} className="bg-gray-50">
            3
          </CalculatorButton>
          <CalculatorButton className="bg-orange-500 text-white font-semibold">
            +
          </CalculatorButton>

          <CalculatorButton onClick={() => handelDecimalButton('0')} className="col-span-2 aspect-auto text-left pl-6 bg-gray-50">
            0
          </CalculatorButton>
          <CalculatorButton onClick={() => handelDecimalButton('.')} className="bg-gray-50">
            .
          </CalculatorButton>
          <CalculatorButton className="bg-green-500 text-white font-semibold">
            =
          </CalculatorButton>
        </div>
      </div>
    </div>
  );
}

export default App;
