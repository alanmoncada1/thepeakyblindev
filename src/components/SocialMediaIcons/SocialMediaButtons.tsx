import * as React from 'react';
import {Link} from "gatsby";

import SocialIconsProperties from "./SocialMediaData"
/**
 * SocialMediaButtons: Social Media icons in line with different styles.
 * @param props
 * @constructor
 */
const SocialMediaButtons = (props: SocialMediaButtonsInterface) => {
    return (
        <div className="flex justify-center mb-8 space-x-5">
            { socialMediaSwitchStyle[props.type]() }
        </div>
    );
};

const socialMediaSwitchStyle = {
    color: () => { return <ColorCircleIcons /> },
    grayIcons: () => { return <GrayIcons />}
}

const ColorCircleIcons = () => {

    return (
        <>
            {/* Icons Array*/}
            {SocialIconsProperties.map(icon =>
                <Link to={icon.link} target="_blank" type="button" className={`${icon.className} inline-block p-3 mb-2 text-white font-medium text-xs leading-tight rounded-full shadow-md 
                        hover:shadow-lg focus:shadow-lg 
                        focus:outline-none focus:ring-0 
                        active:shadow-lg transition duration-150 ease-in-out`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox={icon.svgPosition} className="w-5 h-5">
                        {icon.iconCode}
                    </svg>
                </Link>
            )}
        </>
    );
}

const GrayIcons = () => {

    return (
        <>
            {/* Icons Array*/}
            {SocialIconsProperties.map(icon =>
                <Link to={icon.link} target="_blank" type="button" className="inline-block px-2 mb-2 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-8 h-8">
                        {icon.iconCode}
                    </svg>
                </Link>
            )}
        </>
    );
}

export default SocialMediaButtons;


interface SocialMediaButtonsInterface {
    type: 'color' | 'grayIcons'
}