import * as React from 'react';
import Card from "./Card";
import {useEffect, useState} from "react";
import DataBlogApi from "../DataBlogApi/DataBlogApi";

const SectionList = props => {
    // List of sections
    const [sections, setSections] = useState([]);

    useEffect(() => {
        // IIFE To resolve the promise.
        (async (): Promise<void> => DataBlogApi.getSections()
            .then(({ success, data }) => {
               if (success)
                   setSections(data);
            })
        )();
    });

    return (
        <div className="bg-primary md:h-full flex items-center text-gray-600">
            <div className="container px-5 py-24 mx-auto">
                {/*Title */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-6xl text-white font-semibold font-sans">Check this out!</h2>
                </div>

                {/*List of items*/}
                <div className="flex flex-wrap -m-4">
                    {
                        sections.map(item => <Card date={item.date} description={item.description} title={item.title} link={item.link} imageUrl={item.imageUrl} />)
                    }

                </div>
            </div>
        </div>
    );
};

export default SectionList;
