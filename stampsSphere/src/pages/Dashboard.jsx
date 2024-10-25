import React from 'react';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Section */}
		<div className="flex flex-grow">
			<Sidebar/>

			{/* Main Content */}
			<div className="w-4/5 p-4 bg-light-red">
			{/* Header */}
				<div className="flex justify-between items-center mb-4">
					<div className="border rounded-md p-4 flex-grow min-h-[100px] flex items-center px-6">
					Logo with profile pic
					</div>
					<div className="ml-4 border rounded-md p-4">
					Ranking
					</div>
				</div>

				<div className='border border-gray-500 px-6 py-3'>
					{/* Profile & Stats */}
					<div className="flex mb-4 ">
						<div className="w-1/3 flex items-center justify-center">
						<div className="w-24 h-24 rounded-full bg-gray-300"></div>
						</div>
						<div className="w-2/3 flex space-x-4 border border-gray-500 px-2 py-2">
							<div className="rounded-md p-4 flex-grow text-center border border-gray-500">
								networth
							</div>
							<div className="rounded-md p-4 flex-grow text-center border border-gray-500">
								bought
							</div>
							<div className="rounded-md p-4 flex-grow text-center border border-gray-500">
								sold
							</div>
						</div>
					</div>

					{/* Stamp Gallery */}
					<div className="border rounded-md p-4">
						<h2 className="font-bold mb-4 text-center">Stamp Gallery</h2>
						<div className="grid grid-cols-3 gap-4">
						<div className="border rounded-md p-4 text-center min-h-[250px]  border-gray-500">
							Stamp Card 1
						</div>
						<div className="border rounded-md p-4 text-center min-h-[250px]  border-gray-500">
							Stamp Card 2
						</div>
						<div className="border rounded-md p-4 text-center min-h-[250px]  border-gray-500">
							Stamp Card 3
						</div>
						</div>
					</div>

					{/* Bottom Section */}
					<div className="p-4 grid grid-cols-2 gap-4">
						<div className="border p-4 text-center bg-dark-red rounded-full transition-all duration-500 hover:scale-105 cursor-pointer">Bought</div>
						<div className="border p-4 text-center bg-dark-red rounded-full transition-all duration-500 hover:scale-105 cursor-pointer">Sold</div>
					</div>
				</div>

			
			</div>
		</div>
    </div>
  );
};

export default Dashboard;
