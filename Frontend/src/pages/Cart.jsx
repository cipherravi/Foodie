import "./css/Cart.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { url } from "../utils/Constant";
function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const {
    id,
    category,
    isVeg,
    name,
    price,
    defaultPrice,
    description,
    imageId,
    inStock,
    addons,
  } = cartItems;
  console.log(cartItems);

  function handleRemoveItemFromCart() {}
  function handleAddItemToCart() {}
  function findTotalItem() {}
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
                        <button className="text-green-600 text-sm hover:underline text-start">
                          Customise{" "}
                          <i className="fa-solid fa-chevron-right"></i>
                        </button>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center">
                      <div className="flex items-center gap-4 px-4 py-1 text-xl border rounded-md">
                        <div
                          className="cursor-pointer"
                          onClick={handleRemoveItemFromCart}
                        >
                          -
                        </div>
                        <div>0</div>
                        <div
                          className="cursor-pointer"
                          onClick={handleAddItemToCart}
                        >
                          +
                        </div>
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
          <div className=" h-2/5 bg-white">
            <h1 className="font-gilroy-bold text-xl text-center p-2 ">
              Payment method <i className="fa-solid fa-wallet"></i>
            </h1>
          </div>
        </div>
        <div className="w-[30%] h-screen bg-white flex flex-col gap-4">
          <div className="w-full h-3/5  ">
            <h1 className="font-gilroy-bold text-xl text-center p-2 ">
              Delivery Address <i className="fa-solid fa-location-dot"></i>
            </h1>
          </div>
          <span className="w-full h-4 pt-2 bg-[#E9ECEE] "></span>
          <div className="w-full h-2/5 ">
            <h1 className="font-gilroy-bold text-xl text-start p-2 px-10">
              Bill Details
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
