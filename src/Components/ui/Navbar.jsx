import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [search, setSearch] = useState('');
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isArrowUp, setArrowUp] = useState(false);

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <nav className="flex items-center justify-between p-5 bg-gray-100 text-[#274C5B] shadow-md z-10">
            <a href='#' className="flex items-center">
                <img src="./Logo.png" alt="Logo" className="w-7 mr-2" />
                <p className="text-lg font-bold">Organick</p>
            </a>

            <div className="flex items-center space-x-8">
                <Link to='/' className="text-gray-700 hover:text-gray-900">Home</Link>
                <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
                <div 
                    className="relative"
                    onMouseEnter={() => { setDropdownOpen(true); setArrowUp(true); }}
                    onMouseLeave={() => { setDropdownOpen(false); setArrowUp(false); }}
                >
                    <a href="#" className="text-gray-700 flex items-center gap-1 hover:text-gray-900">
                        Pages{isArrowUp ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
                    </a>
                    {isDropdownOpen && (
                        <div className="absolute left-0  w-40 bg-white border rounded shadow-md z-10">
                           <Link to="/contackus" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contack Us</Link>
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Page 2</a>
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Page 3</a>
                        </div>
                    )}
                </div>
                <Link to="/shop" className="text-gray-700 hover:text-gray-900">Shop</Link>
                <a href="#" className="text-gray-700 hover:text-gray-900">Projects</a>
                <Link to="/news" className="text-gray-700 hover:text-gray-900">News</Link>
            </div>

            <div className="flex items-center space-x-4">
                <div className="flex items-center bg-white rounded-full shadow-md">
                    <input
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={handleSearchChange}
                        className="px-4 py-2 rounded-l-full focus:outline-none bg-white"
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
