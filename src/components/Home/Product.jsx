// Product.jsx
import { useLoaderData } from "react-router-dom";
import {
  Favorite as FavoriteIcon,
  Api as ApiIcon,
  ShoppingCart as ShoppingCartIcon,
  ArrowCircleRight as ArrowCircleRightIcon,
  Star as StarIcon,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/AmazonSlice";

const Product = () => {
  const dispatch = useDispatch();
  const data = useLoaderData();

  // Periksa apakah data merupakan array sebelum melakukan mapping
  if (!Array.isArray(data)) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" max-w-screen-2xl mx-auto grid lg:grid-cols-4 md:grid-cols-2 px-4 gap-10 py-2 sm:grid-cols-1  place-items-center">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-white h-auto border-[1px] border-gray-200 py-6 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4"
        >
          <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
            {item.category}
          </span>
          <div className="w-full h-auto flex items-center justify-center relative group">
            <img
              className="w-52 h-64 object-contain"
              src={item.image}
              alt="Product"
            />
            <ul
              className="w-full h-36 bg-gray-100 absolute group-hover:bottom-0 duration-500
              bottom-[-170px] flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-1 border-r"
            >
              <li className="productLi">
                Compare{" "}
                <span>
                  <ApiIcon />
                </span>
              </li>
              <li className="productLi">
                Add To Cart{" "}
                <span>
                  <ShoppingCartIcon />
                </span>
              </li>
              <li className="productLi">
                View Details{" "}
                <span>
                  <ArrowCircleRightIcon />
                </span>
              </li>
              <li className="productLi">
                Add To Wishlist{" "}
                <span>
                  <FavoriteIcon />
                </span>
              </li>
            </ul>
          </div>
          <div className="px-4 z-10 bg-white">
            <div className="flex gap-4 items-center justify-between">
              <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-bold">
                {item.title.substring(0, 20)}
              </h2>
              <p className="text-sm text-gray-600 font-semibold">
                ${item.price}
              </p>
            </div>
            <div className="text-sm">
              <p>{item.description.substring(0, 90)}...</p>
              <div className="text-yellow-500">
                {[...Array(5)].map((_, index) => (
                  <StarIcon key={index} />
                ))}
              </div>
              <div>
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: item.id,
                        title: item.title,
                        description: item.description,
                        price: item.price,
                        category: item.category,
                        image: item.image,
                        quantity: 1,
                      })
                    )
                  }
                  className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
