import { useState } from "react";
import { logo } from "../../assets/index";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HeaderBottom from "./HeaderBottom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const [showAll, setShowAll] = useState(false);
  const products = useSelector((state) => state.amazon.products);
  console.log(products);
  const allItems = [
    "All Departments",
    "Arts & Crafts",
    "Automotive",
    "Baby",
    "Beauty & Personal Care",
    "Books",
    "Boys Fashion",
    "Computers",
    "Deals",
    "Digital Music",
    "Electronics",
    "Girls Fashion",
    "Health & Household",
    "Home & Kitchen",
    "Industrial & Scientific",
    "Kindle Store",
    "Luggage",
    "Man Fashion",
    "Movies & TV",
    "Music, CDs & Vinyl",
    "Pet Supplies",
    "Prime Video",
    "Software",
    "Sports & Outdoors",
    "Tools & Home Improvement",
    "Toys & Games",
    "Video Games",
    "Woman Fashion",
  ];

  return (
    <div className="w-full sticky z-[9999] top-0">
      <div className="w-full bg-amazon_blue text-white px-4 py-3 sm:justify-between md:justify-between flex items-center gap-4">
        <Link to="/">
          <div className="headerHover">
            <img
              className="sm:w-14 md:w-20 lg:w-24 mt-2"
              src={logo}
              alt="logo"
            />
          </div>
        </Link>
        <div className="headerHover sm:hidden lg:flex md:flex">
          <LocationOnIcon className="sm:p-1 md:p-0" />
          <p className="text-sm sm:text-xs text-lightText font-light flex flex-col">
            Deliver to{" "}
            <span className="text-sm sm:text-xs font-semibold -mt-1 text-whiteText">
              Indonesia
            </span>
          </p>
        </div>
        {/* Input search dan dropdown */}
        <div className="h-10 sm:hidden md:hidden lg:flex rounded-md  flex-grow relative ">
          <span
            onClick={() => setShowAll(!showAll)}
            className=" w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md"
          >
            All <ArrowDropDownIcon />
          </span>
          {showAll && (
            <div>
              <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50 ">
                {allItems.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <input
            type="text"
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
          />
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
            <SearchIcon />
          </span>
        </div>
        {/* Link Sign In */}
        <Link to="/signin">
          <div className="flex flex-col items-start justify-center headerHover">
            <p className="text-xs md:flex sm:flex lg:flex text-lightText font-light">
              Hello, Sign in
            </p>
            <p className="text-sm md:flex sm:hidden lg:flex  font-semibold -mt-1 text-whiteText">
              Account & List <ArrowDropDownIcon />
            </p>
          </div>
        </Link>
        {/* Link Returns & Orders */}
        <div className="flex flex-col items-start justify-center headerHover">
          <p className="text-xs text-lightText font-light">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
        </div>
        {/* Cart */}
        <Link to="/cart">
          <div className="flex relative items-start justify-center headerHover">
            <ShoppingCartIcon />
            <p className="text-xs  font-semibold mt-3 text-whiteText">
              <span className="sm:hidden lg:flex">Cart</span>
              {/* Jumlah item dalam keranjang */}
              <span className="absolute text-xs top-0 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
                {products.length > 0 ? products.length : 0}
              </span>
            </p>
          </div>
        </Link>
      </div>
      {/* Dropdown All Departments untuk tampilan mobile */}
      <div className="h-10 lg:hidden rounded-md flex flex-grow relative ">
        <span
          onClick={() => setShowAll(!showAll)}
          className=" w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md"
        >
          All <ArrowDropDownIcon />
        </span>
        {showAll && (
          <div>
            <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50">
              {allItems.map((item, index) => (
                <li
                  key={index}
                  className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        <input
          type="text"
          className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
        />
        <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
          <SearchIcon />
        </span>
      </div>
      {/* Bagian bawah header */}
      <HeaderBottom />
    </div>
  );
};

export default Header;
