import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const navLinks = (
        <>
            <li>
                <NavLink to="/" className="hover:text-black transition">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" className="hover:text-black transition">
                    Pages
                </NavLink>
            </li>
            <li>
                <NavLink to="/portfolio" className="hover:text-black transition">
                    Portfolio
                </NavLink>
            </li>
            <li>
                <NavLink to="/blog" className="hover:text-black transition">
                    Blog
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="w-full bg-[#EDEDED]">
            {/* Container */}
            <div className="max-w-7xl mx-auto px-4 ">

                <div className="flex items-center justify-between h-[70px]">

                    {/* 🔹 Left Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-sm font-bold">
                            F
                        </div>
                        <span className="font-bold text-lg">Floka</span>
                    </Link>

                    {/* 🔹 Center Nav (Desktop) */}
                    <ul className="hidden lg:flex items-center gap-40 text-sm md:text-md text-gray-600  font-bold">
                        {navLinks}
                    </ul>

                    {/* 🔹 Right Section */}
                    <div className="flex items-center gap-4">

                        {/* Email */}
                        <span className="hidden md:block font-bold text-sm md:text-md text-gray-600">
                            info@floka.com
                        </span>

                        {/* Divider */}
                        <div className="hidden md:block w-px h-5 bg-gray-400"></div>

                        {/* 3 dots */}
                        <div className="hidden md:flex items-center gap-[3px] cursor-pointer">
                            <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                            <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                            <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="lg:hidden flex flex-col gap-[4px]"
                        >
                            <span className="w-5 h-[2px] bg-black"></span>
                            <span className="w-5 h-[2px] bg-black"></span>
                            <span className="w-5 h-[2px] bg-black"></span>
                        </button>

                    </div>
                </div>

                {/* 🔻 Mobile Dropdown */}
                {open && (
                    <div className="lg:hidden pb-4">
                        <ul className="flex flex-col gap-4 text-gray-700 font-medium">
                            {navLinks}
                            <li className="text-sm text-gray-500 pt-2 border-t">
                                info@floka.com
                            </li>
                        </ul>
                    </div>
                )}

            </div>

            {/* Bottom subtle border */}
            <div className="border-b border-gray-300"></div>
        </div>
    );
};

export default Navbar;