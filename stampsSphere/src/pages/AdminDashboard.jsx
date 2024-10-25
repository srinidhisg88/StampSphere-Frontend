import React from 'react';
import Sidebar from '../components/Sidebar';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex">
		<Sidebar/>

		{/* Main Content */}
		<div className="w-4/5 p-4 bg-light-red flex flex-col">
			{/* Header Section */}
			<div className="flex justify-end items-center mb-4 border border-gray-500 px-6 py-4">
			<button className="ml-4 px-6 py-2 bg-red-500 text-white rounded-md transition-all duration-500 hover:scale-105 cursor-pointer">
				Upload New Stamp
			</button>
			<div className="ml-4 w-12 h-12 rounded-full bg-gray-300 border border-black"></div>
			</div>

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
