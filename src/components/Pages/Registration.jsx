import { darklogo } from "../../assets/index";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
const Registration = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className="w-full">
        <div className="items-center w-full grid place-content-center mx-auto bg-gray-100 py-5">
          <form className="mx-auto items-center flex-col flex w-[356px]">
            <img className=" w-48 h-20 object-cover" src={darklogo} alt="" />
            <div className="w-full border border-zinc-200 p-3 relative">
              <h1 className="absolute top-1 p-1 hover:bg-red-500 hover:text-white rounded-md duration-100 right-1 cursor-pointer font-medium">
                <Link to="/">
                  <CloseIcon />
                </Link>
              </h1>
              <h2 className="font-titleFont text-3xl font-medium mb-4">
                Create Account
              </h2>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium">Your Name</p>
                  <input
                    className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600]
                focus-within:shadow-amazonInput duration-100"
                    type="text"
                  />
                  <p className="text-sm font-medium">
                    Email or mobile phone number
                  </p>
                  <input
                    className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600]
                    focus-within:shadow-amazonInput duration-100"
                    type="email"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium">Password</p>
                    <input
                      className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600]
                focus-within:shadow-amazonInput duration-100"
                      type="password"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium">Re-enter Password</p>
                    <input
                      className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600]
                focus-within:shadow-amazonInput duration-100"
                      type="password"
                    />
                  </div>
                  <p className="text-xs">
                    Passwords must be at least 6 characters.
                  </p>
                  <button
                    onClick={(e) => e.preventDefault()}
                    className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3"
                  >
                    Continue
                  </button>
                </div>
                <p className="text-xs font-medium text-black leading-4 mt-4">
                  By Continuing, you agree to Amazon{"'s "}
                  <span className="text-blue-600">
                    Conditions of Use
                  </span> and{" "}
                  <span className="text-blue-600">Privace Notice.</span>
                </p>
                <p className="flex text-xs mt-4 cursor-pointer items-center group gap-2">
                  Already have an account ?
                  <Link to="/signin">
                    <span className="text-blue-600 cursor-pointer group-hover:text-yellow-500 group-hover:underline">
                      Sign in <ArrowRightIcon />
                    </span>
                  </Link>
                </p>
                <p className="flex text-xs cursor-pointer items-center group gap-2">
                  Buying For Work ?
                  <span className="text-blue-600 cursor-pointer group-hover:text-yellow-500 group-hover:underline">
                    Create a free business account
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
        <footer className="w-full bg-gradient-to-t from-white via-white to-zinc-200 flex-flex-col gap-4 justify-center items-center py-10">
          <div className="flex items-center gap-6 justify-center">
            <p className="text-xs text-blue-600 hover:text-yellow-500 hover:underline cursor-pointer duration-100">
              Conditions of use
            </p>
            <p className="text-xs text-blue-600 hover:text-yellow-500 hover:underline cursor-pointer duration-100">
              Privacy Notice
            </p>
            <p className="text-xs text-blue-600 hover:text-yellow-500 hover:underline cursor-pointer duration-100">
              Privacy Policy
            </p>
          </div>
          <div className="flex justify-center items-center mt-4">
            <p className="text-xs">
              &copy; 1996-{currentYear} Amazon.com, Inc. or its affiliates
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Registration;
