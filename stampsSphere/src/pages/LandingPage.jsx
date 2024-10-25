import React from 'react';
import loginStamp from '../assets/Auth/loginStamp.jpg';

const LandingPage = () => {
  const categories = Array(6).fill({ img: '', name: 'Category Name' }); // Placeholder data for categories
  const leaderboardData = Array.from({ length: 10 }, (_, index) => ({
    serial: index + 1,
    profilePic: 'https://via.placeholder.com/150', // Placeholder profile picture
    userName: `User ${index + 1}`,
    netWorth: `$${(Math.random() * 1000).toFixed(2)}`
  }));

  return (
    <div className="flex flex-col items-center p-6 space-y-6">
      {/* About Section */}
      <div className="max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">About Stamps and Philately</h2>
        <p className="text-lg">
          Stamps are more than just postage; they are tiny pieces of art that represent
          the history, culture, and values of a nation. Philately, the collection and study of
          stamps, allows enthusiasts to explore the stories behind these miniature works of art,
          as well as the various postal services around the world.
        </p>
        <p className="text-lg mt-4">
          Philatelists enjoy the thrill of discovering rare stamps, understanding their significance,
          and connecting with fellow collectors. Whether it’s the intricacies of design, the
          history of postal routes, or the joy of completing a collection, philately offers a unique
          blend of passion, knowledge, and community.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-2xl mt-6">
        <img
          src={loginStamp}
          alt="Decorative image"
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      {/* Categories Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mt-6">
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

      {/* Leaderboard Section */}
      <div className="w-full max-w-2xl mt-6">
        <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
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
};

export default LandingPage;





// import React from 'react';
// import loginStamp from '../assets/Auth/loginStamp.jpg';

// const LandingPage = () => {
//   return (
//     <div className="flex flex-col md:flex-row">
//       {/* Left section with image */}
//       <div className="hidden md:flex md:w-1/2 bg-muted items-center justify-center p-6">
//         <div className="relative w-full h-full max-w-md">
//           <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg"></div>
//           <img
//             src={loginStamp}
//             alt="Decorative image"
//             className="rounded-lg object-cover w-4 h-4" // Adjust max width as needed
//           />
//         </div>
//       </div>

//       {/* About section */}
//       <div className="flex md:w-1/2 p-6 items-center">
//         <div>
//           <h2 className="text-2xl font-bold mb-4">About Stamps and Philately</h2>
//           <p className="text-lg">
//             Stamps are more than just postage; they are tiny pieces of art that represent
//             the history, culture, and values of a nation. Philately, the collection and study of
//             stamps, allows enthusiasts to explore the stories behind these miniature works of art,
//             as well as the various postal services around the world. 
//           </p>
//           <p className="text-lg mt-4">
//             Philatelists enjoy the thrill of discovering rare stamps, understanding their significance,
//             and connecting with fellow collectors. Whether it’s the intricacies of design, the
//             history of postal routes, or the joy of completing a collection, philately offers a unique
//             blend of passion, knowledge, and community.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LandingPage;

// import React from 'react'
// import loginStamp from '../assets/Auth/loginStamp.jpg';

// const LandingPage = () => {
//   return (
//     <div>
//       {/* Left section with image */}
//       <div className="hidden md:flex md:w-1/2 bg-muted items-center justify-center p-6">
//         <div className="relative w-full h-full max-w-md">
//           <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg"></div>
//           <img
//             src={loginStamp}
//             alt="Decorative image"
//             className="rounded-lg object-cover max-w-xl h-auto" // Adjust max width as needed
//           />
//         </div>
//       </div>

//       {/* About section */}
      

//     </div>
//   )
// }

// export default LandingPage
