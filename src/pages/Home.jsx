import React, { useState } from "react";
import Circle from "../components/Circle";
import { getRandomColor } from "../../utils";

const Home = ({ circles, duplicateCircle }) => {
  return (
    <div className=" h-[calc(100vh_-_68px)] flex flex-col justify-center items-center">
      <h1 className="text-3xl absolute top-20 w-[75%] text-center leading-10">
        Page 1 Circles
        <br />
        {circles.length === 10 && (
          <span className="font-bold text-red-700 ">
            Not More than 10 Circles
          </span>
        )}
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 ">
        {circles.map((item) => (
          <div key={item.id} className="">
            <Circle
              bgColor={item?.bgColor}
              duplicateCircle={duplicateCircle}
              disableDuplicate={circles.length >= 10}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
