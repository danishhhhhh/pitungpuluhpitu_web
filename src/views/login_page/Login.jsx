import React from "react";
import { FaUser } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";

const Login = () => {
    return (
    <section >
      <div className="login mb-4">   

        <form id="form" className="flex flex-col justify-end w-1/2 ">
        <h1 className="text-2xl font-bold mb-0 font-poppins">Selamat Datang!</h1>
        <div className="flex justify-center">
        <h1 className="text-xs flex mb-4 font-poppins">Mari masuk untuk mengakses kontrol stok.</h1>
        </div>
          <div className="flex flex-col items-start relative mb-1">
            <label htmlFor="username" className="font-bold font-poppins text-sm ml-10"  >
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Masukkan username"
              className="w-3/4 h-8 rounded-lg bg-white text-gray-300 border border-darkgrey focus:ring-2 focus:ring-indigo-600 focus:outline-none py-1 px-3 text-xs pr-10 ml-10"
            />
            <FaUser className="absolute right-12 top-11 text-gray-400" />
          </div>
          <div className="flex flex-col items-start relative mb-4">
            <label htmlFor="password" className="font-bold font-poppins text-sm ml-10">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Masukkan password"
              className="w-3/4 h-8  rounded-lg bg-white text-gray-300 border border-darkgrey focus:ring-2 focus:ring-indigo-600 focus:outline-none py-1 px-3 text-xs pr-10 ml-10"
            />
            <IoMdEyeOff className="absolute right-12 top-11 text-gray-400" />
          </div>
          <button className="btn w-3/4 ml-10 rounded-lg bg-lightnavy text-x">Login</button>
        </form>
      </div>
      <div className="relative login-image-container ">
        <img src="../src/assets/logo7.png" className="w-3/4 max-w-md"/>
      </div>
    </section>
  );
}

export default Login;