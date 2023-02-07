import * as React from 'react';

import ResponsiveLinkMenu from "./ResponsiveLinkMenu";
import MenuDropDownButton from "../MenuDropDownButton";
import {useState} from "react";
import {BellIcon} from "@heroicons/react/24/solid";
import {Link} from "gatsby";

// TODO: Move it to a query
const menuItems = [
    {name: 'Art', isActive: true, route: '#'},
    {name: 'Blog', isActive: false, route: '#'},
    {name: 'Devs', isActive: false, route: '#'},
];

const ResponsiveMainNavbar = () => {
    const [isMenuDropDownButtonOpen, setIsMenuDropDownButtonOpen] = useState(false);

    return (
    <nav className="bg-teal-700">
        <div className="mx-auto max-w-screen-lg px-2 sm:px-6 lg:px-8">
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

                    {/*Menu Desktop*/}
                    <ResponsiveLinkMenu items={menuItems} isMobileMenu={false} />
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
        { isMenuDropDownButtonOpen && <ResponsiveLinkMenu items={menuItems} isMobileMenu={true} /> }
    </nav>
)
};

export default ResponsiveMainNavbar;
