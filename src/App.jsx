import React from "react";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import Sidibar from "./pages/Sidibar";

const App = () => {
  return (
    // <div className=" container maxw-[1400px] pt-4 px-4">

    // </div>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sidibar" element={<Sidibar/>} />
    </Routes>
  );
};

export default App;
