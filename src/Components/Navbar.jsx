import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { IoBagAdd } from "react-icons/io5";



const Navbar = () => {
    return (
        <div className="navbar bg-base-100 px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold">
                        <li><a>Home</a></li>
                        <li><a>Services</a></li>
                        <li><a>Blog</a></li>
                        <li><a>About Us</a></li>
                    </ul>
                </div>
                <a className="text-xl flex items-center font-bold">D <span className='p-1 bg-[#FFC637] rounded-full'><IoBagAdd className=' rounded-full'></IoBagAdd></span> C+</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    <li><a>Home</a></li>
                    <li><a>Services</a></li>
                    <li><a>Blog</a></li>
                    <li><a>About Us</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button type="button" className='border border-black py-2 px-4 rounded-xl font-semibold'>Appointment <GoArrowUpRight className='inline font-semibold'></GoArrowUpRight></button>
            </div>
        </div>
    );
};

export default Navbar;