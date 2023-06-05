import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Docs from "./components/Docs/Docs";
import Home from "./pages/Home/Home";
import NavTop from "./components/NavTop/NavTop";
import Swagger from "./components/Swagger";

function App() {
  return (
    <>
    <NavTop></NavTop>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/swagger" element={<Swagger />}></Route>
          <Route path="/docs" element={<Docs />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
