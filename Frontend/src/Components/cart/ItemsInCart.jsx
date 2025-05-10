import { Link } from "react-router-dom";
import { url } from "../../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../utils/Store/CartSlice";

const ItemsInCart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  function handleRemoveItemFromCart(id) {
    dispatch(removeItem(id));
  }
  function handleIncreaseQuantity(item) {
    dispatch(addItem(item));
  }
  return (
    <div className=" h-[60%] bg-white w-full   flex flex-col items-center  overflow-y-auto overflow-x-hidden">
      <h1 className="font-gilroy-bold text-2xl text-center p-2 sticky top-0 w-full bg-white ">
        Items in Cart
        <i className="fa-solid fa-cart-shopping lg:text-lg"></i>
      </h1>

      {cartItems.length !== 0 ? (
        cartItems.map((item) => {
          let IMG_URL = item.imageId ? url + item.imageId : null;
          return (
            <div
              className="bg-slate-200 flex justify-between p-4 w-full   mb-3 rounded-lg shadow"
              key={item.id}
            >
              <div className="flex gap-2 items-start w-3/4">
                {/* Image Section */}
                <div className="w-32 max-w-36 h-24 max-h-56  overflow-hidden rounded-md border">
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
                <div className="flex flex-col justify-between gap-2 w-3/5">
                  <h1 className="font-semibold text-md ">{item.name}</h1>
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
                <div className="flex items-center justify-center w-20 max-w-32 gap-4 px-4 py-1 text-xl border rounded-md border-black font-gilroy-bold select-none">
                  <button
                    className="cursor-pointer"
                    onClick={() => handleRemoveItemFromCart(item.id)}
                  >
                    <p className="text-2xl">-</p>
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
  );
};

export default ItemsInCart;
