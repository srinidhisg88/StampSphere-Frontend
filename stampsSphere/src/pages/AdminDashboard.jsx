import React, { useState } from 'react';
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

  const handleImageUpload = (e) => {
    setStampImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Code to handle the form submission, such as sending the data to the server
    console.log('Category:', category);
    console.log('Stamp Name:', stampName);
    console.log('Stamp Description:', stampDescription);
    console.log('Stamp Image:', stampImage);
  };

  return (
    <div className="min-h-screen flex">

      {/* Main Content */}
      <div className="w-full p-4 bg-light-red flex flex-col">
        {/* Form Section */}
        <div className="mb-6 p-4 bg-white rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">Add New Stamp</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Category:</label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Enter category"
                className="w-full p-2 border rounded mt-1"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Stamp Name:</label>
              <input
                type="text"
                value={stampName}
                onChange={(e) => setStampName(e.target.value)}
                placeholder="Enter stamp name"
                className="w-full p-2 border rounded mt-1"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Stamp Description:</label>
              <textarea
                value={stampDescription}
                onChange={(e) => setStampDescription(e.target.value)}
                placeholder="Enter stamp description"
                className="w-full p-2 border rounded mt-1"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Stamp Image:</label>
              <input
                type="file"
                onChange={handleImageUpload}
                className="w-full p-2 mt-1"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
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
				<TrackingCard image={element.image} name={element.name} orderedBy={element.orderedBy}/>
			))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;




// import React from 'react';
// import Sidebar from '../components/Sidebar';

// const AdminDashboard = () => {
//   return (
//     <div className="min-h-screen flex">

// 		{/* Main Content */}
// 		<div className="w-full p-4 bg-light-red flex flex-col">
// 			<div>
// 				{/* form for  taking category, stamp id, stamp image upload option and a upload button*/}
// 			</div>
// 			<div>
// 				{/*Card*/}
// 			</div>
// 		</div>
//     </div>
//   );
// };

// export default AdminDashboard;







// {/* Content Section */}
// <div className="flex flex-1">
// {/* Left Section */}
// <div className="w-2/3 border rounded-md p-4 border-gray-500">
// 	<h2 className="font-bold mb-2">Stamps: Sold or Not</h2>
// 	<div className="border px-4 py-2 rounded-md min-h-[50px] flex flex-col bg-dark-red justify-center mb-2 border-gray-500">Recent Stamp 1</div>
// 	<div className="border px-4 py-2 rounded-md min-h-[50px] flex flex-col bg-dark-red justify-center mb-2 border-gray-500">Recent Stamp 2</div>
// 	<div className="border px-4 py-2 rounded-md min-h-[50px] flex flex-col bg-dark-red justify-center mb-2 border-gray-500">Recent Stamp 3</div>
// </div>

// {/* Right Section */}
// <div className="w-1/3 ml-4 flex flex-col space-y-4 ">
// 	<div className="border rounded-md p-4 border-gray-500 flex-1">
// 		<h3 className="font-bold">Categories: Total Sales</h3>
// 		<p className="mt-2">
// 			Based on this, we get the best sellers.
// 		</p>
// 	</div>

// 	<div className="border rounded-md p-4 border-gray-500 flex-1">
// 		<h3 className="font-bold">No of Philatelists</h3>
// 		<p>Daily Traffic and Active Users</p>
// 	</div>
// </div>
// </div>