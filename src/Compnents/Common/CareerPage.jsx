import React from "react";
import Footer from "../Common/Footer";
import Vacancies from "../Common/Vacancies";
import CareerForm from "../Forms/CareerForm";

const CareerPage = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center bg-gradient-to-r from-headingColor to-lightCustomColor ">
      <div className="flex flex-col-reverse lg:flex-row">
        <Vacancies />
        <CareerForm />
      </div>
      <Footer />
    </div>
  );
};

export default CareerPage;
