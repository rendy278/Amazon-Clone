import Banner from "../Home/Banner";
import Product from "../Home/Product";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="w-full lg:-mt-36 md:-mt-40 sm:-mt-[80px]">
        <Product />
      </div>
    </div>
  );
};

export default Home;
