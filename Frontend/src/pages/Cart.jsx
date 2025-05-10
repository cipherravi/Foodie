import "./css/Cart.css";

import ItemInCart from "../Components/cart/ItemsInCart";
import PaymentMethod from "../Components/cart/PaymentMethod";
import DeliveryAddress from "../Components/cart/DeliveryAddress";
import BillDetails from "../Components/cart/BillDetails";

function Cart() {
  return (
    <>
      <div className="cart-wrapper w-full min-h-screen bg-[#E9ECEE]  flex justify-center gap-10 py-10">
        <div className="w-[55%] h-screen  flex flex-col gap-4">
          <ItemInCart />
          <PaymentMethod />
        </div>
        <div className="w-[30%] h-screen bg-white flex flex-col gap-4">
          <DeliveryAddress />
          <span className="w-full h-4 pt-2 bg-[#E9ECEE] "></span>
          <BillDetails />
        </div>
      </div>
    </>
  );
}

export default Cart;
