import React from "react";

const PricingCard = ({title, price, period, features, active}) => {
  return (
    <div className="flex justify-center items-center w-full">
      <div
        className={`${
          active ? "bg-[#FF7143] text-white scale-105" : "bg-[#F8F8F8] text-HeaderColor"
        } rounded-lg w-full max-w-md px-5 py-16 flex flex-col items-center gap-5 transition-all duration-300`}
      >
        <h2 className={`${
          active ? " !text-white" : ""
        } pricing-title text-lg font-normal`}>{title}</h2>
        <div className="pricing-value text-4xl font-bold mb-2 ">
          {price}
          <span className="text-2xl">{period}</span>
        </div>
        <ul className="feature-list text-center ">
          {features.map((feature, index) => (
            <li key={index} className="my-5">
              {feature}
            </li>
          ))}
        </ul>
        <button
          className={`${
            active
              ? "bg-[#9F3919] text-white hover:bg-[#D6E4F0]"
              : "bg-white text-Secondary hover:bg-[#F1F1F1]"
          } w-full py-3 rounded-lg font-semibold `}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
