import * as React from 'react';
import MobileMenu from "./MobileMenu";
import MenuDropDownButton from "../MenuDropDownButton";
import {useState} from "react";


const ResponsiveMainNavbar = () => {
    const [isMenuDropDownButtonOpen, setIsMenuDropDownButtonOpen] = useState(false);

    return (
    <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">

                <MenuDropDownButton isOpen={isMenuDropDownButtonOpen}
                                        setIsOpen={() => setIsMenuDropDownButtonOpen(!isMenuDropDownButtonOpen)}/>

                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                        <img className="block h-8 w-auto lg:hidden"
                             src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                            <img className="hidden h-8 w-auto lg:block"
                                 src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                 alt="Your Company" />
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                            {/*Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"*/}
                            <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                               aria-current="page">Dashboard</a>

                            <a href="#"
                               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>

                            <a href="#"
                               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>

                            <a href="#"
                               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
                         </div>
                    </div>
                </div>

                <div
                    className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button type="button"
                            className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">View notifications</span>
                        {/*Heroicon name: outline/bell*/}
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
                        </svg>
                    </button>

                    {/*Profile dropdown*/}
                    {/*<ProfileDropDownMenu />*/}
                </div>
            </div>
        </div>

        {/*Show or dissapear menu*/}
        { isMenuDropDownButtonOpen && <MobileMenu /> }
    </nav>
)
};

export default ResponsiveMainNavbar;
