import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignIn, setSignIn] = useState(true);

  return (
    <>
      <Header />
      <div className="absolute">
        <img
          alt="bg"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        ></img>
      </div>
      <form className="bg-black absolute m-auto left-0 right-0 w-1/4 p-12 my-36 rounded-lg opacity-100">
        <hi className="font-bold text-white text-3xl my-11 py-4">Sign In</hi>
        <input
          className="my-4 p-4 w-full bg-gray-800"
          type="text"
          placeholder="Name"
        ></input>
        <input
          className="my-4 p-4 w-full bg-gray-800"
          type="text"
          placeholder="Email Address"
        ></input>
        <input
          className="my-4 p-4 w-full bg-gray-800"
          type="password"
          placeholder="Password"
        ></input>
        <button className="bg-red-600 w-full p-4 rounded-lg my-8">
          Sign In
        </button>
        <div className="flex">
        <p className="text-gray-600">New to Netflix?</p>
        <p className="cursor-pointer text-white mx-2"> Sign Up now</p>
        </div>
      </form>
    </>
  );
};

export default Login;
