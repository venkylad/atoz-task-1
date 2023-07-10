import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh_-_68px)] flex-col space-y-10">
      <h1 className="font-bold text-6xl text-red-600">PAGE NOT FOUND - 404</h1>
      <Link
        to="/"
        className="bg-violet-500 px-4 py-4 rounded-lg font-medium text-white text-xl uppercase"
      >
        Go back to home
      </Link>
    </div>
  );
};

export default NotFound;
