import NavbarservicesData from "./NavbarServiceData";
import specialities from "./Specialities";

const navData = [
  {
    Item: "About Us",
    // nav: "/",
  },
  {
    Item: "Speciality",
    // nav: "/",
    subdata: specialities,
  },
  
  {
    Item: "Services",
    // nav: "/",
    subdata: NavbarservicesData,
  },
  

  {
    Item: "Health Library",
    // nav: "/",
  },
  {
    Item: "Careers",
    nav: "/career",
  },
  {
    Item: "Contact Us",
    nav: "/contact-us",
  },
];
const mobileNavData = [
  {
    Item: "Location",
    nav: "/",
  },
  {
    Item: "Speciality",
    nav: "/",
  },
  {
    Item: "Services",
    nav: "#services",
  },
  {
    Item: "International Patients",
    nav: "/",
  },

  {
    Item: "Health Library",
    nav: "/",
  },
  {
    Item: "Careers",
    nav: "/career",
  },
  {
    Item: "Contact Us",
    nav: "/",
  },
];

export { navData, mobileNavData };
