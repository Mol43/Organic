import React from 'react';
import { AiOutlineHome } from 'react-icons/ai'; // Import an icon for the button
import Navbar from '../Components/ui/Navbar';
import Footer from '../Components/ui/Footer';

function NotFound() {
  return (
    <section>
        <Navbar/>
    <div className="relative w-full h-screen bg-[#e8f0f2] overflow-hidden">
      <img
        src="ShopImgs/404.png"
        alt="404 Not Found"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center  tbg-opacity-50 mt-56 ml-[600px]">
        <h1 className="text-9xl font-bold text-green-600 mb-4">404</h1>
        <h1 className="text-5xl font-bold text-green-500 mb-4">Page not found</h1>
        <p className="text-lg text-gray-700 mb-6">
          The page you are lookin gyou are looking for <br/> do you are looking esn’t exist or has been moved.
        </p>
        <button
          onClick={() => (window.location.href = '/')}
          className="flex items-center gap-2 px-6 py-3 bg-green-400 text-white text-lg font-medium rounded-md hover:bg-green-700 transition-all "
        >
          <AiOutlineHome size={24} />
          Go to Homepage
        </button>
      </div>
    </div>
      <Footer/>
    </section>
  );
}

export default NotFound;
