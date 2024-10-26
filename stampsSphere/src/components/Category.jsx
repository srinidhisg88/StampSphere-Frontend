import React from 'react';
import image1 from '../assets/CategoryList/MiniSheet.webp';
import image2 from '../assets/CategoryList/SeTenant.webp';
import image3 from '../assets/CategoryList/Service.webp';
import image4 from '../assets/CategoryList/Thematic_copy.webp';
import image5 from '../assets/category/Comma.jpg';
import image6 from '../assets/images/difinitive_stamps/img1.jpg';

const imageArray = [
    { src: image1, alt: "Miniature Sheets" },
    { src: image2, alt: "Se Tenant" },
    { src: image3, alt: "Service" },
    { src: image4, alt: "Thematic" },
    { src: image5, alt: "Commemora" },
    { src: image6, alt: "Difinitive" },
];
// items-center 
const CategoryImage = ({ src, alt }) => ( 
    <div>
      <img
        className="rounded"
        src={src}
        alt={alt}
      />
      <div className="text-center text-sm font-medium text-gray-700 mb-3">
        {alt}
      </div>
    </div>
  );
  

  const Category = () => {
    return (
        <div className="h-40 w-full p-4 border-2 border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-between items-center h-full my-3 mx-64"> 
                {imageArray.map((image, index) => (
                    <div 
                        key={index}
                        className="w-24 h-28 rounded-full flex items-center justify-center cursor-pointer transform transition-transform duration-300 hover:-translate-y-1" // Set height and width for consistent size
                    >
                        <CategoryImage src={image.src} alt={image.alt} className="w-full h-full rounded-full object-cover" /> {/* Ensure image fits and is circular */}
                    </div> 
                ))}  
            </div>
        </div> 
    );
};


export default Category;