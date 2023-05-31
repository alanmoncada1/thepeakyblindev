import * as React from 'react';
import {Link} from "gatsby";
import HorizontalScrollImages from "./HorizontalScrollImages";
import {PostsScrollInterface} from "../model/Types";

const ScrollSection = (props: ScrollSectionInterface) => {
    return (
        <div>
            <div className="text-gray-600">
                <div className="flex items-center pl-4 pt-6">
                    <Link to={"#"}>
                        <h2 className="cursor-pointer font-semibold text-2xl md:text-4xl hover:text-teal-700">Blog</h2>
                    </Link>
                </div>

            </div>

            <div className="p-2">
                <div className="flex text-lg text-gray-600 justify-between p-2">
                    <p className="font-sans">Recently added</p>
                    <Link className="ml-4 font-sans hover:text-teal-700" to={"#"}>See all</Link>
                </div>

                <HorizontalScrollImages posts={props.posts}/>
            </div>
        </div>
    );
};

export default ScrollSection;

interface ScrollSectionInterface {
    posts: PostsScrollInterface[]
}
