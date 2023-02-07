import * as React from 'react';
import {ArrowRightIcon, ChatBubbleOvalLeftIcon} from "@heroicons/react/24/solid";

const Card = (props: CardInterface) => {
    return (
        <div className="p-4 sm:w-1/2 lg:w-1/3">
            <div className="bg-white h-full ring ring-3 ring-gray-100 rounded-lg overflow-hidden transition duration-300 ease-in group
                    hover:bg-gray-700 hover:text-gray-200">
                <img className="h-72 lg:h-72 md:h-48 w-full object-cover object-center"
                     src={props.imageUrl} alt="blog"/>

                <div className="p-6">
                    <h3 className="text-base font-medium text-indigo-700 mb-1 transition duration-300 ease-in
                                    group-hover:text-gray-200">{props.date}</h3>
                    <h2 className="text-2xl font-semibold mb-3">{props.title}</h2>
                    <p className="leading-relaxed mb-3">{props.description}</p>

                    <div className="flex items-center flex-wrap cursor-pointer">
                        <span className="text-indigo-700 inline-flex items-center md:mb-2 lg:mb-0 transition duration-300 ease-in
                                        group-hover:text-gray-200">Read More
                            <ArrowRightIcon className="w-3 h-4 ml-2"
                                stroke="currentColor"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                strokeLinecap="round"/>
                        </span>

                        <span className="text-gray-500 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 transition duration-300 ease-in
                                group-hover:text-gray-200">
                            <ChatBubbleOvalLeftIcon className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                strokeLinecap="round"/> 6
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;

interface CardInterface {
    date: string,
    description: string,
    title: string,
    link: string,
    imageUrl: string
}
