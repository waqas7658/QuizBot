import React, { useState, useEffect } from "react";
import logo from "../assets/Images/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isloggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

        const user = localStorage.getItem("user");
        if (user) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const handleLogout = () => {

        localStorage.removeItem("user");

        setIsLoggedIn(false);
    };

    return (
        <nav className="flex items-center justify-between flex-wrap p-3 lg:px-28 bg-[#2B54FF] shadow-lg">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <img src={logo} className="w-28 mr-2" alt="Logo" />
            </div>
            <div className="block lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
                >
                    <svg
                        className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                    <svg
                        className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                    </svg>
                </button>
            </div>

            <div
                className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"
                    }`}
            >
                <div className="text-sm lg:flex-grow mr-10">
                    <a
                        href="#"
                        className="block mt-4 lg:inline-block lg:mt-0 text-[1rem] hover:border-b-2 text-white mr-4"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="block mt-4 lg:inline-block lg:mt-0 text-[1rem] hover:border-b-2 text-white mr-4"
                    >
                        Sql Pad
                    </a>
                    <a
                        href="#"
                        className="block mt-4 lg:inline-block lg:mt-0 text-[1rem] hover:border-b-2 text-white mr-4"
                    >
                        Contact Us
                    </a>
                </div>

                {isloggedIn ? (
                    <button onClick={handleLogout} className="inline-flex items-center border-0 py-2 px-7 text-[#2B54FF] bg-white rounded-3xl">
                        Logout
                    </button>
                ) : (
                    <div>
                        <Link
                            to="/signup"
                            className="inline-flex items-center border-2 border-white text-white py-[0.35rem] px-7 rounded-3xl mr-3"
                        >
                            Create Account
                        </Link>
                        <Link
                            to="/login"
                            className="inline-flex items-center border-0 py-2 px-7 text-[#2B54FF] bg-white rounded-3xl"
                        >
                            Login
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
