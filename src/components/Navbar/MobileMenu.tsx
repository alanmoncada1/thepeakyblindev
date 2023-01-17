import * as React from 'react';

const MobileMenu = props => {
    return (
            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-2 px-2 pt-4 pb-4 text-center">
                    {
                        props.items.map(item => <a href={item.route} className={`${item.isActive ? 'bg-teal-600 outline outline-white text-white  text-xl font-sans font-medium' : 'bg-teal-600 text-gray-300 text-xl font-sans font-medium active::text-white '} block px-3 py-2 rounded-md text-base font-medium`}
                                                aria-current="page">{item.name}</a>
                        )
                    }
                </div>
            </div>
    );
};

export default MobileMenu;
