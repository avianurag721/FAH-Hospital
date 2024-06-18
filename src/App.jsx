import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Compnents/Home/HomePage";
import Navbar from "./Compnents/Common/Navbar";
import MobileNavbar from "./Compnents/Common/MobileNavbar";
import Footer from "./Compnents/Common/Footer";
import SecondOpinion from "./Compnents/ConsultToggleDetailPages/SecondOpinion";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <MobileNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/second-opinion" element={<SecondOpinion />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
