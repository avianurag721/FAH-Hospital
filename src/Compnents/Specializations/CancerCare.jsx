import React from "react";
import cancer from "../../Images/DetailPageSpecialityImages/cancer.png";
import Services from "../Common/Services";
import Footer from "../Common/Footer";
import ConsultToggle from '../Home/ConsultToggle';

const CancerCare = () => {
  return (
    <div className="  text-headingColor bg-center gap-16 items-center flex flex-col bg-lightShade">
      <h1 className=" text-headingColor w-[90%] lg:w-[50vw] mt-6  text-2xl lg:text-3xl text-center font-bold ">
      Empowering Hope Through Personalized Cancer Care by Top Medical Experts
      </h1>
      <div className=" font-garamond w-[90vw] gap-2 flex  flex-col lg:flex-row justify-around items-center">
        <p className=" w-[90vw] lg:w-[40vw] text-justify text-lg lg:text-2xl">
          At FAH Hospital, we are dedicated to providing the highest quality
          cancer care through a patient-centered approach that prioritizes
          compassion and innovation. Our multidisciplinary team of oncologists,
          surgeons, radiologists, pathologists, and specialized nurses
          collaborates to create personalized treatment plans tailored to each
          patient's unique needs.
        </p>
        <div>
          <img className=" w-[90vw] lg:w-[25vw]" src={cancer} alt="cancer" />
        </div>
      </div>
      <ConsultToggle/>
      <Services />
      <Footer />
    </div>
  );
};

export default CancerCare;
