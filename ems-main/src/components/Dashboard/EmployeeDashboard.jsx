import Header from "../Header";
import TaskList from "../TaskList/TaskList";
import TaskNumberList from "../Others/TaskNumberList";
import { useState } from "react";

function EmployeeDashboard({ data }) {
  console.log(data);
  const [taskNumberlist, setTaskNumberList] = useState(false);

  const handlerTaskList = () => {
    console.log(taskNumberlist);
    setTaskNumberList((prev) => !prev);
    console.log(taskNumberlist);
  };

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Header data={data} />
      {!taskNumberlist && <TaskNumberList data={data}/>}
      <TaskList data={data} handlerTaskList={handlerTaskList} />
    </div>
  );
}

export default EmployeeDashboard;
