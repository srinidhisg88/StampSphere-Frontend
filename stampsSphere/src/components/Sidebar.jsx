
import Logo from "../assets/CategoryList/StampSpherebg.png";
const Sidebar = () => {
  return (
    <div className="p-4">
      {/* Logo Section */}
      <div className="flex justify-center items-center mb-6">
        <a href="/">
          <img
            src={Logo} // Replace with your logo URL
            alt="Logo"
            className="h-60 w-auto object-contain rounded-full" // Adjust size as needed
          />
        </a>
      </div>

      {/* Navigation Menu */}
      <nav className="mt-6 text-xl text-white">
        <ul>
          <li className="my-2 p-2 border-b">
            <a href="/categories/1">Categories</a>
          </li>
          <li className="my-2 p-2 border-b">Auctions</li>
          <li className="my-2 p-2 border-b">Community</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
