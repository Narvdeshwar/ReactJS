import React, { useState } from "react";

function Comment({ data,currentTask }) {
  const [textlength, setTextLength] = useState(null);
  console.log(textlength);
  return (
    <>
      <div className="w-[100%] p-2">
        <div className="flex justify-between mb-2 p-2">
          <p>{data}</p>
          <p>{currentTask.taskDate}</p>
        </div>
        <textarea
          className="w-full rounded-md focus:border-blue-500 focus:border-2 outline-none placeholder p-4 text-black border"
          placeholder="enter comment"
          onChange={(e) => setTextLength(e.target.value.length)}
        ></textarea>
        <button
          className={`${
            textlength
              ? "bg-blue-500 shadow-2xl text-white font-bold"
              : "bg-blue-50 text-black shadow-none cursor-not-allowed"
          } px-4 py-2 rounded-lg mt-2`}
          disabled={!textlength}
        >
          Comment
        </button>
      </div>
    </>
  );
}

export default Comment;
