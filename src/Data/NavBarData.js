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
    Item: "Careers",
    nav: "/career",
  },
  {
    Item: "Doctors",
    nav: "/doctors",
  },
  {
    Item: "Contact Us",
    nav: "/contact-us",
  },
];
const mobileNavData = [
  {
    Item: "Speciality",
    nav: "#speciality",
  },
  {
    Item: "Services",
    nav: "#services",
  },
  {
    Item: "Careers",
    nav: "/career",
  },
  {
    Item: "Book a Consultation",
    nav: "/book-appointment",
  },
  {
    Item: "Contact Us",
    nav: "/contact-us",
  },
];

export { navData, mobileNavData };
