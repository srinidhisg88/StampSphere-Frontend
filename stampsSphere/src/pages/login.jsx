import { useState } from 'react';
import { Button } from '@material-tailwind/react';
import { Input } from '@material-tailwind/react';
import loginStamp from '../assets/Auth/loginStamp.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../slices/Authslice';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data={
      username:username,
      password:password,
    }
    console.log('Login attempted with:', { data });

    dispatch(loginUser(data));
      navigate('/');
  };

  return (
    <div className="flex flex-col md:flex-row h-full bg-background pt-4 pb-4"> {/* Use h-full to fill the remaining height */}
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

      {/* Right section with login form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-6">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-center">Sign In to your account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="phoneNo" className="text-sm font-medium leading-none">
                Username
              </label>
              <Input
                id="Username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium leading-none">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>
          <div className="flex justify-center items-center mt-4">
            <a href="/register" className="text-sm text-primary text-black flex items-center">
              Don't have an Account? Sign Up
              <span className="ml-1">→</span> {/* Arrow icon */}
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
