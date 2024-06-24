import React from "react";
// import posterImage from "../../cropped-fah-1.webp";
import DottedImage from "../../Images/dottedwallpaper.png";
import FahPoster from "../../Images/FahAnniversaryPoster.png";

const Poster1 = () => {
  return (
    <div  style={{ backgroundImage: `url(${DottedImage})` }}
      className="bg-cover bg-center flex justify-center  lg:flex-row flex-col items-center "
    >
      {/* postereImage */}
      <div className="postereImage my-5 lg:my-0 lg:w-[30%] w-[90%] flex justify-center items-center">
        <img
          className=" rounded-3xl"
          src="https://fahhospital.com/wp-content/uploads/2023/10/DSC1910666.png"
          alt="posterImage"
        />
      </div>
      {/* central text box  */}
      <div className="lg:w-[30%] w-[90%] ">
        <p className=" text-white text-lg">
          <span className=" text-justify">"</span>
          At FAH Superspeciality Hospital, our mission is to provide exceptional
          healthcare with compassion and innovation. We are committed to
          advancing medical science, improving patient outcomes, and ensuring
          that every individual receives the highest standard of care. Together,
          we strive to make a positive impact on the lives of our patients and
          the community.<span className="">" </span>
        </p>
        <br />
        <div className=" text-3xl font-serif text-red-600">
          <p>Dr. Ahmed Raza Khan</p>
          <p className=" text-lg">Managing Director</p>
        </div>
      </div>

      {/* right image section  */}
      <div className="lg:w-[30%] w-[90%] ">
        <img src={FahPoster} alt="FahPoster" className=" p-4" width={400} />
      </div>
    </div>
  );
};

export default Poster1;
