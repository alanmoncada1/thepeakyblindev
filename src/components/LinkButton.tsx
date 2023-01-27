import * as React from 'react';
import {Link} from "gatsby";

const LinkButton = (props: LinkButtonInterface) => (
    <Link className="bg-teal-700 py-4 rounded-md text-white text-xl font-medium transition
                     hover:delay-150 hover:duration-300 hover:bg-teal-700 hover:ring hover:ring-4 hover:ring-teal-700 hover:ring-offset-4 hover:ring-offset-white"
                 to={props.link}>{props.text}</Link>
);

export default LinkButton;

interface LinkButtonInterface {
    text: string,
    link: string
}