import React from "react";

// const Navbar = () => {
//   return (
//     <div className="Navbar">
//       <img src="" alt="" className="logo"></img>
//       <ul>
//           <li>Login</li>
//       </ul>
//     </div>
//   );
// };

const Login = () => {
  return (
      <div>
        <Navbar/> {}
        <div className="login-form bg-yellow-600">
          <h1 className="text-4x1 text-blackfont-bold text-center mb-6">Login</h1>
          <form action="">
          <div className="relative my-4">
            <input type="email"/>
            <label htmlFor="">Your Email</label>
          </div>
          <div relative my-4>
            <input type="password" className="block w-27 py-2.3 px-0 text-sm text-black"/>
            <label htmlFor="">Your Password</label>
          </div>
          <button type="submit">Login</button>
          </form>
        </div>
      </div>
  );
};

export default Login