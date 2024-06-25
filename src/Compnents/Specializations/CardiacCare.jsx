import React from "react";
import cardiac from "../../Images/DetailPageSpecialityImages/cardiac.png";
import Services from "../Common/Services";
import Footer from "../Common/Footer";
import ConsultToggle from "../Home/ConsultToggle";

const CardiacCare = () => {
  return (
    <div className="  h-screen text-black bg-center gap-16 items-center flex flex-col bg-gradient-to-r from-customColor to-white ">
      <h1 className=" text-black w-[90%] lg:w-[50vw] mt-6  text-4xl text-center font-bold ">
        Empowering Hope Through Personalized cardiac Care By best medical
        experts
      </h1>
      <div className=" font-serif w-[90vw] gap-2 flex  flex-col lg:flex-row justify-around items-center">
        <p className=" w-[90vw] lg:w-[40vw] text-center text-3xl">
          At FAH Hospital, we are dedicated to providing the highest quality
          cardiac care through a patient-centered approach that prioritizes
          compassion and innovation. Our multidisciplinary team, consisting of
          cardiologists, cardiac surgeons, radiologists, pathologists, and
          specialized nurses, collaborates to create personalized treatment
          plans tailored to each patient's unique needs. Cardiologists diagnose
          and manage heart conditions, while cardiac surgeons perform advanced
          surgical procedures. Radiologists provide detailed cardiac imaging,
          and pathologists analyze tissue samples for accurate diagnosis.
        </p>
        <div>
          <img className=" w-[90vw] lg:w-[35vw]" src={cardiac} alt="cardiac" />
        </div>
      </div>
      <ConsultToggle/>
      <Services />
      <Footer />
    </div>
  );
};

export default CardiacCare;
