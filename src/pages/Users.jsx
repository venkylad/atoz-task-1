import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";

const Users = ({ users }) => {
  return (
    <div className=" h-[calc(100vh_-_68px)] flex flex-col justify-center items-center">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 ">
        {users.map((item) => (
          <div key={item.id} className="">
            <UserCard userData={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
