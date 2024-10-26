// components/Admin.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateStatus, resetStatus } from '../slices/orderSlice';

const statuses = ['sold', 'deposited', 'verified', 'shipped', 'out for delivery', 'delivered'];

const Admin = () => {
  const dispatch = useDispatch();
  const { currentStatus } = useSelector((state) => state.order);

  const handleStatusUpdate = () => {
    const currentIndex = statuses.indexOf(currentStatus);
    if (currentIndex < statuses.length - 1) {
      const nextStatus = statuses[currentIndex + 1];
      dispatch(updateStatus(nextStatus));
    }
  };

  const handleReset = () => {
    dispatch(resetStatus());
  };

  return (
    <div className="mt-5 flex flex-col items-center p-4 bg-white rounded shadow-md w-80 mx-auto">
      <h2 className="text-lg font-semibold">Current Status: {currentStatus}</h2>

      {statuses.indexOf(currentStatus) < statuses.length - 1 && (
        <button
          onClick={handleStatusUpdate}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
        >
          Done
        </button>
      )}
      <button
        onClick={handleReset}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Reset to Beginning
      </button>
    </div>
  ); 
};

export default Admin;
