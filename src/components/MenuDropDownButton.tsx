import * as React from 'react';
import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from "react";

const MenuDropDownButton = props => {

    return (
    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

        {/*Mobile menu button*/}
        <button type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu" aria-expanded="false" >

            <span className="sr-only">Open main menu</span>

            {/*Icon Open*/}
            <Bars3BottomLeftIcon onClick={props.setIsOpen}
                                 className={`${props.isOpen ? 'hidden' : 'block'} w-6 text-white`}/>

            {/*Icon Closed*/}
            <XMarkIcon onClick={props.setIsOpen}
                       className={`${props.isOpen ? 'block' : 'hidden'} w-6 text-white bg-`}/>

        </button>
    </div>);
};

export default MenuDropDownButton;
