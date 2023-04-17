import React from "react";

const Login = () => {
  return (
    <div className="flex-1 flex  flex-col justify-center pt-2 items-center gap-5 ">
      <h1 className="text-xl">Login</h1>
      <input
        type="email"
        placeholder="Email"
        className="outline-none text-sm p-2 w-full max-w-[34ch] border border-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300  "
      />

      <input
        type="password"
        placeholder="password "
        className="outline-none text-sm p-2 w-full max-w-[34ch] border border-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 "
      />
      <button className="w-full max-w-[30ch] border border-white hover:bg-indigo-600 py-1 px-1 text-white   shadow-md transition duration-300 ease-in-out transform hover:scale-105">
        Submit
      </button>
      <span className="text-sm">haven't register,Click here to Register</span>
    </div>
  );
};

export default Login;
