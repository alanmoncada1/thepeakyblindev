import * as React from 'react';

import MobileMenu from "./MobileMenu";
import MenuDropDownButton from "../MenuDropDownButton";
import {useState} from "react";
import {BellIcon} from "@heroicons/react/24/solid";

// TODO: Move it to a query
const data = [
    {name: 'Art', isActive: true, route: '/art'},
    {name: 'Blog', isActive: false, route: '/blog'},
    {name: 'Devs', isActive: false, route: '/devs'},
]

const ResponsiveMainNavbar = () => {
    const [isMenuDropDownButtonOpen, setIsMenuDropDownButtonOpen] = useState(false);

    return (
    <nav className="bg-teal-700">
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
                            {
                                data.map(item => <a href={item.route}
                                                 className={`${ item.isActive ? 'bg-gray-900 text-white ' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium`}
                                                 aria-current="page">{item.name}</a>
                                )
                            }

                         </div>
                    </div>
                </div>

                <div
                    className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button type="button"
                            className="rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">View notifications</span>
                        {/*Heroicon name: outline/bell*/}
                        <BellIcon className="h-6 w-6 text-white"/>
                    </button>

                    {/*Profile dropdown*/}
                    {/*<ProfileDropDownMenu />*/}
                </div>
            </div>
        </div>

        {/*Show or dissapear menu*/}
        { isMenuDropDownButtonOpen && <MobileMenu items={data} /> }
    </nav>
)
};

export default ResponsiveMainNavbar;
