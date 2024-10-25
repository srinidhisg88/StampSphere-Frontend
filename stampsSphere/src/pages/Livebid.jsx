import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';

const socket = io('http://localhost:4000'); // Ensure this URL points to your backend

const LiveBid = () => {
  const [liveBidders, setLiveBidders] = useState([]);
  const [stampDetails, setStampDetails] = useState(null);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const userId = '123'; // Replace with the actual user ID from your app context or auth system

  const upcomingBids = [
    {
      id: 1,
      name: 'Rare Stamp Auction',
      imageUrl: 'https://via.placeholder.com/150',
      date: '2024-11-01',
      time: '1:00 PM',
    },
    {
      id: 2,
      name: 'Vintage Stamp Auction',
      imageUrl: 'https://via.placeholder.com/150',
      date: '2024-11-02',
      time: '3:00 PM',
    },
    {
      id: 3,
      name: 'Historical Stamp Auction',
      imageUrl: 'https://via.placeholder.com/150',
      date: '2024-11-03',
      time: '5:00 PM',
    },
  ];

  useEffect(() => {
    // Fetch stamp details
    const fetchStampDetails = async () => {
      try {
        const stampResponse = await axios.get('http://localhost:4000/api/stamp/'); // Replace '1' with the stamp ID you want to fetch
        setStampDetails(stampResponse.data);
        setCurrentPrice(stampResponse.data.current_highest_bid);
        
        // Calculate time remaining based on auction end date
        const auctionEndDate = new Date(stampResponse.data.auction_end_date).getTime();
        const now = Date.now();
        setTimeRemaining(Math.floor((auctionEndDate - now) / 1000));
      } catch (error) {
        console.error("Error fetching stamp details:", error);
      }
    };

    fetchStampDetails();
  }, []);

  useEffect(() => {
    // Listen for live bid updates from the server
    socket.on('newBid', (data) => {
      if (data.stampId === stampDetails?.id) { // Ensure to check the correct stamp ID
        setCurrentPrice(data.current_highest_bid);
        setLiveBidders((prevBidders) => [
          { id: data.top_bidder, name: `Bidder ${data.top_bidder}`, amount: data.current_highest_bid },
          ...prevBidders,
        ]);
      }
    });

    socket.on('error', (error) => {
      alert(error.message);
    });

    return () => {
      socket.off('newBid');
      socket.off('error');
    };
  }, [stampDetails]);

  const handlePlaceBid = () => {
    const newBidAmount = currentPrice + 50; // Increment bid by $50

    socket.emit('placeBid', { stampId: stampDetails.id, userId, bidAmount: newBidAmount });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining((prevTime) => prevTime - 1);
      } else {
        alert('Auction ended!');
        clearInterval(timer); // Clear interval on auction end
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining]);

  if (!stampDetails) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div className="min-h-screen flex">
      <div className="flex flex-1">
        {/* Left Side: Stamp Details and Live Bidders */}
        <div className="w-2/3 border border-gray-500 px-4 py-4 flex flex-col gap-4">
          <div className="rounded-md p-4 border border-gray-500 bg-white flex flex-col items-center">
            <img src={stampDetails.image} alt={stampDetails.name} className="w-48 h-48 mb-4 rounded-md" />
            <h2 className="text-xl font-bold">{stampDetails.name}</h2>
            <p className="mt-2">{stampDetails.description}</p>
            <p className="mt-2 font-semibold">Current Price: ${currentPrice}</p>
            <p className="mt-2 font-semibold">Owner: {stampDetails.owner}</p>
          </div>

          <div className="rounded-md p-4 border border-gray-500 bg-white flex justify-between items-center">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              onClick={handlePlaceBid}
            >
              Place Bid
            </button>
            <p className="font-semibold">
              Time Remaining: {Math.floor(timeRemaining / 60)}:{('0' + (timeRemaining % 60)).slice(-2)}
            </p>
          </div>

          <div className="rounded-md p-4 border border-gray-500 bg-white">
            <h3 className="text-lg font-semibold">Top Bidders:</h3>
            <ul>
              {liveBidders.map((bidder) => (
                <li key={bidder.id} className="flex justify-between p-2 border-b border-gray-300">
                  <span>{bidder.name}</span>
                  <span>${bidder.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: Upcoming Bids */}
        <div className="w-1/3 border border-gray-500 px-4 py-4 flex flex-col">
          <div className="rounded-md p-4 border border-gray-500 bg-white mb-4">
            <h3 className="text-lg font-semibold">Upcoming Bids:</h3>
            <div className="grid grid-cols-1 gap-4">
              {upcomingBids.map((bid) => (
                <div key={bid.id} className="flex items-center p-4 border border-gray-300 rounded-md bg-gray-50">
                  <img src={bid.imageUrl} alt={bid.name} className="w-16 h-16 rounded-md mr-4" />
                  <div className="flex-grow">
                    <h4 className="font-semibold">{bid.name}</h4>
                    <p>{bid.date}</p>
                    <p>{bid.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveBid;
