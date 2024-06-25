import React from "react";
import gastro from "../../Images/DetailPageSpecialityImages/gastro.png";
import Services from "../Common/Services";
import Footer from "../Common/Footer";
import ConsultToggle from "../Home/ConsultToggle";

const GastroSciences = () => {
  return (
    <div className="  h-screen text-black bg-center gap-16 items-center flex flex-col bg-gradient-to-r from-customColor to-white ">
      <h1 className=" text-black w-[90%] lg:w-[50vw] mt-6  text-4xl text-center font-bold ">
        Empowering Hope Through Personalized cardiac Care By best medical
        experts
      </h1>
      <div className=" font-serif w-[90vw] gap-2 flex  flex-col lg:flex-row justify-around items-center">
        <p className=" w-[90vw] lg:w-[40vw] text-justify text-3xl">
        At FAH Hospital, we are dedicated to providing the highest quality
          care in gastrosciences through a patient-centered approach that
          prioritizes compassion and innovation. Our multidisciplinary team,
          consisting of gastroenterologists, gastrointestinal surgeons,
          radiologists, pathologists, and specialized nurses, collaborates to
          create personalized treatment plans tailored to each patient's unique
          needs. Gastroenterologists diagnose and manage digestive conditions,
          while gastrointestinal surgeons perform advanced surgical procedures.
        </p>
        <div>
          <img className=" w-[90vw] lg:w-[35vw]" src={gastro} alt="cardiac" />
        </div>
      </div>
      <ConsultToggle/>
      <Services />
      <Footer />
    </div>
  );
};

export default GastroSciences;
