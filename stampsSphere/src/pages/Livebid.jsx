import React, { useEffect, useState, useRef } from 'react';

const LiveBid = () => {
  const [liveBidders, setLiveBidders] = useState([]);
  const [stampDetails, setStampDetails] = useState({
    id: '671c15f70a1b0ae05088b6ae',
    name: 'Vintage Indian Stamp',
    description: 'A rare Indian stamp issued in 1947.',
    image: 'images/vintage-stamp.jpg',
    current_highest_bid: 1000,
  });
  const [currentPrice, setCurrentPrice] = useState(stampDetails.current_highest_bid);
  const [newBidAmount, setNewBidAmount] = useState(currentPrice + 50);
  const [timeRemaining, setTimeRemaining] = useState(30); // Initialize with 30 seconds
  const timerRef = useRef(null);
  const userId = '671b78a96586c6c460639d2b'; // Replace with actual user ID

  // Static data for upcoming bids
  const upcomingBids = [
    {
      id: '1',
      name: 'Stamp of Queen Victoria',
      image: 'images/queen-victoria-stamp.jpg',
      initial_price: 800,
    },
    {
      id: '2',
      name: 'Olympic Games Stamp',
      image: 'images/olympic-stamp.jpg',
      initial_price: 500,
    },
    {
      id: '3',
      name: 'Indian Independence Stamp',
      image: 'images/independence-stamp.jpg',
      initial_price: 1200,
    },
  ];

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerRef.current);
          alert(`Auction ended! Winner: Bidder ${liveBidders[0]?.name}`);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const resetTimer = () => {
    setTimeRemaining(30);
    startTimer();
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const handlePlaceBid = () => {
    const updatedBidAmount = currentPrice + 50;

    setCurrentPrice(updatedBidAmount);
    setNewBidAmount(updatedBidAmount + 50);

    setLiveBidders((prevBidders) => [
      { id: userId, name: `Bidder Chiranth`, amount: updatedBidAmount },
      ...prevBidders,
    ]);

    resetTimer();
  };

  return (
    <div className="min-h-screen flex">
      {/* Main Auction Section */}
      <div className="w-2/3 border border-gray-500 px-4 py-4 flex flex-col gap-4">
        <div className="rounded-md p-4 border border-gray-500 bg-white flex items-center gap-8">
          <img
            src={`/${stampDetails.image}`}
            alt={stampDetails.name}
            className="w-64 h-64 object-cover rounded-md"
          />
          <div className="ml-32 flex flex-col gap-2">
            <h2 className="text-2xl font-bold">{stampDetails.name}</h2>
            <p className="text-lg">{stampDetails.description}</p>
            <p className="text-xl font-semibold">Initial Price: ${currentPrice}</p>
          </div>
        </div>

        <div className="rounded-md p-4 border border-gray-500 bg-white flex justify-between items-center">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            onClick={handlePlaceBid}
          >
            Place Bid for ${newBidAmount}
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

      {/* Upcoming Bids Section */}
      <div className="w-1/3 border-l border-gray-500 px-4 py-4 flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Upcoming Bids:</h3>
        <ul className="flex flex-col gap-4">
          {upcomingBids.map((bid) => (
            <li key={bid.id} className="rounded-md p-4 border border-gray-300 bg-white flex items-center gap-4">
              <img
                src={`/${bid.image}`}
                alt={bid.name}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div>
                <h4 className="text-md font-bold">{bid.name}</h4>
                <p className="text-sm">Initial Price: ${bid.initial_price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LiveBid;
