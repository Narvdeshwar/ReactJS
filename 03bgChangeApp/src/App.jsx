import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("white");
  const textColorLight = "text-white";
  const textColorDark = "text-black";
  return (
    <div className="w-screen h-screen" style={{ background: color }}>
      {/* bottom bar */}  
      <div className="bg-yellow-400 flex flex-wrap bottom-12 fixed inset-x-0 m-auto w-fit gap-2 rounded-full py-3 px-6 animate-bounce duration-200">
        <button
          className={`${textColorDark} font-bold bg-white px-2 py-2 rounded-lg`}
        onClick={()=>setColor("white")}>
          Light
        </button>
        <button className={`${textColorLight} font-bold bg-black px-2 py-2 rounded-lg`} onClick={()=>setColor("black")}>
          Dark
        </button>
        <button className={`${textColorLight} font-bold bg-red-700 px-2 py-2 rounded-lg`} onClick={()=>setColor("red")}>
          Red
        </button>
        <button className={`${textColorLight} font-bold bg-green-700 px-2 py-2 rounded-lg`} onClick={()=>setColor("green")}>
          Green
        </button>
        <button className={`${textColorLight} font-bold bg-orange-700 px-2 py-2 rounded-lg`} onClick={()=>setColor("orange")}>
          Orange
        </button> 
        <button className={`${textColorLight} font-bold bg-rose-700 px-2 py-2 rounded-lg`} onClick={()=>setColor("#9f1239")}>
          Rose
        </button> 
      </div>
    </div>
  );
}
