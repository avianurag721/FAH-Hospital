import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Compnents/Home/HomePage";
import Navbar from "./Compnents/Common/Navbar";
import MobileNavbar from "./Compnents/Common/MobileNavbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <MobileNavbar/>/
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
