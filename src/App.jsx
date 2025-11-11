import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import Requests from "./pages/Requests";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/:username" element={<UserDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
