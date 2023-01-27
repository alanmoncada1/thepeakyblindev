import * as React from 'react';
import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';

// TODO: Close menu when click outside
const MenuDropDownButton = props => {

    return (
    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

        {/*Mobile menu button*/}
        <button type="button"
                className="inline-flex items-center justify-center rounded-md p-2  hover:text-white  focus:ring-1 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu" aria-expanded="false" >

            <span className="sr-only">Open main menu</span>

            {/*Icon Open*/}
            <Bars3BottomLeftIcon onClick={props.setIsOpen}
                                 className={`${props.isOpen ? 'hidden' : 'block'} w-7 text-white`}/>

            {/*Icon Closed*/}
            <XMarkIcon onClick={props.setIsOpen}
                       className={`${props.isOpen ? 'block' : 'hidden'} w-7 text-white bg-`}/>

        </button>
    </div>);
};

export default MenuDropDownButton;
