import React, { useCallback, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkhlmnopqrstuvwxyz";
    let number = "0123456789";
    let specialCharcter = "!@#$%^&*()";
    if (numberAllowed) str += number;
    if (charAllowed) str += specialCharcter;
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str[index];
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyClipBoard = () => {
    navigator.clipboard.writeText(password).then(() => {
      toast.success("Password copied to clipboard!");
    });
  };
  return (
    <div className="bg-slate-500 w-screen h-screen">
      <h1 className="text-center text-4xl text-white font-bold py-5">
        Random password generator
      </h1>

      <div className="bg-red-200 w-[90%] m-auto">
        <div className="form-group w-[80%] m-auto flex-wrap">
          <input
            type="text"
            name=""
            className="w-[90%] h-[100%] p-2 my-3"
            value={password}
            readOnly
          />
          <button
            className="w-[10%] bg-red-700 p-2 text-white"
            onClick={() => copyClipBoard()}
          >
            copy
          </button>
        </div>
        <div className="form-group w-[80%] m-auto flex flex-wrap justify-center p-5">
          <input
            type="range"
            min="8"
            max="16"
            value={length}
            className="mr-2"
            onChange={(e) => setLength(e.target.value)}
          />
          <label className="font-bold mx-2">Length : {length}</label>
          <input
            type="checkbox"
            className="mr-1"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <span className="font-bold mx-2">Number Allowed</span>
          <input
            type="checkbox"
            className="mr-1"
            checked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />{" "}
          <span className="font-bold mx-2">Character Allowed</span>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
