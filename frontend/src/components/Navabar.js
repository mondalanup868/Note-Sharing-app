import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("Home");

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Susmita Dey</span>
                    </a>
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 border border-gray-100 rounded-lg bg-gray-50 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 md:border-0 justify-center">
                            <li>
                                <Link to = '/'
                                    
                                    onClick={() => handleItemClick("Home")}
                                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 text-center ${
                                        activeItem === "Home" ? "bg-blue-700 text-white md:text-blue-700 dark:text-white md:dark:text-blue-500" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    }`}
                                    aria-current={activeItem === "Home" ? "page" : undefined}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to = '/notes'
                                    
                                    onClick={() => handleItemClick("Notes")}
                                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 text-center ${
                                        activeItem === "Notes" ? "bg-blue-700 text-white md:text-blue-700 dark:text-white md:dark:text-blue-500" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    }`}
                                >
                                    Notes
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={() => handleItemClick("Ask Me")}
                                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 text-center ${
                                        activeItem === "Ask Me" ? "bg-blue-700 text-white md:text-blue-700 dark:text-white md:dark:text-blue-500" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    }`}
                                >
                                    Ask Me
                                </Link>
                            </li>
                            <li>
                                <Link to = '/admin-login'
                                    onClick={() => handleItemClick("Admin Login")}
                                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 text-center ${
                                        activeItem === "Admin Login" ? "bg-blue-700 text-white md:text-blue-700 dark:text-white md:dark:text-blue-500" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    }`}
                                >
                                    Admin Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
