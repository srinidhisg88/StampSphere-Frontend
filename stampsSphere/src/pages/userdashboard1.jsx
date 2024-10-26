// components/User.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateStatus } from '../slices/orderSlice';

const User = () => {
  const dispatch = useDispatch();
  const { currentStatus, previousStatus } = useSelector((state) => state.order);
  const [state, setState] = useState({ currentStatus, previousStatus });

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'currentStatus' || event.key === 'previousStatus') {
        const newCurrent = JSON.parse(localStorage.getItem('currentStatus'));
        const newPrevious = JSON.parse(localStorage.getItem('previousStatus'));
        setState({ currentStatus: newCurrent, previousStatus: newPrevious });

        dispatch(updateStatus(newCurrent));
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [dispatch]);

  // Determine what to show for the previous status
  const displayPreviousStatus = state.currentStatus === 'sold' ? 'N/A' : state.previousStatus || 'N/A';

  return (
    <div className="mt-20 text-xl text-black">
      <h2>Yet to be Done: {state.currentStatus}</h2>
      <h3>Current Status: {displayPreviousStatus}</h3>
    </div>
  );
};

export default User;
