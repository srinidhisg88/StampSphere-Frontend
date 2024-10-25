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
    <div className='mt-20'>
      <h2>Current Status: {currentStatus}</h2>
      {statuses.indexOf(currentStatus) < statuses.length - 1 && (
        <button onClick={handleStatusUpdate}>Done</button>
      )}
      <button onClick={handleReset} className="mt-4 bg-red-500 text-white px-4 py-2">
        Reset to Beginning
      </button>
    </div>
  );
};

export default Admin;
