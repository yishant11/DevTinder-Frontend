import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../utils/constants";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        `${BASE_URL}/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        },
      );
      console.log("Login successful", res.data);
      dispatch(addUser(res.data));
      toast.success("Login successful!");
      setError("");
      navigate("/feed");
    } catch (error) {
      const errorMsg = error?.response?.data || "Something went wrong";
      setError(errorMsg);
      toast.error(errorMsg);
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        `${BASE_URL}/signup`,
        {
          email,
          password,
          firstName,
          lastName,
        },
        {
          withCredentials: true,
        },
      );
      console.log("Signup successful", res.data.data);
      dispatch(addUser(res.data.data));
      toast.success("Signup successful!");
      setError("");
      navigate("/profile");
    } catch (error) {
      const errorMsg = error?.response?.data || "Something went wrong";
      setError(errorMsg);
      toast.error(errorMsg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="card w-96 bg-gray-900 border border-gray-600 shadow-2xl">
        <div className="card-body">
          <h2 className="card-title text-center text-3xl font-bold text-white mb-8">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>

          {!isLogin && (
            <>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-medium text-gray-300">
                    First Name
                  </span>
                </label>
                <input
                  type="text"
                  className="input input-bordered bg-gray-800 border-gray-700 text-white placeholder-gray-500 w-full focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-medium text-gray-300">
                    Last Name
                  </span>
                </label>
                <input
                  type="text"
                  className="input input-bordered bg-gray-800 border-gray-700 text-white placeholder-gray-500 w-full focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </>
          )}

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
            <div>{error && <p className="text-red-500">{error}</p>}</div>
          </div>

          <div className="card-actions justify-center mt-8">
            <button
              className="btn bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold border-none btn-wide shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300"
              onClick={isLogin ? handleLogin : handleSignUp}
            >
              {isLogin ? "Login" : "Sign up"}
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-green-50">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                className="link link-hover text-cyan-400 font-medium ml-1"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Sign up" : "Login"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
