import React from "react";

const AppBar = () => {
  const links = [
    {name: "Home", href: "#home"},
    {name: "Features", href: "#features"},
    {name: "Pricing", href: "#pricing"},
    {name: "Blog", href: "#blog"},
  ];
  return (
    <nav className="flex items-center justify-between py-4 px-8 sm:flex-col sm:gap-2">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src="/Logo.svg" alt="Logo" className="h-10 mr-4" />
      </div>

      {/* Links Section */}
      <div className="flex items-center space-x-8">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-gray-800 hover:text-Secondary font-semibold border-b-2 border-transparent hover:border-Secondary"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Button Section */}
      <button className="bg-Secondary2 text-white px-6 py-2 rounded-lg sm:hidden">
        Get Started
      </button>
    </nav>
  );
};

export default AppBar;
