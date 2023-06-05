import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import GoodnightMoon from "./components/GoodnightMoon/GoodnightMoon";
import HelloWorld from "./HelloWorld";
import Home from "./pages/Home/Home";
import React from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/HelloWorld" element={<HelloWorld />}></Route>
          <Route path="/goodnightmoon" element={<GoodnightMoon />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
