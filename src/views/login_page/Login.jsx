import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import './Login.css';
import { loginRequest } from "../../features/Auth";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      setError('Username and password are required.');
      console.log(error);
      return;
    }

    try {
      const response = await loginRequest(username, password);
      navigate("/stock");
      console.log(response);
    } catch (error) {
      setError(error.response.data.message);
      console.log(error.response.data);
    }
  };

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
          <div className="relative">
            <input
              type="text"
              placeholder="Masukkan username"
                className={`h-12 rounded-lg bg-white border py-1 px-3 text-base font-medium text-darkgrey input-custom w-full font-poppins ${error ? 'border-red' : 'border-lightgrey'}`}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
              <FaUser className="w-6 h-6 text-darkgrey mr-2" />
            </div>
          </div>
          <h1 className="text-xl font-medium font-poppins text-left">Password</h1>
          <div className="relative">
            <input
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan password"
                className={`h-12 rounded-lg bg-white border py-1 px-3 text-base font-medium text-darkgrey input-custom w-full font-poppins ${error ? 'border-red' : 'border-lightgrey'}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash className="w-6 h-6 text-darkgrey mr-2" /> : <FaEye className="w-6 h-6 text-darkgrey mr-2" />}
            </div>
          </div>
          {error && (
            <div className="text-left text-red-500 mt-2 text-sm font-medium">
              {error}
            </div>
          )}
          <div className="h-12"/>
          <button className="btn rounded-xl bg-lightnavy font-medium font-poppins text-white text-s p-3" onClick={handleLogin}>Login</button>
          <div className="h-20"/>
        </div>
      </div>
    </div>
  );
}

export default Login;
