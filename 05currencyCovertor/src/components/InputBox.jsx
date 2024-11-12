// eslint-disable-next-line react/prop-types
function InputBox({ options }) {

  return (
    <div className="w-[90%] h-full m-auto p-2">
      {/* input box container */}
      <div className="bg-transparent p-2">
        <div className="flex flex-wrap">
          <label htmlFor="" className="mb-2 w-[100%] text-white font-bold">
            From price:
          </label>

          <input
            type="number"
            className="w-[50%] sm:w-[70%] outline-none focus:border-none focus:outline-none p-2 rounded-l-xl"
            placeholder="enter the price"
          />
          <select
            name=""
            id=""
            className="w-[50%] sm:w-[30%] rounded-r-xl p-2 outline-none focus:border-none focus:outline-none text-center"
          >
            <option value="select currency">Select Currency</option>
            {options.length > 0 &&
              options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
          </select>
        </div>
      </div>

      {/* Centering swap button */}
      <div className="flex justify-center items-center">
        <button className="bg-teal-500 p-2 px-10 rounded-lg text-white mt-2 font-extrabold mb-4">
          swap
        </button>
      </div>

      <div className="p-2">
        <div className="flex flex-wrap">
          <label htmlFor="" className="mb-2 w-[100%] font-semibold text-white">
            To price:
          </label>
          <input
            type="number"
            className="w-[50%] sm:w-[70%] outline-none focus:border-none focus:outline-none p-2 rounded-l-xl"
            defaultValue={0}
            disabled
          />
          <select
            name=""
            id=""
            className="w-[50%] sm:w-[30%] rounded-r-xl p-2 outline-none focus:border-none focus:outline-none text-center"
          >
            <option value="select currency">Select Currency</option>
            {options.length > 0 &&
              options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
          </select>
        </div>
      </div>

      {/* Centering convert button */}
      <div className="flex justify-center items-center">
        <button className="bg-teal-500 p-2 px-10 rounded-lg text-white mt-2 font-extrabold mb-4">
          convert
        </button>
      </div>
    </div>
  );
}

export default InputBox;
