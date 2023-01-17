import * as React from 'react';
import {Link} from "gatsby";

const LinkButton = (props: LinkButtonInterface) => (
    <Link className="bg-teal-700 py-4 rounded-md hover:bg-indigo-600 active:bg-indigo-700 text-white text-xl font-sans font-medium"
                 to={props.link}>{props.text}</Link>
);

export default LinkButton;

interface LinkButtonInterface {
    text: string,
    link: string
}