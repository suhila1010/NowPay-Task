import React from "react";
// import ImageSrc from '../../../assets/HS-1.png';
const InfoCard = ({
  title,
  description,
  linkText,
  imageSrc,
  reverse,
  background,
  children,
}) => {
  return (
    <div
      className={`flex items-center justify-between p-10 rounded-lg gap-10 my-28 sm:flex-col sm:items-start sm:my-5 ${background} ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      {/* Text Section */}
      <div className="w-1/2 sm:w-full">
        <h2 className="text-6xl font-bold text-gray-900 mb-4 w-[70%] sm:text-lg">{title}</h2>
        <p className="text-gray-600 mb-4 max-w-96">{description}</p>
        {children ? (
          children
        ) : (
          <a href="#" className="text-blue-500 font-semibold">
            {linkText}
          </a>
        )}
      </div>

      {/* Image Section */}
      <div className="w-[35%] sm:w-full">
      <img src={imageSrc} alt={title} className="w-full h-auto object-cover" />
      </div>
    </div>
  );
};

export default InfoCard;
