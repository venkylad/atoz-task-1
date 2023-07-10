import React, { useEffect, useState } from "react";
import { getRandomColor } from "../../utils";

const Circle = ({ bgColor, duplicateCircle, disableDuplicate }) => {
  const [counter, setCounter] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState(bgColor);

  const handleIncrement = () => {
    setCounter(counter + 1);
    setBackgroundColor(getRandomColor());
  };

  return (
    <div className="flex flex-col items-center justify-center mx-4 my-8">
      <div
        className="w-[10vw] h-[10vw] p-0  rounded-full bg-yellow-400 flex justify-center items-center"
        style={{ backgroundColor }}
      >
        <p className="text-xl lg:text-3xl font-bold">{counter}</p>
      </div>
      <p className="text-center font-semibold">{backgroundColor}</p>
      <div className="flex space-x-2 mt-2">
        <button
          onClick={handleIncrement}
          className="bg-red-400 font-semibold text-white rounded-md py-1 px-2"
        >
          Increment
        </button>
        <button
          disabled={disableDuplicate}
          onClick={() => duplicateCircle(backgroundColor)}
          className="bg-red-400 font-semibold text-white rounded-md py-1 px-2 disabled:opacity-60"
        >
          Duplicate
        </button>
      </div>
    </div>
  );
};

export default Circle;
