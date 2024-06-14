import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Compnents/Home/HomePage";
import Navbar from "./Compnents/Navbar";
import About from "./Compnents/About";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
