import React from "react";

const SignIn = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[url('universal_bg.jpg')]">
      <div className="w-[700px] h-fit px-4 py-8 border rounded-lg border-gray-300 bg-white flex flex-col items-center">
        <p className=" py-4 text-4xl font-semibold">Welcome to Zap 😊</p>
        <p className="text-sm text-gray-400">
          Singin to continue chatting with Zap
        </p>
        <form action="" className="w-3/5 mt-12 mb-8 ">
          <label>Username</label>
          <input
            type="text"
            className="w-full h-9 px-2 my-2 border rounded-sm border-gray-300"
            placeholder="Enter phone or email"
          />
          <label>
            Password{" "}
            <span className="float-end text-sm hover:underline cursor-pointer">
              Forgot Password?
            </span>
          </label>
          <input
            type="text"
            className="w-full h-9 px-2 my-2 border rounded-sm border-gray-300"
            placeholder="Enter password"
          />
          <input type="checkbox" />
          <label>Remember me</label>
          <button className="w-full h-9 my-3 rounded-sm bg-[#34f7c4] text-gray-500">
            Log In
          </button>
        </form>
        <div className="my-2 border border-gray-200 w-3/5"></div>
        <p className="mt-[-22px] px-2 bg-white">Sign in with</p>
        <div className="my-2 py-2">
          <button className="w-[130px] px-3 py-1 mx-2  rounded-md border-blue-400 bg-blue-100 text-blue-400 hover:bg-blue-400 hover:text-white">
            <span className="bi bi-facebook px-2"></span>Facebook
          </button>
          <button className="w-[130px] px-3 py-1 mx-2  rounded-md border-bgrlue-400 bg-green-100 text-red-400 hover:bg-yellow-300 hover:text-white">
            <span className="bi bi-google px-2"></span>Google
          </button>
        </div>
        <p className="mt-5 text-md text-gray-400">
          Don't have an account ?{" "}
          <span className="text-gray-500 hover:underline cursor-pointer">
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
