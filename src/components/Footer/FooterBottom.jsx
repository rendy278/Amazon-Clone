import { bottomFooter } from "./index";

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full bg-footerBottom py-3">
      <div className="max-w-5xl mx-auto">
        <div className="w-full grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-2 gap-4 place-items-center text-gray-400">
          {bottomFooter.map((item) => {
            return (
              <div key={item._id} className="">
                <h3 className="w-24 font-bold text-[12px] hover:underline text-[#ddd]  mb-[2px]">
                  {item.title}
                </h3>
                <p className="w-24 tracking-tight text-[#999] hover:underline ">
                  {item.des}
                </p>
              </div>
            );
          })}
        </div>
        <footer className="w-full  flex-flex-col gap-4 justify-center items-center py-3 mt-3 ">
          <div className="flex items-center gap-6 justify-center">
            <p className="text-xs text-white hover:text-yellow-500 hover:underline cursor-pointer duration-100">
              Conditions of use
            </p>
            <p className="text-xs text-white hover:text-yellow-500 hover:underline cursor-pointer duration-100">
              Privacy Notice
            </p>
            <p className="text-xs text-white hover:text-yellow-500 hover:underline cursor-pointer duration-100">
              Privacy Policy
            </p>
          </div>
          <div className="flex justify-center items-center mt-2">
            <p className="text-xs text-white">
              &copy; 1996-{currentYear} Amazon.com, Inc. or its affiliates
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FooterBottom;
