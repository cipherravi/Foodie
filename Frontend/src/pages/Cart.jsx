import "./css/Cart.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { url } from "../utils/Constant";
import { removeItem, addItem } from "../utils/Store/CartSlice";
import { useState } from "react";

function AddTotalBill(cartItems) {
  let totalPrice = 0;
  cartItems.forEach((item) => {
    let itemPrice = item.price || item.defaultPrice || 0;
    itemPrice = itemPrice * item.quantity;
    totalPrice += itemPrice;
  });
  return totalPrice / 100;
}
function AddGSTAndOther() {}

function Cart() {
  const [activeIndex, setActiveIndex] = useState(null);

  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();
  console.log(cartItems);
  function handleRemoveItemFromCart(id) {
    dispatch(removeItem(id));
  }
  function handleIncreaseQuantity(item) {
    dispatch(addItem(item));
  }

  const totalItemPrice = AddTotalBill(cartItems);
  const deliveryPrice = 10;
  const totalGstAndOther = Math.floor((18 / 100) * totalItemPrice);
  const totalBillPrice = Math.floor(
    totalItemPrice + deliveryPrice + totalGstAndOther
  );

  return (
    <>
      <div className="cart-wrapper w-full min-h-screen bg-[#E9ECEE]  flex justify-center gap-10 py-10">
        <div className="w-[55%] h-screen  flex flex-col gap-4">
          <div className=" h-3/5 bg-white w-full overflow-y-auto overflow-x-hidden relative  ">
            <h1 className="font-gilroy-bold text-2xl text-center p-2 sticky top-0 w-full bg-white ">
              Items in Cart
              <i className="fa-solid fa-cart-shopping lg:text-lg"></i>
            </h1>

            {cartItems.length !== 0 ? (
              cartItems.map((item) => {
                let IMG_URL = item.imageId ? url + item.imageId : null;
                return (
                  <div
                    className="bg-slate-200 flex justify-between p-5 w-[90%] ml-9 mb-3 rounded-lg shadow"
                    key={item.id}
                  >
                    <div className="flex gap-6 items-start w-3/4">
                      {/* Image Section */}
                      <div className="w-[100px] h-[100px] overflow-hidden rounded-md border">
                        {IMG_URL ? (
                          <img
                            src={IMG_URL}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-xs text-gray-500">
                            No image
                          </div>
                        )}
                      </div>

                      {/* Item Details */}
                      <div className="flex flex-col justify-between gap-2">
                        <h1 className="font-semibold text-lg">{item.name}</h1>
                        <h2 className="text-gray-700 text-md">
                          ₹{(item.price ?? item.defaultPrice) / 100}
                        </h2>
                        <button className=" w-20 text-green-600 text-sm hover:underline text-start ">
                          Customise
                          <i className="fa-solid fa-chevron-right"></i>
                        </button>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center ">
                      <div className="flex items-center justify-center w-28 gap-4 px-4 py-1 text-xl border rounded-md border-black">
                        <button
                          className="cursor-pointer"
                          onClick={() => handleRemoveItemFromCart(item.id)}
                        >
                          <i className="text-2xl">-</i>
                        </button>
                        <div className="text-green-700">{item.quantity}</div>
                        <button
                          className="cursor-pointer text-green-700 "
                          onClick={() => handleIncreaseQuantity(item)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="flex w-full justify-center items-center h-[calc(100%-3rem)]">
                <Link to="/restaurants" className=" w-1/2 h-12">
                  <button className="w-full h-full bg-[#19A672] text-white font-gilroy-bold  ">
                    LET'S ADD <i className="fa-solid fa-face-smile-wink"> </i>
                  </button>
                </Link>
              </div>
            )}
          </div>
          <div className=" h-2/5 bg-white w-full ">
            <h1 className="font-gilroy-bold text-xl text-center p-2 ">
              Payment method <i className="fa-solid fa-wallet"></i>
            </h1>
            <div className="flex w-full h-[85%]">
              <div className="w-1/2 h-[85%] flex flex-col justify-around gap-4 p-4">
                <div className="w-full h-1/4 bg-[#E9ECEE] rounded-md flex items-center px-5 font-gilroy-bold cursor-pointer select-none hover:bg-black hover:text-white">
                  <p>Card</p>
                </div>
                <div className="w-full h-1/4 bg-[#E9ECEE] rounded-md flex items-center px-5 font-gilroy-bold cursor-pointer select-none hover:bg-black hover:text-white">
                  <p>Upi</p>
                </div>
                <div className="w-full h-1/4 bg-[#E9ECEE] rounded-md flex items-center px-5 font-gilroy-bold cursor-pointer select-none hover:bg-black hover:text-white">
                  <p>Pay Later</p>
                </div>
                <div className="w-full h-1/4 bg-[#E9ECEE] rounded-md flex items-center px-5 font-gilroy-bold cursor-pointer select-none hover:bg-black hover:text-white">
                  <p>Cash On Delivery</p>
                </div>
              </div>
              <div className="w-1/2 h-[85%] mr-2"></div>
            </div>
          </div>
        </div>
        <div className="w-[30%] h-screen bg-white flex flex-col gap-4">
          <div className="w-full h-[60%]  flex flex-col items-center">
            <h1 className="font-gilroy-bold text-xl  p-2 ">
              Delivery Address <i className="fa-solid fa-location-dot"></i>
            </h1>
            <div className="flex flex-col gap-7 w-[80%] h-1/2 mt-5">
              <input
                type="text"
                placeholder="Address"
                className="border-2 h-14 p-2"
              />
              <div className="flex flex-col  w-full ">
                <input
                  type="text"
                  placeholder="Door / Flat No."
                  className="border-2 border-b-0 h-14 p-2"
                />
                <input
                  type="text"
                  placeholder="LandMark"
                  className="border-2 h-14 p-2"
                />
              </div>
            </div>
            {/*  */}
            <div className="w-[80%] h-max flex">
              {["Home", "Work", "Other"].map((label, index) => (
                <button
                  key={index}
                  onClick={
                    () => setActiveIndex(activeIndex === index ? null : index) // toggle same button
                  }
                  className={`w-1/3 p-6 h-5 border flex justify-center items-center hover:bg-black hover:text-white ${
                    activeIndex === index ? "bg-black text-white" : ""
                  }`}
                >
                  <div className="flex items-center justify-center gap-1">
                    {label === "Home" && <i className="fa-solid fa-house" />}
                    {label === "Work" && (
                      <i className="fa-solid fa-briefcase" />
                    )}
                    {label === "Other" && (
                      <i className="fa-solid fa-location-dot" />
                    )}
                    {label}
                  </div>
                </button>
              ))}
            </div>
            {/*  */}
            <button className="w-2/3 h-10 p-2 text-white font-gilroy-medium mt-10 bg-[#B80000]">
              SAVE ADDRESS & PROCEED
            </button>
          </div>
          <span className="w-full h-4 pt-2 bg-[#E9ECEE] "></span>
          <div className="w-full h-2/5 ">
            <h1 className="font-gilroy-bold text-xl text-start p-2 px-4">
              Bill Details
            </h1>
            <div className="w-full h-3/4 flex flex-col justify-around gap-4 p-4 font-gilroy-medium">
              <div>
                <div className="flex w-full justify-between px-2">
                  <p>Item Total</p>
                  <p className="text-sm">
                    <i className="text-sm mr-0.5">₹</i>
                    {totalItemPrice}
                  </p>
                </div>
                <div className="flex w-full justify-between px-2">
                  <p>Delivery Fee</p>
                  <p className="text-sm">
                    <i className="text-sm mr-0.5">₹</i>
                    {deliveryPrice}
                  </p>
                </div>
              </div>
              <div className="flex w-full justify-between px-2">
                <p>Delivery Tip</p>
                <button className=" text-[#B80000]">Add Tip</button>
              </div>
              <div className="flex w-full justify-between px-2 ">
                <p>GST & other charges </p>
                <p className="text-sm">
                  <i className="text-sm mr-0.5">₹</i>
                  {totalGstAndOther}
                </p>
              </div>
              <p className="line w-full  min-h-0.5 bg-black "></p>
              <div className="flex w-full justify-between px-2 pt-5">
                <p className="font-gilroy-bold">TO PAY</p>
                <p className="font-gilroy-bold">
                  <i className="text-sm mr-0.5">₹</i>
                  {totalBillPrice}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
