import React from "react";
import cancer from "../../Images/DetailPageSpecialityImages/cancer.png";
import Services from "../Common/Services";
import Footer from "../Common/Footer";

const CancerCare = () => {
  return (
    <div className="  h-screen text-black bg-center gap-16 items-center flex flex-col bg-gradient-to-r from-customColor to-white ">
      <h1 className=" text-black w-[90%] lg:w-[50vw] mt-6  text-4xl text-center font-bold ">
        Empowering Hope Through Personalized Cancer Care By best medical experts
      </h1>
      <div className=" font-serif w-[90vw] gap-2 flex  flex-col lg:flex-row justify-around items-center">
        <p className=" w-[90vw] lg:w-[40vw] text-justify text-3xl">
          At FAH Hospital, we are dedicated to providing the highest quality
          cancer care through a patient-centered approach that prioritizes
          compassion and innovation. Our multidisciplinary team of oncologists,
          surgeons, radiologists, pathologists, and specialized nurses
          collaborates to create personalized treatment plans tailored to each
          patient's unique needs.
        </p>
        <div>
          <img className=" w-[90vw] lg:w-[35vw]" src={cancer} alt="cancer" />
        </div>
      </div>
      <Services />
      <Footer />
    </div>
  );
};

export default CancerCare;
