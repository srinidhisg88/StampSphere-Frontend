import React, { useState } from 'react';

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
          {/* <div className='grid grid-cols-4'>
            <TrackingCard/>
          </div> */}
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