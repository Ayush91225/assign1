import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
Question 1
      </h1>
      <p className="text-lg md:text-xl text-center max-w-xl">
        Kuch bhi, pata nahi kya likhu 10 min pehle hi kara hai sir
      </p>
      <button className="mt-6 px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg">
        <Link to="/about">      
        About Us
        </Link>
      </button>
    </div>
  );
};

export default Home;
