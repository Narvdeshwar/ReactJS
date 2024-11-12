import { useContext } from "react";
import { useForm } from "react-hook-form";
import AuthContext from "../../context/AuthContext";

function Login({ handleAuth }) {

  const { register, handleSubmit, reset } = useForm();

  const handleFormSubmit = (userData) => {
    console.log(userData);
    handleAuth(userData);
    reset();
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="h-[50%] w-[50%] border-teal-500  rounded-2xl shadow-2xl border-4 overflow-hidden flex justify-evenly">
        
        <div className="w-[45%] h-[100%] flex justify-center items-center">
          
          <form
            className="flex flex-col w-[100%] gap-5"
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            <input
              type="email"
              className="rounded-full p-2 placeholder:px-2 placeholder:text-bold placeholder:text-black text-black outline-none border-teal-500 border-4"
              placeholder="enter email address"
              {...register("email")}
            />

            <input
              type="password"
              className="rounded-full p-2 placeholder:px-2 placeholder:text-bold placeholder:text-black text-black outline-none border-teal-500 border-4"
              placeholder="enter password"
              {...register("password")}
            />

            <button className="w-[100%] bg-teal-500 m-auto mt-3 rounded-full p-2 font-bold text-white">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
