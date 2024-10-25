import React from 'react';
import Sidebar from '../components/Sidebar';

const CategoryPage = () => {
  return (
    <div className="min-h-screen flex">

      <Sidebar/>

      <div className='w-4/5 bg-light-red flex flex-col gap-4 px-6 py-4'>

		{/* Header Section */}
		<div className="flex justify-between items-center p-4 border border-gray-500">
			<div className="border rounded-md p-4 flex-grow text-center">
			Logo or Title
			</div>
			<div className="ml-4 w-12 h-12 rounded-full bg-gray-300"></div>
		</div>

		{/* Dynamic Categories Route Section */}
		<div className="p-4 flex justify-center space-x-4 border border-gray-500">
			<div className="w-32 h-12 rounded-full bg-dark-red flex flex-col items-center justify-center cursor-pointer hover:translate-y-[-5px] transition-all duration-500 ">Dynamic Route</div>
			<div className="w-32 h-12 rounded-full bg-dark-red flex flex-col items-center justify-center cursor-pointer hover:translate-y-[-5px] transition-all duration-500 ">Dynamic Route</div>
			<div className="w-32 h-12 rounded-full bg-dark-red flex flex-col items-center justify-center cursor-pointer hover:translate-y-[-5px] transition-all duration-500">Dynamic Route</div>
			<div className="w-32 h-12 rounded-full bg-dark-red flex flex-col items-center justify-center cursor-pointer hover:translate-y-[-5px] transition-all duration-500">Dynamic Route</div>
		</div>

		{/* Main Content Section */}
		<div className="p-4 grid grid-cols-3 gap-4 flex-1">

			{/* Stamp Cards */}
			<div className=" rounded-2xl p-4 border border-gray-500 flex flex-col items-center justify-center cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
				<h3 className="font-bold mb-2">Stamp Card with Details</h3>
				<p>Price: $10</p>
				<button className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md transition-all duration-500 hover:scale-105">
					Add to Cart
				</button>
				<p className="mt-2">About: This is a rare stamp.</p>
			</div>

			<div className=" rounded-2xl p-4 border border-gray-500 flex flex-col items-center justify-center cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
				<h3 className="font-bold mb-2">Stamp Card with Details</h3>
				<p>Price: $10</p>
				<button className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md transition-all duration-500 hover:scale-105">
					Add to Cart
				</button>
				<p className="mt-2">About: This is a rare stamp.</p>
			</div>

			<div className=" rounded-2xl p-4 border border-gray-500 flex flex-col items-center justify-center cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
				<h3 className="font-bold mb-2">Stamp Card with Details</h3>
				<p>Price: $10</p>
				<button className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md transition-all duration-500 hover:scale-105">
					Add to Cart
				</button>
				<p className="mt-2">About: This is a rare stamp.</p>
			</div>
			
		</div>

		{/* Footer Section */}
		<div className="mt-auto p-4">
			<div className="rounded-md p-4 text-center border border-gray-500">
			Footer Section
			</div>
		</div>

	  </div>

    </div>
  );
};

export default CategoryPage;
