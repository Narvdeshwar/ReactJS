import React from "react";

function TaskNumberList({ data }) {
  const { taskCount } = data;
  console.log(taskCount);

  // color code for defining the status
  const statusColor={
    "pending":"bg-yellow-400",
    "completed":"bg-green-400",
    "failed":"bg-red-400",
    "inProgress":"bg-blue-400"

  }
  return (
    <div className="flex gap-10 p-5">
      {Object.entries(taskCount).map(([status, count]) => (
        <div key={status} className={`${statusColor[status]} flex justify-center items-center flex-col gap-5 p-5 w-1/2 rounded-xl`}>
          <h1 className="font-bold text-2xl">{count}</h1>
          <h1 className="font-bold text-xl">{status.charAt(0).toUpperCase() + status.slice(1)}</h1>
        </div>
      ))}
    </div>
  );
}

export default TaskNumberList;
