import React from "react";
import Comment from "./Comment";

function TaskViewer({ currentTask, data }) {
  console.log(currentTask);
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Assigned title */}
      {<header className="w-full text-xl p-5 border-b">
        <h1 className="font-bold">{currentTask.taskTitle}</h1>
      </header>}

      <div className="flex flex-1 overflow-hidden">
        {/* Left bar */}
        <section className="w-4/5 h-full overflow-y-scroll p-4 mb-2">
          <div className="p-4 border m-2 rounded-lg shadow-lg">
            <div className="flex justify-between mb-2">
              <p className="font-bold">{data}</p>
              <p>{currentTask.taskDate}</p>
            </div>
            <p>{currentTask.taskDescription}</p>
          </div>
          <hr />
          <Comment data={data} currentTask={currentTask} />
        </section>

        {/* Right bar */}
        <aside className="w-1/5 h-full overflow-y-scroll p-4">
          <div className="border p-4 m-2 rounded-lg shadow-lg mb-2 flex flex-col gap-5">
            <div className="flex justify-between">
              <p className="font-[600]">Assignee</p>
              <p className="font-[500]">{data}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-[600]">Date</p>
              <p className="font-[500]">{currentTask.taskDate}</p>
            </div>
          </div>
          <div className="border p-4 m-2 rounded-lg shadow-lg mt-4 flex flex-col gap-5">
            <h1 className="font-[600] text-center">task status</h1>
            <div className="flex justify-between">
              <p className="font-[600]">Status</p>
              {currentTask.active && <p className="font-[500]">in progress</p>}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default TaskViewer;
