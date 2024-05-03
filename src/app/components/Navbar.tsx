"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./Navlink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-gray-900 border-b-[1.5px] border-gray-800 bg-opacity-50">
            <div className="flex flex-wrap items-center justify-between mx-auto py-4 md:py-2 px:5 md:px:10 xl:px-36">
                <Link
                    href="/"
                    className="text-3xl md:text-3xl text-white font-semibold"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-400 to-blue-500">AG</span>
                </Link>
                <div className="block md:hidden">
                    {!navbarOpen ? (
                        <button
                            id="nav-toggle"
                            className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white"
                            onClick={() => setNavbarOpen(true)}
                        >
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button
                            id="nav-toggle"
                            className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white"
                            onClick={() => setNavbarOpen(false)}
                        >
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )}
                </div>
                <div className="hidden md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex p-4 md:p-0 rounded-lg flex-row md:space-x-8 mt-0">
                        {navLinks.map((link) => {
                            return (
                                <li>
                                    <NavLink
                                        key={link.title}
                                        title={link.title}
                                        href={link.path}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
};

export default Navbar;