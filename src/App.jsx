import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Login from "./components/Login";
import Signup from "./components/SignUp";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
