import { darklogo } from "../../assets/index";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
const SignIn = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className="w-full">
        <div className="items-center w-full grid place-content-center mx-auto bg-gray-100 py-10">
          <form className="mx-auto items-center flex-col flex w-[356px]">
            <img className=" w-48 h-20 object-cover" src={darklogo} alt="" />
            <div className="w-full border border-zinc-200 p-6 relative">
              <h1 className="absolute top-1 p-1 hover:bg-red-500 hover:text-white rounded-md duration-100 right-1 cursor-pointer font-medium">
                <Link to="/">
                  <CloseIcon />
                </Link>
              </h1>
              <h2 className="font-titleFont text-3xl font-medium mb-4">
                Sign In
              </h2>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
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
                  <button
                    onClick={(e) => e.preventDefault()}
                    className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3"
                  >
                    Sign In
                  </button>
                </div>
                <p className="text-xs font-medium text-black leading-4 mt-4">
                  By Continuing, you agree to Amazon{"'s "}
                  <span className="text-blue-600">
                    Conditions of Use
                  </span> and{" "}
                  <span className="text-blue-600">Privace Notice.</span>
                </p>
                <p className="flex text-xs mt-4 cursor-pointer items-center group">
                  <ArrowRightIcon />{" "}
                  <span className="text-blue-600 group-hover:text-yellow-500 group-hover:underline">
                    Need Help?
                  </span>
                </p>
              </div>
            </div>
            <p className="w-full text-xs text-gray-600 mt-4 flex items-center gap-3 mx-auto">
              <span className="w-1/3 border bg-zinc-400"></span>
              <span className="w-1/3"> New To Amazon ? </span>
              <span className="w-1/3 border bg-zinc-400"></span>
            </p>
            <Link to="/registration" className="w-full">
              <button
                className="w-full py-3 mt-4 text-sm font-normal rounded-md bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border
            border-zinc-400 active:border-yellow-800 active:shadow-amazonInput px-3"
              >
                Create Your Amazon Account
              </button>
            </Link>
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

export default SignIn;
