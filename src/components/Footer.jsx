import React from "react";

const Footer = () => {
  const currentDate = new Date();
  return (
    <div className="overflow-hidden mx-auto max-w-full container">
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright {currentDate.getFullYear()} © DollCreed. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
