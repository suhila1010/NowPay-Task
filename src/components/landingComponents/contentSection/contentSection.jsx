export const ContentSection = ({items ,size}) => {
    const sizeClasses = size ? 'w-32 h-32 object-cover' : 'w-26 h-26';
  return (
    <div className="flex items-center justify-between p-10 sm:flex-col">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col justify-center items-center gap-3 text-center">
          <img
            src={item.imgSrc}
            alt={item.title}
            className={`mb-2  ${sizeClasses}`}
          />
          <h1 className="text-lg font-semibold">{item.title}</h1>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ContentSection;
