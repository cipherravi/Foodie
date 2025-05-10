import { useState } from "react";

const Button = () => {
  return (
    <div className="w-full h-10 flex justify-center mt-2">
      <button className="bg-[#B80000] p-2 w-1/2 text-white rounded-lg">
        Proceed
      </button>
    </div>
  );
};

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState("Upi");

  const paymentOptions = ["Card", "Upi", "Pay Later", "Cash On Delivery"];

  const [cardValue, setCardValue] = useState("");
  const [cvvValue, setCvvValue] = useState("");
  const [expiryValue, setExpiryValue] = useState("");

  const handleCardChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,16}$/.test(value)) {
      setCardValue(value);
    }
  };

  const handleCvvChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,4}$/.test(value)) {
      setCvvValue(value);
    }
  };
  const handleExpiryChange = (e) => {
    let value = e.target.value;

    // Remove all non-digit characters first
    const digits = value.replace(/\D/g, "");

    // Handle user deleting "/"
    if (digits.length < 3) {
      setExpiryValue(digits);
      return;
    }

    // Auto-add "/" after 2 digits
    const formatted = digits.slice(0, 2) + "/" + digits.slice(2, 4);

    // Validate and update state
    if (
      formatted.length <= 5 &&
      (/^(0[1-9]|1[0-2])\/\d{0,2}$/.test(formatted) || formatted === "")
    ) {
      setExpiryValue(formatted);
    }
  };

  return (
    <div className=" h-2/5 bg-white w-full ">
      <h1 className="font-gilroy-bold text-xl text-center p-2 ">
        Payment method <i className="fa-solid fa-wallet"></i>
      </h1>
      <div className="flex w-full h-full">
        <div className="w-1/2 h-full flex flex-col justify-around gap-4 p-4">
          {paymentOptions.map((method, index) => (
            <div
              key={index}
              onClick={() => setSelectedMethod(method)}
              className={`w-full h-1/4 rounded-md flex items-center px-5 font-gilroy-bold cursor-pointer select-none 
                ${
                  selectedMethod === method
                    ? "bg-black text-white"
                    : "bg-[#E9ECEE] hover:bg-black hover:text-white"
                }
              `}
            >
              <p>{method}</p>
            </div>
          ))}
        </div>
        <div className="w-1/2 h-[85%] mr-2 flex justify-center items-center">
          {selectedMethod === "Card" && (
            <div className="space-y-2">
              <p className="font-semibold">Enter Card Details:</p>
              <input
                type="text"
                value={cardValue}
                onChange={handleCardChange}
                maxLength={16}
                placeholder="Card Number"
                className="border w-full p-2 rounded"
              />
              <input
                type="text"
                placeholder="Expiry Date"
                value={expiryValue}
                onChange={handleExpiryChange}
                maxLength={5}
                className="border w-full p-2 rounded"
              />
              <input
                type="password"
                placeholder="CVV"
                value={cvvValue}
                maxLength={4}
                onChange={handleCvvChange}
                className="border w-full p-2 rounded"
              />
              <Button />
            </div>
          )}
          {selectedMethod === "Upi" && (
            <div className="w-full h-1/2">
              <p className="font-semibold mb-2">Enter your UPI ID:</p>
              <input
                type="text"
                placeholder="example@upi"
                className="border w-full p-2 rounded"
              />
              <Button />
            </div>
          )}
          {selectedMethod === "Pay Later" && (
            <div className="w-full h-1/4 text-center">
              <p className="font-semibold">
                You'll receive a payment link after order placement.
              </p>
              <Button />
            </div>
          )}

          {selectedMethod === "Cash On Delivery" && (
            <div className="w-full h-1/4 text-center">
              <p className="font-semibold">
                You will pay at the time of delivery.
              </p>
              <Button />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
