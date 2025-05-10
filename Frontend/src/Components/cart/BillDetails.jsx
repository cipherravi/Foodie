import { useSelector } from "react-redux";

function AddTotalBill(cartItems) {
  let totalPrice = 0;
  cartItems.forEach((item) => {
    let itemPrice = item.price || item.defaultPrice || 0;
    itemPrice = itemPrice * item.quantity;
    totalPrice += itemPrice;
  });
  return totalPrice / 100;
}

const BillDetails = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const totalItemPrice = AddTotalBill(cartItems);
  const deliveryPrice = cartItems.length > 0 ? 20 : 0;
  const totalGstAndOther = Math.floor((18 / 100) * totalItemPrice);
  const totalBillPrice = Math.floor(
    totalItemPrice + deliveryPrice + totalGstAndOther
  );

  return (
    <div className="w-full h-2/5  ">
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
  );
};

export default BillDetails;
