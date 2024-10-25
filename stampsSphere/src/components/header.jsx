import { Button, Avatar } from "@material-tailwind/react";
import { useState } from "react";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Example state for login

  return (
    <header className="bg-white shadow-md dark:bg-gray-800 p-4">
      <div className="flex justify-between items-center mx-6">
        {/* Title Section */}
        <h1 className="text-xl font-semibold dark:text-white">
          StampSphere
        </h1>

        {/* Login/Signup or Profile Avatar */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg" // Replace with your avatar URL
              size="sm"
              className="cursor-pointer"
            />
          ) : (
            <>
              <Button variant="outlined" className="mr-2">
                Login
              </Button>
              <Button variant="outlined">SignUp</Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
