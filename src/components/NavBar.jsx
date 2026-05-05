import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import BASE_URL from "../utils/constants";
import axios from "axios";
import { removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.post(
        `${BASE_URL}/logout`,
        {},
        {
          withCredentials: true,
        },
      );
      //clear data from redux store and redirect to login page
      dispatch(removeUser());
      navigate("/login")
      toast.success(res.data.message || "Logout successful!");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed!");

    }
  };

  return (
    <div>
      <div className="navbar bg-base-100 shadow-md">
        <div className="flex-1 ">
          <Link to="/feed" className="btn btn-ghost text-xl">
            👨‍💻DevTinder
          </Link>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
          {user && (
            <>
              <p className="text-black italic text-md flex items-center gap-1">
                Welcome, {user.firstName}
                {user.isPremium && (
                  <CheckBadgeIcon className="h-5 w-5 text-blue-500" title="Premium Member" />
                )}
              </p>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="User avatar"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link to="/profile" className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/connection">Connection</Link>
                  </li>
                  <li>
                    <Link to="/requests">Requests</Link>
                  </li>
                  <li>
                    <Link to="/premium">Premium</Link>
                  </li>
                  <li>
                    <Link to="/" onClick={handleLogout}>
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
