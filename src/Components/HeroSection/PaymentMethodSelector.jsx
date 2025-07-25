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
          className={`flex items-center justify-between border rounded-xl px-4 py-3 cursor-pointer transition
            ${
              selected === option.id
                ? "border-MainBlue bg-MainBlue shadow-lg "
                : "border-gray-300  hover:border-MainBlue"
            }`}
          onClick={() => setSelected(option.id)}
        >
          <div className="flex items-center space-x-2 ">
            <span className="text-xl ">{option.icon}</span>
            <span className="font-medium text-black  ">{option.label}</span>
          </div>

          <span
            className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition
              ${
                selected === option.id
                  ? "border-SecBlue "
                  : "border-MainBlue"
              }`}
          >
            {selected === option.id && (
              <span className="w-2.5 h-2.5 bg-SecBlue rounded-full"></span>
            )}
          </span>
        </label>
      ))}
    </div>
  );
};

export default PaymentMethodSelector;
