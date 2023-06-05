import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import GoodnightMoon from "./components/GoodnightMoon/GoodnightMoon";
import HelloWorld from "./HelloWorld";
import React from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HelloWorld />}></Route>
          <Route path="/goodnightmoon" element={<GoodnightMoon />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
