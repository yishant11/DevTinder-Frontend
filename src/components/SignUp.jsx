
const SignUp = () => {
  return (
    <div className="h-screen grid place-items-center bg-black p-4">
      <div className="card w-full max-w-md bg-gray-900 border border-gray-600 shadow-2xl max-h-full overflow-y-auto">
        <div className="card-body p-6">
          <h2 className="card-title text-center text-3xl font-bold text-white mb-6">
            Create Account
          </h2>
          
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-medium text-gray-300">Full Name</span>
            </label>
            <input 
              type="text" 
              className="input input-bordered bg-gray-800 border-gray-700 text-white placeholder-gray-500 w-full focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" 
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-control w-full mt-4">
            <label className="label">
              <span className="label-text font-medium text-gray-300">Email</span>
            </label>
            <input 
              type="email" 
              className="input input-bordered bg-gray-800 border-gray-700 text-white placeholder-gray-500 w-full focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" 
              placeholder="Enter your email"
            />
          </div>

          <div className="form-control w-full mt-4">
            <label className="label">
              <span className="label-text font-medium text-gray-300">Password</span>
            </label>
            <input 
              type="password" 
              className="input input-bordered bg-gray-800 border-gray-700 text-white placeholder-gray-500 w-full focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" 
              placeholder="Create a password"
            />
          </div>

          <div className="form-control w-full mt-4">
            <label className="label">
              <span className="label-text font-medium text-gray-300">Confirm Password</span>
            </label>
            <input 
              type="password" 
              className="input input-bordered bg-gray-800 border-gray-700 text-white placeholder-gray-500 w-full focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" 
              placeholder="Confirm your password"
            />
          </div>

          <div className="form-control mt-6">
            <label className="label cursor-pointer">
              <input type="checkbox" className="checkbox checkbox-info" />
              <span className="label-text text-gray-300 ml-2">I agree to the terms and conditions</span>
            </label>
          </div>

          <div className="card-actions justify-center mt-6">
            <button className="btn bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold border-none btn-wide shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300">
              Sign Up
            </button>
          </div>

          <div className="divider divider-gray-600">OR</div>
          
          <div className="text-center">
            <p className="text-sm text-gray-400">
              Already have an account? 
              <a href="#" className="link link-hover text-cyan-400 font-medium ml-1">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;