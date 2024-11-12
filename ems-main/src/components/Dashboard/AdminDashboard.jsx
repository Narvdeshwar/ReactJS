import { useForm } from "react-hook-form";
import Header from "../Header";

function AdminDashboard() {
  const inputStyle =
    "bg-transparent p-2  text-white placeholder:text-white w-[100%] bg-gray-500 shadow-2xl outline-none rounded-xl mb-3 placeholder:font-bold";
  const { register, handleSubmit, reset } = useForm();
  const submittedData = (userData) => {
    console.log(userData);
    reset();
  };

  return (
    <div className="w-screen h-screen p-5">
      <Header />
      <h1 className="text-center text-6xl">Create Task</h1>
      <form action="" className="p-2" onSubmit={handleSubmit(submittedData)}>
        <div className="form-group mb-2">
          <label htmlFor="" className="text-gray-300 text-2xl">
            Title:
          </label>
          <input
            type="text"
            className={`${inputStyle}`}
            placeholder="enter the title"
            {...register("title")}
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="" className="text-gray-300 text-2xl">
            Date:
          </label>
          <input
            type="date"
            className={`${inputStyle}`}
            {...register("date")}
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="" className="text-gray-300 text-2xl">
            Assign To:
          </label>
          <input
            type="text"
            className={`${inputStyle}`}
            {...register("assignee")}
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="" className="text-gray-300 text-2xl">
            Category Selector:
          </label>
          <select
            htmlFor=" "
            className={`${inputStyle}`}
            {...register("category")}
          >
            <option value="test1" className="p-2">
              Test 1
            </option>
            <option value="test2" className="p-2">
              Test 2
            </option>
          </select>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="" className="text-gray-300 text-2xl">
            Description:
          </label>
          <textarea
            type="text"
            className={`${inputStyle}`}
            {...register("description")}
          />
        </div>
        <button
          type="submit"
          className="bg-emerald-600 shadow-2xl p-3 text-center rounded-full font-bold w-[100%]"
        >
          Create Task
        </button>
      </form>
    </div>
  );
}

export default AdminDashboard;
