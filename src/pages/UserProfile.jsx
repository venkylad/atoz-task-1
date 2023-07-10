import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state?.userData) {
      navigate("/404");
    }
  }, []);

  return (
    <div className="grid md:grid-cols-2 p-5 md:p-8 lg:p-10 gap-6">
      <div className="justify-self-center space-y-5 order-2 md:order-1">
        <h1 className="text-2xl md:text-4xl font-medium text-violet-700">
          Personal Information
        </h1>
        <div className="font-bold text-lg flex space-x-2 items-center">
          <p className="font-medium text-lg min-w-[120px]">User Name:</p>{" "}
          <p className="text-xl md:text-2xl font-semibold text-gray-700">
            {state?.userData?.username}
          </p>
        </div>
        <div className="font-bold text-lg flex space-x-2 items-center">
          <p className="font-medium text-lg min-w-[120px]">First Name:</p>{" "}
          <p className="text-xl md:text-2xl font-semibold text-gray-700">
            {state?.userData?.first_name}
          </p>
        </div>
        <div className="font-bold text-lg flex space-x-2 items-center">
          <p className="font-medium text-lg min-w-[120px]">Last Name:</p>{" "}
          <p className="text-xl md:text-2xl font-semibold text-gray-700">
            {state?.userData?.last_name}
          </p>
        </div>
        <div className="font-bold text-lg flex space-x-2 items-center">
          <p className="font-medium text-lg min-w-[120px]">Email:</p>{" "}
          <p className="text-xl md:text-2xl font-semibold text-gray-700">
            {state?.userData?.email}
          </p>
        </div>
        <div className="font-bold text-lg flex space-x-2 items-center">
          <p className="font-medium text-lg min-w-[120px]">Gender:</p>{" "}
          <p className="text-xl md:text-2xl font-semibold text-gray-700">
            {state?.userData?.gender}
          </p>
        </div>
        <div className="font-bold text-lg flex space-x-2 items-center">
          <p className="font-medium text-lg min-w-[120px]">Phone:</p>{" "}
          <p className="text-xl md:text-2xl font-semibold text-gray-700">
            {state?.userData?.phone_number}
          </p>
        </div>
        <div className="font-bold text-lg flex space-x-2 items-center">
          <p className="font-medium text-lg min-w-[120px]">DOB:</p>{" "}
          <p className="text-xl md:text-2xl font-semibold text-gray-700">
            {state?.userData?.date_of_birth}
          </p>
        </div>
        <div className="font-bold text-lg flex space-x-2 items-center">
          <p className="font-medium text-lg min-w-[120px]">Designation:</p>{" "}
          <p className="text-xl md:text-2xl font-semibold text-gray-700">
            {state?.userData?.employment?.title}
          </p>
        </div>
        <h1 className="text-2xl md:text-4xl font-medium text-violet-700">
          Address
        </h1>
        <div className="font-bold text-lg flex space-x-2 items-center">
          <p className="font-medium text-lg min-w-[120px]">Street:</p>{" "}
          <p className="text-xl md:text-2xl font-semibold text-gray-700">
            {state?.userData?.address?.street_name},{" "}
            {state?.userData?.address?.street_address}
          </p>
        </div>
        <div className="font-bold text-lg flex space-x-2 items-center">
          <p className="font-medium text-lg min-w-[120px]">City:</p>{" "}
          <p className="text-xl md:text-2xl font-semibold text-gray-700">
            {state?.userData?.address?.city}
          </p>
        </div>
        <div className="font-bold text-lg flex space-x-2 items-center">
          <p className="font-medium text-lg min-w-[120px]">State:</p>{" "}
          <p className="text-xl md:text-2xl font-semibold text-gray-700">
            {state?.userData?.address?.state}
          </p>
        </div>
        <div className="font-bold text-lg flex space-x-2 items-center">
          <p className="font-medium text-lg min-w-[120px]">Country:</p>{" "}
          <p className="text-xl md:text-2xl font-semibold text-gray-700">
            {state?.userData?.address?.country}
          </p>
        </div>
        <div className="font-bold text-lg flex space-x-2 items-center">
          <p className="font-medium text-lg min-w-[120px]">Zip code:</p>{" "}
          <p className="text-xl md:text-2xl font-semibold text-gray-700">
            {state?.userData?.address?.zip_code}
          </p>
        </div>
      </div>
      <div className="order-1 md:order-2 max-h-[350px] flex justify-center bg-violet-700 rounded-lg overflow-hidden w-full h-full">
        <img src={state?.userData?.avatar} alt="" className="object-cover " />
      </div>
    </div>
  );
};

export default UserProfile;
