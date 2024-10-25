import { Button, Avatar } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../slices/AuthSlice"; // Adjust the import based on your project structure

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authUser.user);

  const handleLogout = () => {
    dispatch(logoutUser()); // Dispatch the logout action
  };

  return (
    <header className="bg-gray-400 shadow-md dark:bg-gray-800 p-4">
      <div className="flex justify-between items-center mx-6">
        {/* Title Section */}
        <h1 className="text-xl font-semibold dark:text-white">StampSphere</h1>

        {/* Login/Signup or Profile Avatar */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              {/* If user exists, show the avatar and logout button */}
              <Avatar
                src={user.avatarUrl || "https://docs.material-tailwind.com/img/face-2.jpg"} // Use user avatar or a default image
                size="sm"
                className="cursor-pointer"
              />
              <Button variant="outlined" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            // If no user, show login/register buttons
            <>
              <Button variant="outlined" className="mr-2">
                <a className="text-l" href="/login">Login</a>
              </Button>
              <Button variant="outlined">
                <a className="text-l" href="/register">Register</a>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
