import { url } from "../utils/Constant";

import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/Store/CartSlice";
import toast from "react-hot-toast";

function RestaurantMenuCard(itemInfo) {
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
  } = itemInfo;
  let IMG_URL;
  if (imageId !== undefined) {
    IMG_URL = url + imageId;
  } else {
    IMG_URL = null;
  }
  const item = itemInfo;
  const cartItems = useSelector((state) => state.cart.items);
  const cartItem = cartItems.find((cart) => cart.id === item.id);

  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addItem(item));
    toast.success("Item added to cart", {
      duration: 1000,
    });
  }

  function handleRemoveItemFromCart(id) {
    dispatch(removeItem(id));
  }
  function handleIncreaseQuantity() {
    dispatch(addItem(item));
  }
  return (
    <>
      <div
        className="item-card  w-full min-h-[20vh]  //layout flex justify-between items-center   p-4 
        lg:w-full lg:min-h-[40]  lg:p-4 "
      >
        <div className="item-info //layout flex flex-col  max-w-[50%]  pr-2 gap-1  lg:w-[70%]   ">
          <h3 className="item-name  font-gilroy-bold text-base lg:text-lg">
            {name}
          </h3>
          <h3 className="item-price  font-gilroy-medium text-base">
            ₹{price / 100 || defaultPrice / 100}
          </h3>
          <p className="item-desc  max-h-12  font-gilroy-light mt-1  text-ellipsis text-xs overflow-hidden  lg:max-h-12  lg:mt-1 ">
            {description}
          </p>
        </div>
        <div className="item-image  min-w-36 max-h-40   relative   lg:max-w-40 lg:max-h-36   ">
          <img
            className="  h-32 w-32    object-cover object-center rounded-2xl  lg:w-40 lg:h-36  "
            style={{
              height: IMG_URL ? "" : "0px",
            }}
            src={IMG_URL}
            alt=""
          />
          {!cartItem ? (
            <button
              onClick={handleAddToCart}
              className="add-item  w-24 h-10  absolute left-[12%] bottom-[-15px] font-gilroy-bold  text-base  px-5 py-2 outline-none rounded-md cursor-pointer uppercase border-2 border-[#d9dadb] bg-white text-[#4caf50] z-10  lg:w-28 lg:h-10    lg:px-10 lg:py-2  lg:left-[14%] lg:bottom-[-15px] lg:text-base "
            >
              ADD
            </button>
          ) : (
            <div className="flex items-center ">
              <div className="flex items-center justify-center  gap-4  text-xl    w-24 h-10  absolute left-[12%] bottom-[-15px] font-gilroy-bold px-5 py-2 outline-none rounded-md cursor-pointer uppercase border-2 border-[#d9dadb] bg-white  z-10  lg:w-28 lg:h-10  lg:px-10 lg:py-2  lg:left-[14%] lg:bottom-[-15px] lg:text-base">
                <button
                  className="cursor-pointer"
                  onClick={() => handleRemoveItemFromCart(item.id)}
                >
                  <p className="text-2xl">-</p>
                </button>
                <div className="text-green-700">{cartItem.quantity}</div>
                <button
                  className="cursor-pointer text-green-700 "
                  onClick={() => handleIncreaseQuantity(item)}
                >
                  +
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className=" horizontal-rule "></div>
    </>
  );
}
export default RestaurantMenuCard;
