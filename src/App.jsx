import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Compnents/Home/HomePage";
import Navbar from "./Compnents/Common/Navbar";
import MobileNavbar from "./Compnents/Common/MobileNavbar";
import Footer from "./Compnents/Common/Footer";
import SecondOpinion from "./Compnents/ConsultToggleDetailPages/SecondOpinion";
import HealthCheck from "./Compnents/ConsultToggleDetailPages/healthCheck";
import HomeCare from "./Compnents/ConsultToggleDetailPages/HomeCare";
import BookAppoitments from "./Compnents/Common/BookAppoitments";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <MobileNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/second-opinion" element={<SecondOpinion />} />
        <Route path="/health-check" element={<HealthCheck />} />
        <Route path="/home-care" element={<HomeCare />} />
        <Route path="/book-appointment" element={<BookAppoitments />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
