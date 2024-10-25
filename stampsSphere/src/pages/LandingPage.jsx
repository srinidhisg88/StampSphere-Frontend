import React from 'react';
import loginStamp from '../assets/Auth/loginStamp.jpg';

const LandingPage = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left section with image */}
      <div className="hidden md:flex md:w-1/2 bg-muted items-center justify-center p-6">
        <div className="relative w-full h-full max-w-md">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg"></div>
          <img
            src={loginStamp}
            alt="Decorative image"
            className="rounded-lg object-cover max-w-xl h-auto" // Adjust max width as needed
          />
        </div>
      </div>

      {/* About section */}
      <div className="flex md:w-1/2 p-6 items-center">
        <div>
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
      </div>
    </div>
  );
}

export default LandingPage;

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
