import FooterMiddleList from "./FooterMiddleList";
import { middleList } from "./index";
import { logo, indFlag } from "../../assets/index";
const FooterMiddle = () => {
  return (
    <div className="w-full bg-amazon_light text-white">
      <div className="w-full border-b-[1px] border-gray-500 py-10">
        <div className="max-w-5xl mx-auto text-gray-300">
          <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 gap-2 sm:grid-cols-1 lg:place-items-center md:place-items-center sm:place-content-start sm:px-2 lg:px-0 md:px-3  items-start ">
            {middleList.map((item) => (
              <FooterMiddleList
                key={item.id}
                title={item.title}
                ListData={item.ListItem[0].ListData} // Corrected prop name
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex gap-6 items-center justify-center py-6">
        <div className="">
          <img className="w-20 pt-3" src={logo} alt="logo" />
        </div>
        <div className="flex gap-2">
          <p
            className="flex gap-1 items-center justify-center border border-gray-500
          hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1"
          >
            Indonesia
          </p>
        </div>
        <div
          className="flex gap-1 items-center justify-center border border-gray-500
          hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1"
        >
          <img className="w-10  p-1" src={indFlag} alt="flagimg" />
          <p>Indonesia</p>
        </div>
      </div>
    </div>
  );
};

export default FooterMiddle;
