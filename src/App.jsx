import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Login from "./components/Login";
// import Signup from "./components/SignUp";
import { Provider } from "react-redux";
import { appStore } from "../src/utils/appStore";
import Feed from "./components/Feed";
import Body from "./components/Body";
import Profile from "./components/Profle";

function App() {
  return (
    <Provider store={appStore}>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<div>Home</div>} />
            <Route path="feed" element={<Feed />} />
            <Route
              path="profile"
              element={
                <div>
                  <Profile />
                </div>
              }
            />
          </Route>

          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
