import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log("Phone:", phone, "Password:", password);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section with Image */}
      <div className="w-1/2 bg-gray-100 flex items-center justify-center">
        <div className="relative w-3/4">
          <img
            src="https://via.placeholder.com/400x500" // Replace with your own image URL
            alt="Login Visual"
            className="rounded-lg object-cover"
          />
          <div className="absolute inset-0 bg-white opacity-40 mix-blend-multiply"></div>
        </div>
      </div>

      {/* Right Section with Form */}
      <div className="w-1/2 flex items-center justify-center">
        <form
          className="w-3/4 max-w-md p-8 bg-white shadow-md rounded-lg"
          onSubmit={handleLogin}
        >
          <h1 className="text-3xl font-semibold mb-6">Sign In to your account</h1>

          {/* Phone Input */}
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone No.
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-purple-500 hover:underline flex items-center"
            >
              <span className="mr-2">←</span> Go back
            </Link>
            <button
              type="submit"
              className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600"
            >
              Sign In
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="mt-4 text-sm text-center">
            Don’t have an Account?{" "}
            <Link to="/signup" className="text-purple-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
