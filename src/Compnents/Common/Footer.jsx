import React from "react";
import FooterData from "../../Data/FooterData";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between">
          {FooterData.map((category, index) => {
            const categoryName = Object.keys(category)[0];
            const items = category[categoryName];

            return (
              <div key={index} className="mb-8 md:mb-0 md:w-1/3">
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
          {/* this is For the fourht coloumn of  the foooter  for  playstore etc */}
          {/* <h1>hello worls</h1> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
