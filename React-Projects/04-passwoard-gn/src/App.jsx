import React, { useState, useCallback, useEffect, useRef } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += '~!#$%^&*()_+}{":<>';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const passwordRef = useRef(null)

  const passwordCopyToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);


  return (
    <div className="h-screen bg-gray-100 px-4 flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-md bg-gray-950 p-5 mt-6 rounded-2xl shadow-2xl border border-gray-800">
        <div className="p-5 bg-gray-900 rounded-2xl shadow-xl border border-gray-700 space-y-6">
          <h1 className="text-2xl text-gray-100 text-center font-semibold capitalize tracking-wide">
            Random Password Generator
          </h1>

          <div className="flex gap-2 ">
            <input
              ref={passwordRef}
              value={password}
              className="p-3 border border-gray-700 bg-gray-800 text-gray-100 text-xl w-full rounded-xl mt-4 
                 focus:outline-none focus:ring-2 focus:ring-blue-600 tracking-widest"
              type="text"
              placeholder="password"
              readOnly
            />
            <button onClick={passwordCopyToClipboard} className="p-3 rounded-2xl mt-4 bg-gray-800 border cursor-pointer  border-gray-700 text-gray-100">Copy</button>
          </div>

          <div className="p-4 bg-gray-800 rounded-xl shadow-inner border border-gray-700">
            <label className="text-sm font-medium text-gray-300">
              Intensity {length}
            </label>

            <input
              type="range"
              value={length}
              min="0"
              max="22"
              className="w-full mt-3 appearance-none h-2 rounded-lg cursor-pointer 
               bg-gray-300"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
          </div>

          <div
            className="flex flex-row items-center justify-between gap-2 p-3 bg-gray-800 rounded-xl 
                    border border-gray-700 hover:bg-gray-700 transition shadow-sm"
          >
            <label
              htmlFor="numberLab"
              className="text-sm font-medium text-gray-300"
            >
              Number
            </label>


            <input
              defaultChecked={numberAllowed}
              type="checkbox"
              name="numbers"
              id="numberLab"
              className="h-5 w-5 rounded border-gray-500 bg-gray-900 text-blue-500 
                   focus:ring-blue-500 focus:ring-2 cursor-pointer"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
          </div>

          <div
            className="flex flex-row items-center justify-between gap-2 p-3 bg-gray-800 rounded-xl 
                    border border-gray-700 hover:bg-gray-700 transition shadow-sm"
          >
            <label
              htmlFor="charLab"
              className="text-sm font-medium text-gray-300"
            >
              Char
            </label>

            <input
              defaultChecked={charAllowed}
              type="checkbox"
              name="char"
              id="charLab"
              className="h-5 w-5 rounded border-gray-500 bg-gray-900 text-blue-500
                   focus:ring-blue-500 focus:ring-2 cursor-pointer"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
