import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import NavTop from "./components/NavTop/NavTop";
import PageOne from "./pages/PageOne/PageOne";
import PageTwo from "./pages/PageTwo/PageTwo";

function App() {
  return (
    <>
    <NavTop></NavTop>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/page-one" element={<PageOne />}></Route>
          <Route path="/page-two" element={<PageTwo />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
