import React from "react";
// import posterImage from "../../cropped-fah-1.webp";
import DottedImage from "../../Images/dottedwallpaper.webp"
import FahPoster from "../../Images/fahhealthCare.jpeg"


const Poster1 = () => {
  return (
    <div style={{ backgroundImage: `url(${DottedImage})` }} className="bg-cover bg-center bg-red-600 flex justify-center  lg:flex-row flex-col items-center ">
      {/* postereImage */}
      <div className="postereImage lg:w-[30%] w-[90%] flex justify-center items-center">
        <img
          className=" rounded-3xl"
          src="https://fahhospital.com/wp-content/uploads/2023/10/DSC1910666.png"
          alt="posterImage"
        />
      </div>
      {/* central text box  */}
      <div className="lg:w-[30%] w-[90%] ">
        <p className=" text-slate-500 text-lg">
          <span  className=" text-center">"</span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          deleniti odit impedit. Sequi dicta eligendi molestias repudiandae eum
          repellat, inventore, nobis sunt omnis temporibus excepturi natus!
          Commodi provident blanditiis voluptatem.<span className="">" </span>
        </p>
        <br />
        <p>Dr. Ahmad Raza Khan</p>
        <p>Managing Director</p>
      </div>

      {/* right image section  */}
      <div className=" hidden lg:block lg:w-[30%] w-[90%] "> 
        <img src={FahPoster} alt="FahPoster" className=" p-4" width={400} />
      </div>
    </div>
  );
};

export default Poster1;
