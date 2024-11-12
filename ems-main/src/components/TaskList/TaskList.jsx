import React, { useState } from "react";
import TaskViewer from "./TaskViewer";

function TaskList({ data, handlerTaskList }) {
  const [selectedTask, setSelectedTask] = useState(null);

  function currentTaskHandle(task) {
    setSelectedTask(task);
    handlerTaskList(); 
  }

  return (
    <div className="p-5">
      {selectedTask ? (
        <TaskViewer currentTask={selectedTask} data={data.employeeName}/>
      ) : (
        <table className="table-auto w-full text-center border-2 border-gray-400 p-5">
          <thead className="border-b-2 border-gray-400">
            <tr>
              <th className="border-r-2 border-gray-400 p-2">S No.</th>
              <th className="border-r-2 border-gray-400 p-2">Title</th>
              <th className="border-r-2 border-gray-400 p-2">Status</th>
              <th className="border-r-2 border-gray-400 p-2">Category</th>
              <th className="p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {data.tasks.map((task, index) => (
              <tr
                key={index}
                className="border-b-2 border-gray-400"
                onClick={() => currentTaskHandle(task)}
              >
                <td className="border-r-2 border-gray-400 p-2">
                  # {index + 1}
                </td>
                <td className="border-r-2 border-gray-400 p-2">
                  {task.taskTitle}
                </td>
                <td className="border-r-2 border-gray-400 p-2">
                  {task.completed ? (
                    <button className="bg-green-400 text-white px-3 py-1 rounded-xl font-bold">
                      Completed
                    </button>
                  ) : task.active ? (
                    <button className="bg-blue-400 text-white px-3 py-1 rounded-xl font-bold">
                      Active
                    </button>
                  ) : task.failed ? (
                    <button className="bg-red-400 text-white px-3 py-1 rounded-xl font-bold">
                      Failed
                    </button>
                  ) : task.newTask ? (
                    <button className="bg-yellow-400 text-white px-3 py-1 rounded-xl font-bold">
                      New Task
                    </button>
                  ) : null}
                </td>
                <td className="border-r-2 border-gray-400 p-2">
                  {task.category}
                </td>
                <td className="p-2">{task.taskDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TaskList;
