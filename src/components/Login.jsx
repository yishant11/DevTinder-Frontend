import { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("ishant@example.com");
  const [password, setPassword] = useState("ishant123");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3002/login", {
        email,
        password,
      },{
        withCredentials: true
      });
      console.log(res);
    } catch (error) {
      console.log("Login failed", error);
    }
  };

  useEffect(() => {
    handleLogin();
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="card w-96 bg-gray-900 border border-gray-600 shadow-2xl">
        <div className="card-body">
          <h2 className="card-title text-center text-3xl font-bold text-white mb-8">
            Welcome Back
          </h2>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-medium text-gray-300">
                Email
              </span>
            </label>
            <input
              type="email"
              className="input input-bordered bg-gray-800 border-gray-700 text-white placeholder-gray-500 w-full focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-control w-full mt-6">
            <label className="label">
              <span className="label-text font-medium text-gray-300">
                Password
              </span>
            </label>
            <input
              type="password"
              className="input input-bordered bg-gray-800 border-gray-700 text-white placeholder-gray-500 w-full focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="label">
              <a
                href="#"
                className="label-text-alt link link-hover text-cyan-400"
              >
                Forgot password?
              </a>
            </label>
          </div>

          <div className="card-actions justify-center mt-8">
            <button
              className="btn bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold border-none btn-wide shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>

          <div className="divider divider-gray-600">OR</div>

          <div className="text-center">
            <p className="text-sm text-gray-400">
              Don't have an account?
              <a
                href="#"
                className="link link-hover text-cyan-400 font-medium ml-1"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
