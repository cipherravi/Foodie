import ItemInCart from "../Components/cart/ItemsInCart";
import PaymentMethod from "../Components/cart/PaymentMethod";
import DeliveryAddress from "../Components/cart/DeliveryAddress";
import BillDetails from "../Components/cart/BillDetails";

function Cart() {
  return (
    <>
      <div className="cart-wrapper w-full min-h-screen bg-white flex flex-col  justify-center  lg:flex-row ">
        <div className="w-full h-screen lg:w-[60%]  flex flex-col gap-2 bg-white ">
          <ItemInCart />
          <DeliveryAddress />
        </div>
        <div className="w-full h-screen lg:w-[40%] bg-white flex flex-col gap-4 mt-10 lg:mt-2">
          <span className="w-full h-4 pt-2 bg-[#E9ECEE] lg:hidden "></span>
          <BillDetails />
          <span className="w-full h-4 pt-2 bg-[#E9ECEE] "></span>
          <PaymentMethod />
        </div>
      </div>
    </>
  );
}

export default Cart;
