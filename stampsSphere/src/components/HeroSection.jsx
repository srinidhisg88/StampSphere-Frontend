import React from 'react';
import image from "../assets/images/Home/Shri Ram Janmbhoomi Temple.jpg";
import img1 from "../assets/images/difinitive_stamps/img1.jpg";
import img2 from "../assets/images/offical_stamps/img4.jpeg";
import img3 from "../assets/category/Comma.jpg";
import img4 from "../assets/category/Miniature.jpg";
import img5 from "../assets/category/Se_tenant.jpg";
import img6 from "../assets/category/Thematic.jpg";


const categorySet = [
  {
    image: img1,
    title: 'Definitive'
  },
  {
    image: img2,
    title: 'Official'
  },
  {
    image: img3,
    title: 'Commemorative'
  },
  {
    image: img4,
    title: 'Se-tenant'
  },
  {
    image: img5,
    title: 'Thematic'
  },
  {
    image: img6,
    title: 'Definitive'
  },
];

const HeroSection = () => {
  const categories = Array(6).fill({ img: '', name: 'Category Name' }); // Placeholder data for categories
  const leaderboardData = Array.from({ length: 10 }, (_, index) => ({
    serial: index + 1,
    profilePic: 'https://via.placeholder.com/150', // Placeholder profile picture
    userName: `User ${index + 1}`,
    netWorth: `₹${(Math.random() * 1000).toFixed(2)}`
  }));

  return (
    <div className="flex flex-col items-center py-20 px-4 space-y-8 w-full">
      {/* Hero Section */}
      <div className="text-center text-custom-red ">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Discover, collect, and auction rare stamps
        </h2>
        <p className="text-lg mb-8">
          Explore the world's largest marketplace for philatelic treasures
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-l">
        <img src={image} alt="Shri Ram Janmbhoomi Temple" className="pl-96 max-w-screen-xl h-1/2 object-cover rounded-lg" />
      </div>
      <hr className='m-2'></hr>

      {/* Categories Section */}
      <div className="grid grid-cols-1 justify-between md:grid-cols-6 gap-8 w-full max-w-4xl mt-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center space-y-2"
          >
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
              {/* Placeholder for category image */}
              <span className="text-gray-500">Image</span>
            </div>
            <h3 className="text-lg font-semibold">{category.name}</h3>
          </div>
        ))}
      </div>
      
      <hr className='m-2'></hr>

      {/* Leaderboard Section */}
      <div className="w-full max-w-2xl mt-6">
        <h2 className="text-2xl font-bold mb-4 pl-8">Leaderboard</h2>
        <div className="space-y-4">
          {leaderboardData.map((user, index) => (
            <div
              key={index}
              className="flex items-center bg-white shadow-md rounded-lg p-4 space-x-4"
            >
              <span className="w-8 text-center">{user.serial}</span>
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img src={user.profilePic} alt={`Profile of ${user.userName}`} className="object-cover w-full h-full" />
              </div>
              <span className="flex-1 font-semibold">{user.userName}</span>
              <span className="font-bold">{user.netWorth}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;


// import image from "../assets/images/Home/Shri Ram Janmbhoomi Temple.jpg"

// const HeroSection = () => {
//   return (
//     <div>
//       <div className="t py-20 px-4 text-center  text-custom-red">
       
//         <h2 className="text-4xl md:text-5xl font-bold mb-4">
//           Discover, collect, and auction rare stamps
//         </h2>
//         <p className="text-lg mb-8">
//           Explore the worlds largest marketplace for philatelic treasures
//         </p>
//         <img src={image}></img>
//       </div>
//     </div>
//   );
// }

//export default HeroSection

  