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


const definitiveImg = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

const CategoryPage = () => {
	return (
		<div className="min-h-screen flex w-full">

			<div className='w-full bg-light-red flex flex-col gap-4 px-6 py-4'>

				{/* Dynamic Categories Route Section */}

				<Category />
				{/* Main Content Section */}
				<div className="p-4 grid grid-cols-3 gap-4 flex-1">

					{/* Stamp Cards */}
					{definitiveImg.map((images) => (
						<InfoCard image={images} />
					))}

					

				</div>

			</div>

		</div>
	);
};

export default CategoryPage;
