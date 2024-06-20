import NavbarservicesData from "./NavbarServiceData";
import specialities from "./Specialities";

const navData = [
  // {
  //   Item: "Location",
  //   nav: "/",
  //   subdata: [
  //     {
  //       Item: "",
  //       nav: "",
  //     },
  //   ],
  // },
  {
    Item: "Speciality",
    nav: "/",
    subdata: specialities,
  },
  {
    Item: "Services",
    nav: "/",
    subdata: NavbarservicesData,
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
    nav: "/",
  },
  {
    Item: "Contact Us",
    nav: "/",
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
    nav: "/",
  },
  {
    Item: "Contact Us",
    nav: "/",
  },
];

export { navData, mobileNavData };
