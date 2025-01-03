import { useState } from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';

const Navbar = () => {
    const [search, setSearch] = useState('');

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <nav className="flex items-center justify-between p-4 bg-gray-100 text-[#274C5B] shadow-md">
            <a href='#' className="flex items-center">
                <img src="./Logo.png" alt="Logo" className="h-10 w-10 mr-2" />
                <p className="text-lg font-bold">Organick</p>
            </a>

            <div className="flex items-center space-x-8">
                <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Pages</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Shop</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Projects</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">News</a>
            </div>

            <div className="flex items-center space-x-4">
                <div className="flex items-center bg-white rounded-full shadow-md">
                    <input
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={handleSearchChange}
                        className="px-4 py-2 rounded-l-full focus:outline-none"
                    />
                    <button className="p-2 bg-green-500 rounded-full text-white hover:bg-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>

                <button className="p-2 rounded-full text-[#274C5B] flex items-center">
                <MdOutlineShoppingCart />
                    <span className="ml-1 text-sm ">Cart (0)</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
