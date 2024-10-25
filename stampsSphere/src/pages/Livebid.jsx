import React from 'react';
import Sidebar from '../components/Sidebar';

const LiveBid = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar/>

      {/* Main Content */}
      <div className="w-4/5 p-4 bg-light-red flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="border rounded-md p-4 flex-grow border-gray-500">
            with profile pic
          </div>
          <div className="ml-4 w-16 h-16 rounded-full bg-gray-300"></div>
        </div>

        {/* Content Section */}
        <div className="flex flex-1">
          {/* Left Section */}
          <div className="w-2/3 grid grid-cols-2 gap-4 border border-gray-500 px-4 py-4">
            <div className="rounded-md p-4 border border-gray-500">stamp</div>
            <div className="rounded-md p-4 border border-gray-500">about stamp</div>
            <div className="col-span-2 rounded-md p-4 border border-gray-500">
              place bid for $$
            </div>
            <div className="col-span-2 rounded-md p-4 border border-gray-500">
              top bidders updation<br />socket only here
            </div>
          </div>

          {/* Right Section */}
          <div className="w-1/3 ml-4 border border-gray-500 px-4 py-4 flex flex-col">
            <div className="border rounded-md p-4 mb-4 flex items-center border-gray-500">
              <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
              <div className="flex-grow border rounded-md p-2">
                Bidder Info
              </div>
            </div>
            <button className="text-center mt-4 bg-dark-red self-center py-2 px-4 rounded-full hover:scale-105 transition-all duration-500">Upcoming bids</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveBid;
