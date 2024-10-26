import img1 from "../assets/images/difinitive_stamps/img11.jpg";
import img2 from "../assets/images/offical_stamps/img2.jpg";
import { Link } from 'react-router-dom';
const Auction = () => {
  return (
    <div className="flex flex-row items-start justify-center p-6 gap-6 w-4/5">
      {/* Card 1 */}
      <div className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg shadow-lg w-1/2">
        {/* Upper Section */}
        <div className="flex justify-between w-full mb-6">
          {/* Live Text */}
          <div className="text-red-600 font-bold text-lg">Live</div>

          {/* Timer and Current Bid */}
          <div className="flex flex-col items-center">
            {/* Auction Timer */}
            <div className="text-gray-500 font-medium mb-2">
              Time Left: <span className="font-bold">01:23:45</span>
            </div>

            {/* Current Bid */}
            <div className="text-gray-800 font-semibold">Current Bid: ₹75</div>
          </div>
        </div>

        {/* Image and Initial Bid */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 mb-3">
            <img
              src={img1}
              alt="Auction Item"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="text-gray-700 font-medium">Initial Bid: 50</div>
        </div>

        {/* Enter Auction Button */}
        <Link to="/auctions">
    <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
        Enter Auction
    </button>
        </Link>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg shadow-lg w-1/2">
        {/* Upper Section */}
        <div className="flex justify-between w-full mb-6">
          {/* Live Text */}
          <div className="text-green-500 font-bold text-lg">Sold</div>

          {/* Timer and Current Bid */}
          <div className="flex flex-col items-center">
            {/* Auction Timer */}
            <div className="text-gray-500 font-medium mb-2">
              Time Left: <span className="font-bold">--:--:--</span>
            </div>

            {/* Current Bid */}
            <div className="text-gray-800 font-semibold">Sold For: ₹750</div>
          </div>
        </div>

        {/* Image and Initial Bid */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 mb-3">
            <img
              src={img2}
              alt="Auction Item"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="text-gray-700 font-medium">Initial Bid: ₹50</div>
        </div>

        {/* Enter Auction Button */}
        <button className="bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg">
          Auction Closed
        </button>
      </div>
    </div>
  );
};

export default Auction;