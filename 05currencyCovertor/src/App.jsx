import { InputBox } from "./components";
import { useCurrency } from "./hooks/useCurrency";
function App() {
  const {options} = useCurrency();
  console.log("currency from app:", options);
  return (
    <div
      className="w-screen h-screen"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=800')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[50vw]  fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-700 bg-opacity-30 backdrop-blur-lg shadow-lg rounded-3xl border border-white/30 overflow-hidden">
        <h1 className="text-center p-3 font-bold text-white text-4xl">
          Currency convertor
        </h1>
        <InputBox options={options}/>
      </div>
    </div>
  );
}

export default App;
