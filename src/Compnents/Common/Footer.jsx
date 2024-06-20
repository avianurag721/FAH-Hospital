import React from "react";
import FooterData from "../../Data/FooterData";
import FooterLogo from "../../Images/footerLogo.jpg";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row text-center md:justify-between">
          {FooterData.map((category, index) => {
            const categoryName = Object.keys(category)[0];
            const items = category[categoryName];

            return (
              <div key={index} className="mb-8 md:mb-0 md:w-1/4">
                <h4 className="text-xl font-semibold mb-4">
                  {categoryName.replace(/([A-Z])/g, " $1").trim()}
                </h4>
                <ul>
                  {items.map((item, idx) => (
                    <li key={idx} className="mb-2">
                      <a href={item.nav} className="hover:underline">
                        {item.Item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          {/* This is for the fourth column of the footer for contact information */}
          <div className=" flex flex-col items-center mb-8 md:mb-0 md:w-1/4">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <a href="https://maps.app.goo.gl/M83NrSM9wLkdh7gw7" className=" my-4">
              Location:- <span  className=" text-red-400">Amrapali Yojna, IIM Road, <br />
              Dubagga Lucknow</span>
            </a>
            <a className=" my-4" href="tel:+8433377712 ">
              Call Now: <span className=" text-red-400">+91-8433377712</span>{" "}
            </a>
            <img className=" items-center rounded-full w-[10rem]" src={FooterLogo} alt="FooterLogo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
