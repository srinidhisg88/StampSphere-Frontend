import React, { useState } from 'react';
import axios from '../axios';
import TrackingCard from '../components/TrackingCard';

const userCollection = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6QWAvGb7cioA_yVmktR_v2FNBtx0iI5GCOA&s',
    name: 'Rare Victorian Stamp',
    orderedBy: 'Chiranth Raju C',
    about: 'A rare Victorian-era stamp featuring Queen Victoria, perfect for collectors.',
    price: 'Rs.159',
    state: 'Sell'
  },
  {
    image: 'https://www.indphila.com/wp-content/uploads/2019/09/WILD-LIFE-SERIES-TIGER-COMMEMORATIVE-STAMP-600x600.jpg',
    name: 'Wildlife Series 1970',
    orderedBy: 'Shri Krishna',
    about: 'A beautiful stamp from the Wildlife Series of 1970 depicting a Bengal tiger.',
    price: 'Rs.200',
    state: 'Sell'
  },
  {
    image: 'https://www.indphila.com/wp-content/uploads/2019/09/GANDHI-CENTENARY-BA-BAPU-1869-1969-COMMEMORATIVE-STAMP.jpg',
    name: 'Gandhi Memorial Stamp',
    orderedBy: 'Matha Charan',
    about: 'A commemorative stamp in honor of Mahatma Gandhi, released in 1948.',
    price: 'Rs.500',
    state: 'Sell'
  },
  {
    image: 'https://www.worldwide-mint.com/cdn/shop/products/822_c06ca3a1-fb0e-45a6-bb7b-db7f005af590_580x.jpg?v=1602348247',
    name: 'Olympics 1980 Edition',
    orderedBy: 'Srinidhi',
    about: 'Issued to celebrate the 1980 Olympics, featuring a gymnast in action.',
    price: 'Rs.250',
    state: 'Sell'
  },
  {
    image: 'https://m.media-amazon.com/images/I/71IMLpV88nL.jpg',
    name: 'Bhuvan Naik',
    orderedBy: 'Chiranth Raju C',
    about: 'A historic stamp released to celebrate India’s independence in 1947.',
    price: 'Rs.300',
    state: 'Sell'
  },
  {
    image: 'https://www.bidcurios.com/wp-content/uploads/2022/02/AFGHANISTAN-1965-Bird-Lanceolate-Jay.-Nature.-Flora-Fauna.-1-Value-MNH-Stamp.-S.G.-544.-Cat-5.25.jpg',
    name: 'Flora & Fauna Series 1965',
    orderedBy: 'Shreyas',
    about: 'This stamp features a rare species of Indian flora, part of the 1965 series.',
    price: 'Rs.175',
    state: 'Sell'
  },
  {
    image: 'https://m.media-amazon.com/images/I/51AYai2WTRL._AC_UF1000,1000_QL80_.jpg',
    name: 'Space Exploration 1975',
    orderedBy: 'Prajwal',
    about: 'A stamp celebrating the early years of space exploration, issued in 1975.',
    price: 'Rs.220',
    state: 'Sell'
  },
  {
    image: 'https://c8.alamy.com/comp/PTDE1K/postmarked-stamp-from-finland-in-the-folk-art-series-issued-in-1976-PTDE1K.jpg',
    name: 'Traditional Art Series',
    orderedBy: 'Chiranth Raju C',
    about: 'Showcasing traditional Indian art, part of a series issued in the 1980s.',
    price: 'Rs.180',
    state: 'Sell'
  },
  {
    image: 'https://stampwala.com/wp-content/uploads/2024/02/111-15.jpg',
    name: 'Freedom Fighters 1969',
    orderedBy: 'Bhuvan Naik',
    about: 'Dedicated to Indian freedom fighters, issued in 1969 for collectors.',
    price: 'Rs.260',
    state: 'Sell'
  },
  {
    image: 'https://media.dharaastamps.co.in/wp-content/uploads/2022/05/MINT0140.jpg',
    name: 'Buddha Commemorative',
    orderedBy: 'Chiranth Raju C',
    about: 'A commemorative stamp for Lord Buddha’s teachings, released in 1956.',
    price: 'Rs.190',
    state: 'Sell'
  }
];

const AdminDashboard = () => {
  const [category, setCategory] = useState('');
  const [stampName, setStampName] = useState('');
  const [stampDescription, setStampDescription] = useState('');
  const [stampImage, setStampImage] = useState(null);
  const [startingBid, setStartingBid] = useState('');

  const handleImageUpload = (e) => {
    setStampImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Ensure the event object is properly handled


    const data = {
      categoryName: category,
      name: stampName,
      description: stampDescription,
      image: stampImage,
      starting_bid: startingBid,
    }
    // const formData = new FormData();
    // formData.append('name', stampName);
    // formData.append('description', stampDescription);
    // formData.append('categoryName', category);
    // formData.append('starting_bid', startingBid);
    // formData.append('image', stampImage);

    console.log(data);
    try {
      const response = await axios.post('/api/stamp/createStamp', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Stamp uploaded successfully:', response.data);
      // Reset form fields
      setCategory('');
      setStampName('');
      setStampDescription('');
      setStampImage(null);
      setStartingBid('');
    } catch (error) {
      console.error('Error uploading stamp:', error);
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-full p-4 bg-light-red flex flex-col">
        <div className="mb-6 p-4 bg-white rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">Add New Stamp</h2>
          {/* Ensure handleSubmit is passed as a callback */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label>Category:</label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label>Stamp Name:</label>
              <input
                type="text"
                value={stampName}
                onChange={(e) => setStampName(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label>Starting Bid:</label>
              <input
                type="number"
                value={startingBid}
                onChange={(e) => setStartingBid(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label>Description:</label>
              <textarea
                value={stampDescription}
                onChange={(e) => setStampDescription(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label>Image:</label>
              <input type="file" onChange={handleImageUpload} />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded"
            >
              Upload Stamp
            </button>
          </form>
        </div>
        {/* Card Section */}
        <div className="p-4 bg-white rounded shadow-md">
          <h2 className="text-xl font-semibold mb-2">Stamp Details</h2>
          <div className='grid grid-cols-4'>
            {userCollection.map((element) => (
              <TrackingCard image={element.image} name={element.name} orderedBy={element.orderedBy} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
