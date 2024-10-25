import React from 'react';
import image1 from '../assets/CategoryList/MiniSheet.webp';
import image2 from '../assets/CategoryList/SeTenant.webp';
import image3 from '../assets/CategoryList/Service.webp';
import image4 from '../assets/CategoryList/Thematic_copy.webp';

const imageArray = [
    { src: image1, alt: "Miniature Sheets" },
    { src: image2, alt: "Se Tenant" },
    { src: image3, alt: "Service" },
    { src: image4, alt: "Thematic" },
];


const CategoryImage = ({ src, alt }) => ( 
    <div className="flex flex-col items-center space-y-2">
      <img
        className="w-36 h-36 rounded-full transition-transform duration-300 hover:scale-110 shadow-md"
        src={src}
        alt={alt}
      />
      <div className="text-center text-sm font-medium text-gray-700">
        {alt}
      </div>
    </div>
  );
  
// const CategoryImage = ({ src, alt }) => (
//     <div className=''>
//         <img
//             className="w-36 h-36 rounded-full mx-2 transform transition-transform duration-300 hover:scale-110 shadow-md"
//             src={src}
//             alt={alt}
//         />
//         <div>
//             {alt}
//         </div>
//     </div>
// );

const Category = () => {
    return (
        <div className="h-40 w-full p-4 flex items-center justify-center border-2 border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-32 h-12 rounded-full bg-dark-red flex items-center justify-center cursor-pointer transform transition-transform duration-300 hover:-translate-y-1">
                {imageArray.map((image, index) => (
                    <CategoryImage key={index} src={image.src} alt={image.alt} />
                ))}
            </div>
        </div>
    );
};

export default Category;


// import React from 'react'
// import image1 from '../assets/CategoryList/MiniatureSheets.webp'
// import image2 from '../assets/CategoryList/SeTenant.webp'
// //import image3 from '../assets/CategoryList/StampSphere_white_background.png'
// import image3 from '../assets/CategoryList/Service.webp'
// import image4 from '../assets/CategoryList/Thematic_copy.webp'


// const imageArray = [image1, image2, image3, image4];


// const Category = () => {
//     return (
//         <div className="h-40 w-48 p-4 flex justify-center space-x-4 border border-gray-500">
//             <div className="w-32 h-12 rounded-full bg-dark-red flex flex-row items-center justify-center cursor-pointer hover:translate-y-[-5px] transition-all duration-500 ">
//             {imageArray.map((image, index) => (
//                 <img className="rounded-full" key={index} src={image} />

//             ))}
//             </div>
//         </div>
//     )
// }

// export default Category



// {/* <div className="w-32 h-12 rounded-full bg-dark-red flex flex-col items-center justify-center cursor-pointer hover:translate-y-[-5px] transition-all duration-500 ">
//                 <img src={image1}>

//                 </img>
//             </div> */}
