import { useState } from "react";

const PaymentMethodSelector = () => {
  const [selected, setSelected] = useState("credit");

  const options = [
    {
      id: "credit",
      label: "Credit Card",
    },
    {
      id: "bank",
      label: "Bank Account",
    },
  ];

  return (
    <div className="space-y-4">
      {options.map((option) => (
        <label
          key={option.id}
          className={`flex items-center  transition-all justify-between border rounded-xl px-4 py-3 cursor-pointer 
            ${
              selected === option.id
                ? "border-MainBlue transition-all text-white bg-MainBlue shadow-lg "
                : "border-gray-300 transition-all text-black hover:border-MainBlue"
            }`}
          onClick={() => setSelected(option.id)}
        >
          <div className="flex items-center space-x-2 transition-all">
            <span className="text-xl ">{option.icon}</span>
            <span className="font-medium  transition-all">{option.label}</span>
          </div>

          <span
            className={`w-5 h-5 border-2 transition-all rounded-full flex items-center justify-center 
              ${
                selected === option.id ? "border-SecBlue " : "border-MainBlue"
              }`}
          >
            {selected === option.id && (
              <span className="w-2.5 h-2.5 bg-SecBlue rounded-full transition-all"></span>
            )}
          </span>
        </label>
      ))}
    </div>
  );
};

export default PaymentMethodSelector;
