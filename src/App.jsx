import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Compnents/Home/HomePage";
import Navbar from "./Compnents/Common/Navbar";
import MobileNavbar from "./Compnents/Common/MobileNavbar";
// import Footer from "./Compnents/Common/Footer";
import SecondOpinion from "./Compnents/ConsultToggleDetailPages/SecondOpinion";
import HealthCheck from "./Compnents/ConsultToggleDetailPages/healthCheck";
import HomeCare from "./Compnents/ConsultToggleDetailPages/HomeCare";
import BookAppoitments from "./Compnents/Common/BookAppoitments";
import RenalCare from "./Compnents/Specializations/RenalCare";
import CancerCare from './Compnents/Specializations/CancerCare';
import CardiacCare from './Compnents/Specializations/CardiacCare';
import GastroSciences from './Compnents/Specializations/GastroSciences';
import NeuroSciences from './Compnents/Specializations/NeuroSciences';
import Orthopaedics from './Compnents/Specializations/OrthoPaedics';
import ContactUs from "./Compnents/Forms/Contactus";
import Emergency from "./Compnents/Common/Emergency";

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
        <Route path="/renal-care" element={<RenalCare/>} />
        <Route path="/cancer-care" element={<CancerCare/>} />
        <Route path="/cardiac-care" element={<CardiacCare/>} />
        <Route path="/gastrosciences" element={<GastroSciences/>} />
        <Route path="/neurosciences" element={<NeuroSciences/>} />
        <Route path="/orthopaedics" element={<Orthopaedics/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/emergency" element={<Emergency/>} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
