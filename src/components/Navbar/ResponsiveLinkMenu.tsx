import * as React from 'react';
import {Link} from "gatsby";

const ResponsiveLinkMenu = (props: ResponsiveLinkMenuInterface) => {

    // Menu for Desktop
    const DesktopLinkMenu =
        <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
                {
                    props.items.map(item =>
                        <Link to={item.route} aria-current="page"
                            className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium
                             transition hover:duration-200 hover:delay-100 hover:ring-1 hover:ring-white hover:text-white
                              focus:duration-150 focus:delay-100 focus:bg-slate-50 focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-700 focus:ring-white focus:text-black">
                            {item.name}
                        </Link>
                    )
                }

            </div>
        </div>;

    // Menu for mobile
    const MobileLinkMenu =
        <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-8 px-4 pt-4 pb-4 text-center">
                {
                    props.items.map(item =>
                        <Link to={item.route} aria-current="page"
                            className="bg-teal-600 text-gray-300 text-xl font-sans block px-3 py-4 rounded-md text-base transition
                            focus:duration-200 focus:delay-100 focus:bg-slate-50 focus:ring-2 focus:ring-offset-4 focus:ring-offset-teal-700 focus:ring-white focus:text-black">{item.name}</Link>
                    )
                }
            </div>
        </div>;

    // Return Mobile or Desktop Menu
    return props.isMobileMenu ? MobileLinkMenu : DesktopLinkMenu;
};


export default ResponsiveLinkMenu;


interface ResponsiveLinkMenuInterface {
    isMobileMenu: boolean;
    items: ItemInterface[];
}

interface ItemInterface {
        name: string;
        route: string;
}