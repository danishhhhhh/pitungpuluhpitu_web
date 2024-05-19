import React from "react";
import './Login.css';

const Login = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center background-image">
      <div className="flex flex-row h-5/6 w-2/3 rounded-3xl overflow-clip">
        <div className="flex justify-center items-center px-20 bg-yellow w-1/2">
          <img src="../src/assets/logo7.png" className=""/>
        </div>
        <div className="flex flex-col bg-white text-center px-20 justify-center w-1/2">
          <h1 className="text-max-xl font-semibold font-poppins">Selamat datang!</h1>
          <h1 className="text-md font-medium font-poppins">Mari masuk untuk mengakses kontrol stok.</h1>
          <div className="h-12"/>
          <h1 className="text-xl font-medium font-poppins text-left">Username</h1>
          <input
              id="username"
              type="text"
              placeholder="Masukkan username"
              className="h-12 rounded-lg bg-white border border-lightgrey py-1 px-3 text-lg font-medium text-darkgrey input-custom "
          />
          <h1 className="text-xl font-medium font-poppins text-left">Password</h1>
          <input
              id="password"
              type="password"
              placeholder="Masukkan password"
              className="h-12 rounded-lg bg-white border border-lightgrey py-1 px-3 text-lg font-medium text-darkgrey input-custom"
          />
          <div className="h-12"/>
          <button className="btn rounded-xl bg-lightnavy font-medium font-poppins text-white text-xl p-3">Login</button>
          <div className="h-20"/>

        </div>
      </div>
    </div>
  );
}

export default Login;