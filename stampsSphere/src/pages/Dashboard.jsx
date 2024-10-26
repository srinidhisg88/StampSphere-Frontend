import React from 'react';
import InfoCard from '../components/InfoCard';
import profileImage from '../assets/images/Profile/Hero.jpg';
import User from './userdashboard1';
import {
	Card as MaterialCard,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Button,
} from "@material-tailwind/react";

const userCollection = [
	{
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6QWAvGb7cioA_yVmktR_v2FNBtx0iI5GCOA&s',
		name: 'Rare Victorian Stamp',
		about: 'A rare Victorian-era stamp featuring Queen Victoria, perfect for collectors.',
		price: 'Rs.159',
		state: 'Sell'
	},
	{
		image: 'https://www.indphila.com/wp-content/uploads/2019/09/WILD-LIFE-SERIES-TIGER-COMMEMORATIVE-STAMP-600x600.jpg',
		name: 'Wildlife Series 1970',
		about: 'A beautiful stamp from the Wildlife Series of 1970 depicting a Bengal tiger.',
		price: 'Rs.200',
		state: 'Sell'
	},
	{
		image: 'https://www.indphila.com/wp-content/uploads/2019/09/GANDHI-CENTENARY-BA-BAPU-1869-1969-COMMEMORATIVE-STAMP.jpg',
		name: 'Gandhi Memorial Stamp',
		about: 'A commemorative stamp in honor of Mahatma Gandhi, released in 1948.',
		price: 'Rs.500',
		state: 'Sell'
	},
	{
		image: 'https://www.worldwide-mint.com/cdn/shop/products/822_c06ca3a1-fb0e-45a6-bb7b-db7f005af590_580x.jpg?v=1602348247',
		name: 'Olympics 1980 Edition',
		about: 'Issued to celebrate the 1980 Olympics, featuring a gymnast in action.',
		price: 'Rs.250',
		state: 'Sell'
	},
	{
		image: 'https://m.media-amazon.com/images/I/71IMLpV88nL.jpg',
		name: 'Indian Independence 1947',
		about: 'A historic stamp released to celebrate India’s independence in 1947.',
		price: 'Rs.300',
		state: 'Sell'
	},
	{
		image: 'https://www.bidcurios.com/wp-content/uploads/2022/02/AFGHANISTAN-1965-Bird-Lanceolate-Jay.-Nature.-Flora-Fauna.-1-Value-MNH-Stamp.-S.G.-544.-Cat-5.25.jpg',
		name: 'Flora & Fauna Series 1965',
		about: 'This stamp features a rare species of Indian flora, part of the 1965 series.',
		price: 'Rs.175',
		state: 'Sell'
	},
	{
		image: 'https://m.media-amazon.com/images/I/51AYai2WTRL._AC_UF1000,1000_QL80_.jpg',
		name: 'Space Exploration 1975',
		about: 'A stamp celebrating the early years of space exploration, issued in 1975.',
		price: 'Rs.220',
		state: 'Sell'
	},
	{
		image: 'https://c8.alamy.com/comp/PTDE1K/postmarked-stamp-from-finland-in-the-folk-art-series-issued-in-1976-PTDE1K.jpg',
		name: 'Traditional Art Series',
		about: 'Showcasing traditional Indian art, part of a series issued in the 1980s.',
		price: 'Rs.180',
		state: 'Sell'
	},
	{
		image: 'https://stampwala.com/wp-content/uploads/2024/02/111-15.jpg',
		name: 'Freedom Fighters 1969',
		about: 'Dedicated to Indian freedom fighters, issued in 1969 for collectors.',
		price: 'Rs.260',
		state: 'Sell'
	},
	{
		image: 'https://media.dharaastamps.co.in/wp-content/uploads/2022/05/MINT0140.jpg',
		name: 'Buddha Commemorative',
		about: 'A commemorative stamp for Lord Buddha’s teachings, released in 1956.',
		price: 'Rs.190',
		state: 'Sell'
	}
];

const track = {
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6QWAvGb7cioA_yVmktR_v2FNBtx0iI5GCOA&s',
	name: 'Rare Victorian Stamp',
	about: 'A rare Victorian-era stamp featuring Queen Victoria, perfect for collectors.',
	price: 'Rs.159',
	state: 'Sell',
}
const Dashboard = () => {
	return (
		<div className="min-h-screen  flex flex-col ">
			{/* Main Section */}
			<div className="flex flex-grow">

				{/* Main Content */}
				<div className="w-full p-4 bg-light-red">

					<div className='border border-gray-500 px-6 py-3'>

						{/* Profile & Stats */}
						<div className="flex mb-6 p-4 bg-white shadow-lg rounded-lg border border-gray-200">
							{/* Profile Image Section */}
							<div className="w-1/3 flex items-center justify-center">
								<img className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md border-4 border-white" src={profileImage} />
							</div>

							{/* Stats Section */}
							<div className="w-2/3 flex space-x-4 p-4">
								<div className="rounded-md p-4 flex-grow text-center bg-blue-50 border border-blue-200 shadow-sm transition-transform transform hover:scale-105">
									<p className="text-gray-700 font-semibold">Networth</p>
									<p className="text-lg font-bold text-blue-600">₹2,434</p>
								</div>
								<div className="rounded-md p-4 flex-grow text-center bg-green-50 border border-green-200 shadow-sm transition-transform transform hover:scale-105">
									<p className="text-gray-700 font-semibold">Bought</p>
									<p className="text-lg font-bold text-green-600">10</p>
								</div>
								<div className="rounded-md p-4 flex-grow text-center bg-red-50 border border-red-200 shadow-sm transition-transform transform hover:scale-105">
									<p className="text-gray-700 font-semibold">Sold</p>
									<p className="text-lg font-bold text-red-600">6</p>
								</div>
							</div>
						</div>

						{/* Stamp Gallery */}
						<div className="border rounded-md p-4">
							<h2 className="font-bold mb-4 text-center">Stamp Gallery</h2>
							<div className='grid grid-cols-4'>
								{userCollection.map((element) => (
									<InfoCard image={element.image} name={element.name}
										about={element.about} price={element.price} state={element.state} />
								))}
							</div>
						</div> 
						<div className='text-3xl text-black mt-12 ml-20'>
							<h1>Stamps Bought</h1>
						</div>
							<div className=" m-20 grid grid-cols-2 gap-4 w-full max-w-3xl"> {/* Adjusted max width */}
								<div className="border p-4 text-center bg-dark-red transition-all duration-500 hover:scale-105 cursor-pointer"> {/* Removed rounded-full */}
									<MaterialCard className="mt-0 w-full"> {/* Adjusted to fit within the full width */}
										<CardHeader color="blue-gray" className="relative h-56 overflow-hidden">
											<img
												src={track.image}
												alt="card-image"
												className="w-full h-full object-contain"
											/>
										</CardHeader>
										<CardBody>
											<Typography variant="h5" color="blue-gray" className="mb-2">
												{track.name}
											</Typography>
											<Typography variant="h6" color="blue-gray" className="mb-2">
												{track.about}
											</Typography>
											<Typography variant="h6" color="blue-gray" className="mb-2">
												{track.price}
											</Typography>
											<User/>
										</CardBody>
									</MaterialCard>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
