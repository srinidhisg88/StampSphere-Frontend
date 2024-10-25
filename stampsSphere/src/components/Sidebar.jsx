import React from 'react';

const Sidebar = () => {
  return (
    <div className="p-4">
      {/* Logo Section */}
      <div className="flex justify-center items-center mb-6">
        <img 
          src="https://via.placeholder.com/150"  // Replace with your logo URL 
          alt="Logo" 
          className="h-16 w-auto object-contain" // Adjust size as needed 
        />
      </div>

      {/* Navigation Menu */}
      <nav className="mt-6">
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
