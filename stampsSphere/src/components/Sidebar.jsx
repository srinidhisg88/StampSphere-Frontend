import React from 'react';
import Logo from "../assets/CategoryList/StampSphere_white_background.png";
const Sidebar = () => {
  return (
    <div className="p-4">
      {/* Logo Section */}
      <div className="flex justify-center items-center mb-6">
        <img 
          src={Logo}  // Replace with your logo URL 
          alt="Logo" 
          className="h-60 w-auto object-contain rounded-full" // Adjust size as needed 
        />
      </div>

      {/* Navigation Menu */}
      <nav className="mt-6 text-xl text-white">
        <ul>
          <li className="my-2 p-2 border-b">Categories</li>
          <li className="my-2 p-2 border-b">Auctions</li>
          <li className="my-2 p-2 border-b">Community</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
