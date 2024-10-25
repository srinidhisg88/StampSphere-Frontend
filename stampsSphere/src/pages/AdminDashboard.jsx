import React from 'react';
import Sidebar from '../components/Sidebar';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex">

		{/* Main Content */}
		<div className="w-full p-4 bg-light-red flex flex-col">

			{/* Content Section */}
			<div className="flex flex-1">
			{/* Left Section */}
			<div className="w-2/3 border rounded-md p-4 border-gray-500">
				<h2 className="font-bold mb-2">Stamps: Sold or Not</h2>
				<div className="border px-4 py-2 rounded-md min-h-[50px] flex flex-col bg-dark-red justify-center mb-2 border-gray-500">Recent Stamp 1</div>
				<div className="border px-4 py-2 rounded-md min-h-[50px] flex flex-col bg-dark-red justify-center mb-2 border-gray-500">Recent Stamp 2</div>
				<div className="border px-4 py-2 rounded-md min-h-[50px] flex flex-col bg-dark-red justify-center mb-2 border-gray-500">Recent Stamp 3</div>
			</div>

			{/* Right Section */}
			<div className="w-1/3 ml-4 flex flex-col space-y-4 ">
				<div className="border rounded-md p-4 border-gray-500 flex-1">
					<h3 className="font-bold">Categories: Total Sales</h3>
					<p className="mt-2">
						Based on this, we get the best sellers.
					</p>
				</div>

				<div className="border rounded-md p-4 border-gray-500 flex-1">
					<h3 className="font-bold">No of Philatelists</h3>
					<p>Daily Traffic and Active Users</p>
				</div>
			</div>
			</div>
		</div>
    </div>
  );
};

export default AdminDashboard;
