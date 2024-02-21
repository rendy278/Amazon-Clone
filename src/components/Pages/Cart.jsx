import { useSelector, useDispatch } from "react-redux";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useEffect, useState } from "react";
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
  resetCart,
} from "../../redux/AmazonSlice";
import EmptyCart from "../../assets/emptyCart.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.amazon.products);
  const [totalPrice, setTotalPrice] = useState("");
  useEffect(() => {
    let Total = 0;
    products.forEach((item) => {
      Total += item.price * item.quantity;
    });
    setTotalPrice(Total.toFixed(2));
  }, [products]);

  const handleDeleteItem = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <div className="w-full h-full bg-gray-100 p-4">
      {products.length > 0 ? (
        <div className="container mx-auto h-full grid lg:grid-cols-5 sm:grid-cols-1  gap-8">
          <div className="w-full h-full bg-white px-4 col-span-4 ">
            <div className="font-titleFont flex items-center justify-between border-b-[1px] border-b-gray-400 py-3">
              <h2 className="text-3xl font-medium">Shopping Cart</h2>
              <h4 className="text-xl font-semibold">Subtitle</h4>
            </div>
            <div className="">
              {products.map((item) => (
                <div
                  key={item.id}
                  className="w-full border-b-[1px] border-b-gray-300 p-4 flex lg:flex-row sm:flex-col md:flex-row items-center gap-6 justify-between"
                >
                  <div className="lg:w-1/5 sm:3/5 md:1/5 ">
                    <img
                      className="w-full h-44 object-contain"
                      src={item.image}
                      alt="productimg"
                    />
                  </div>
                  <div className="lg:w-4/5 md:w-3/5 sm:2/5">
                    <h2 className="font-semibold text-lg">{item.title}</h2>
                    <p className="text-sm">
                      {item.description.substring(0, 200)}
                    </p>
                    <p className="text-base">
                      Unit Price{" "}
                      <span className="font-semibold">${item.price}</span>
                    </p>
                    <div className="bg-[#F0F2F2] flex justify-center items-center gap-2 w-28 py-1 mt-2 text-center drop-shadow-lg rounded-md">
                      <p>Qty:</p>
                      <p
                        onClick={() => dispatch(decrementQuantity(item.id))}
                        className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-red-500 duration-300"
                      >
                        -
                      </p>
                      <p>{item.quantity}</p>
                      <p
                        onClick={() => dispatch(incrementQuantity(item.id))}
                        className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300"
                      >
                        +
                      </p>
                    </div>
                    <button
                      onClick={() => handleDeleteItem(item.id)}
                      className="bg-red-500 w-36 py-1 rounded-lg text-white lg:mt-2 md:mt-4 sm:mt-6 hover:bg-red-700 duration-300"
                    >
                      Delete Item
                    </button>
                  </div>
                  <div>
                    <p className="text-lg font-titleFont font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="py-4 w-full">
              <button
                onClick={() => dispatch(resetCart())}
                className="px-10 py-2 flex justify-center lg:justify-start lg:items-start items-center lg:mx-0 md:mx-0 mx-auto bg-red-500 hover:bg-red-600 active:bg-red-700 text-white rounded-lg font-titleFont font-semibold text-lg tracking-wide"
              >
                Clear Cart
              </button>
            </div>
          </div>
          <div className="lg:w-full md:w-96 sm:w-full h-52 justify-center mx-auto flex  items-center p-4 flex-col bg-white lg:col-span-1 sm:col-span-4 ">
            <div className="">
              <p className="flex gap-2 items-start text-sm">
                <span className="text-green-500">
                  <CheckCircleIcon />
                </span>
                Your order qualifies for Free Shipping Choose this option at
                checkout, See details...
              </p>
            </div>
            <div className="">
              <p className="font-semibold px-10 py-1 flex items-center gap-1 justify-center">
                Total <span className="text-lg font-bold">${totalPrice}</span>
              </p>
            </div>
            <button className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3">
              Proceed to Pay
            </button>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex mx-auto lg:flex-row sm:flex-col md:flex-row-reverse items-center justify-center gap-4 py-10"
        >
          <div className="">
            <img src={EmptyCart} alt="emptyCartImg" />
          </div>
          <div className="lg:w-96 sm:w-80  p-4 bg-white flex flex-col items-center rounded-md shadow-lg">
            <h1>Your Cart feels lonely.</h1>
            <p className="text-sm text-center">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc, and make it happy
            </p>
            <Link to="/">
              <button
                className="mt-6 bg-yellow-400 rounded-md cursor-pointer hover:bg-yellow-500 active:bg-yellow-700
              px-8 py-2 font-titleFont font-semibold"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;
