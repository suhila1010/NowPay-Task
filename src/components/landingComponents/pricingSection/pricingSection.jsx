import React from "react";
import PricingCard from "../../landingComponents/pricingCard/pricingCard.jsx";

const PricingSection = () => {
  let PriceingPlans = [
    {
      title: "Starter",
      price: "Free",
      features: ["1 Website", "5 GB Hosting", "Limited Support"],
      active: false,
    },
    {
      title: "Premium",
      price: "$29",
      period: "/month",
      features: ["10 Website", "15 GB Hosting", "Premium Support"],
      active: true,
    },
    {
      title: "Ultimate",
      price: "$49",
      period: "/month",
      features: ["Unlimited Website", "50 GB Hosting", "Premium Support"],
      active: false,
    },
  ];

  return (
    <div className="my-10">
      <div className="px-10 py-12 flex justify-between my-10 sm:flex-col">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 w-1/2 sm:w-full sm:text-xl">
          Get the right plan for future product.
        </h2>
        <div className="flex justify-center space-x-4 mb-8 bg-[#F7F7FB] font-semibold p-2 rounded-xl w-72 sm:w-full">
          <button className="px-6 py-2 bg-Secondary text-white rounded-s-xl w-1/2">
            Yearly
          </button>
          <button className="px-6 py-2 text-black w-1/2">Monthly</button>
        </div>
      </div>
      <div className="flex justify-between items-center gap-10 sm:flex-col px-10">
        {PriceingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={plan.price}
            period={plan.period}
            features={plan.features}
            active={plan.active}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
