import React, { useState } from 'react';
import axios from '../axios';

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


    const data={
      categoryName:category,
      name:stampName,
      description:stampDescription,
      image:stampImage,
      starting_bid:startingBid,
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
      </div>
    </div>
  );
};

export default AdminDashboard;
