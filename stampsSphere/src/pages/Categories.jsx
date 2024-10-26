import React from 'react';
import Category from '../components/Category';
import img1 from '../assets/images/difinitive_stamps/img1.jpg'
import img2 from '../assets/images/difinitive_stamps/img2.jpg'
import img3 from '../assets/images/difinitive_stamps/img3.jpg'
import img4 from '../assets/images/difinitive_stamps/img4.jpg'
import img5 from '../assets/images/difinitive_stamps/img5.jpg'
import img6 from '../assets/images/difinitive_stamps/img6.jpg'
import img7 from '../assets/images/difinitive_stamps/img7.jpg'
import img8 from '../assets/images/difinitive_stamps/img8.jpg'
import img9 from '../assets/images/difinitive_stamps/img9.jpg'
import img10 from '../assets/images/difinitive_stamps/img10.jpg'
import img11 from '../assets/images/difinitive_stamps/img11.jpg'
import InfoCard from '../components/InfoCard';


const userCollection = [
	{
		image: img1,
		name: 'Syed Ahmed Khan',
		about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni fugit velit error voluptas. Minus, labore, molestias placeat vel natus maiores illo impedit obcaecati, odit id delectus a! Eius, voluptatibus doloribus.",
		price: 'Rs.159',
		state: 'Buy Now'
	},
	{
		image: img2,
		name: 'Bhakthivedantha Swami',
		about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni fugit velit error voluptas. Minus, labore, molestias placeat vel natus maiores illo impedit obcaecati, odit id delectus a! Eius, voluptatibus doloribus.",
		price: 'Rs.259',
		state: 'Buy Now'
	},
	{
		image: img3,
		name: 'Nehru',
		about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni fugit velit error voluptas. Minus, labore, molestias placeat vel natus maiores illo impedit obcaecati, odit id delectus a! Eius, voluptatibus doloribus.",
		price: 'Rs.549',
		state: 'Buy Now'
	},
	{
		image: img4,
		name: 'Gandhi and Nehru',
		about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni fugit velit error voluptas. Minus, labore, molestias placeat vel natus maiores illo impedit obcaecati, odit id delectus a! Eius, voluptatibus doloribus.",
		price: 'Rs.109',
		state: 'Buy Now'
	},
	{
		image: img5,
		name: 'G.B. Panth',
		about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni fugit velit error voluptas. Minus, labore, molestias placeat vel natus maiores illo impedit obcaecati, odit id delectus a! Eius, voluptatibus doloribus.",
		price: 'Rs.100',
		state: 'Buy Now'
	},
	{
		image: img6,
		name: 'R Srinivasan',
		about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni fugit velit error voluptas. Minus, labore, molestias placeat vel natus maiores illo impedit obcaecati, odit id delectus a! Eius, voluptatibus doloribus.",
		price: 'Rs.359',
		state: 'Buy Now'
	},
	{
		image: img7,
		name: 'Indian Postage',
		about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni fugit velit error voluptas. Minus, labore, molestias placeat vel natus maiores illo impedit obcaecati, odit id delectus a! Eius, voluptatibus doloribus.",
		price: 'Rs.155',
		state: 'Buy Now'
	},
	{
		image: img8,
		name: 'Mahathma Ghandi',
		about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni fugit velit error voluptas. Minus, labore, molestias placeat vel natus maiores illo impedit obcaecati, odit id delectus a! Eius, voluptatibus doloribus.",
		price: 'Rs.434',
		state: 'Buy Now'
	},
	{
		image: img9,
		name: 'Pandith Ravishankar Shukla',
		about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni fugit velit error voluptas. Minus, labore, molestias placeat vel natus maiores illo impedit obcaecati, odit id delectus a! Eius, voluptatibus doloribus.",
		price: 'Rs.24',
		state: 'Buy Now'
	},
	{
		image: img10,
		name: 'Santh Gadde Baba',
		about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni fugit velit error voluptas. Minus, labore, molestias placeat vel natus maiores illo impedit obcaecati, odit id delectus a! Eius, voluptatibus doloribus.",
		price: 'Rs.155',
		state: 'Buy Now'
	},
	{
		image: img11,
		name: 'Swami Brahmananda',
		about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni fugit velit error voluptas. Minus, labore, molestias placeat vel natus maiores illo impedit obcaecati, odit id delectus a! Eius, voluptatibus doloribus.",
		price: 'Rs.659',
		state: 'Buy Now'
	},
];

const CategoryPage = () => {
	return (
		<div className="min-h-screen flex w-full">

			<div className='w-full bg-light-red flex flex-col gap-4 px-6 py-4'>

				{/* Dynamic Categories Route Section */}

				<Category />
				{/* Main Content Section */}
				<div className="p-4 grid grid-cols-3 gap-4 flex-1">

					{/* Stamp Cards */}
					{userCollection.map((element) => (
						<InfoCard image={element.image} name={element.name}
						about={element.about} price={element.price} state={element.state}/>
					))}

					

				</div>

			</div>

		</div>
	);
};

export default CategoryPage;
