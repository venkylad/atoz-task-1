import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ userData }) => {
  return (
    <Link state={{ userData }} to={`/users/${userData?.id}`}>
      <div
        title={`know more about ${userData?.first_name} ${userData?.last_name}`}
        className="w-full h-full bg-[#ECEE4F] p-6 rounded-lg cursor-pointer hover:scale-105 transition duration-200 shadow-lg"
      >
        <h5 className="font-bold">ID: {userData?.id}</h5>
        <div className="space-y-4">
          <div className="w-[120px] h-[120px] bg-violet-700 rounded-full overflow-hidden mx-auto">
            <img
              src={userData?.avatar}
              alt=""
              className="hover:scale-150 transition duration-200"
            />
          </div>

          <p className="text-center text-xl font-semibold text-gray-700">
            {userData?.first_name} {userData?.last_name}
          </p>
          <p className="text-lg font-bold">
            Title:{" "}
            <span className="text-gray-700">
              {userData?.employment?.title || "Unknown"}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
