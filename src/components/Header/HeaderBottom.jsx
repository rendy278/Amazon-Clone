import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";
import { motion } from "framer-motion";
import SideNavContent from "../SideNavContent";
const HeaderBottom = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="w-full px-4 h-[36px] sm:h-[48px] bg-amazon_light  text-white flex items-center">
      <ul className="flex items-center gap-2 text-sm tracking-wide">
        <li
          onClick={() => setSidebar(true)}
          className="headerHover items-center flex gap-1"
        >
          <MenuIcon /> All
        </li>
        <li className="headerHover sm:hidden lg:flex md:flex">Today Deals</li>
        <li className="headerHover sm:flex lg:hidden md:hidden">
          <LocationOnIcon className="sm:p-1" />
          <p className="text-sm sm:text-xs text-lightText font-light flex flex-col">
            Deliver to{" "}
            <span className="text-sm sm:text-xs font-semibold -mt-1 text-whiteText">
              Indonesia
            </span>
          </p>
        </li>
        <li className="headerHover">Customer Service</li>
        <li className="headerHover sm:hidden lg:flex md:flex">Gift Cards</li>
        <li className="headerHover">Sell</li>
      </ul>
      {sidebar && (
        <motion.div
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full  h-screen text-black fixed top-0 left-0  bg-opacity-50"
        >
          <div className="w-full  h-full relative">
            <div className="w-[350px] sm:w-80 h-full bg-white border border-black overflow-y-scroll">
              <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4 ">
                <AccountCircleIcon />
                <h3>Hello, Sign in</h3>
              </div>
              <SideNavContent
                title="Digital Content & Devices"
                one="Amazon Music"
                two="Kindle E-readers & Books"
                three="Amazon Appstore"
              />
              <SideNavContent
                title="Shop By Department"
                one="Electronics"
                two="Computers"
                three="Smart Home"
              />
              <SideNavContent
                title="Programs & Features"
                one="Gift Cards"
                two="Amazon live"
                three="International Shopping"
              />
              <SideNavContent
                title="Help & Setting"
                one="Your Account"
                two="Customer Service"
                three="Helps"
              />
            </div>
            <span
              onClick={() => setSidebar(false)}
              className="cursor-pointer absolute top-0 lg:left-[360px] md:left-[360px] sm:left-[280px] w-10 h-10 text-black
            flex items-center justify-center border bg-gray-200 hover:bg-red-500
            hover:text-white duration-300"
            >
              <CloseIcon />
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default HeaderBottom;
