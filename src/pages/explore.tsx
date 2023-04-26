import * as React from 'react';
import Layout from "../components/layout";
import {useEffect, useState} from "react";
import {ArrowRightIcon} from "@heroicons/react/24/solid";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/20/solid";

const postsData = [
    {
        id: Math.random(),
        title: "My strange attraction to freckles.",
        description: "An interesting story about some ",
        date: new Date(),
        topics: ['Curious', 'Interesting'],
        contentTypeId: Math.random(),
    },
    {
        id: Math.random(),
        title: "My strange attraction to freckles.",
        description: "An interesting story about some ",
        date: new Date(),
        topics: ['Curious', 'Interesting'],
        contentTypeId: Math.random(),
    },
    {
        id: Math.random(),
        title: "My strange attraction to freckles.",
        description: "An interesting story about some ",
        date: new Date(),
        topics: ['Curious', 'Interesting'],
        contentTypeId: Math.random(),
    },
];

const Explore = props => {
    const [posts, setPosts] = useState<PostsInterface[]>([]);
    // TODO: Move this to a promise and repair the types
    useEffect(() => setPosts(postsData));

    return (
        <Layout>
            <div className="text-gray-600">
                <div className="p-4">
                    <h2 className="text-2xl">Blog</h2>
                </div>

                <div className="pl-4">
                    <p>Recently added</p>
                </div>

                <div className="relative">
                    <div className="flex overflow-x-auto space-x-5 p-2">
                        {
                            posts.map(post =>
                                <div className="grid inset-0 h-44 w-44 lg:h-72 lg:w-72 aspect-square bg-cover bg-center bg-no-repeat bg-primary bg-[url('https://cdn.pixabay.com/photo/2023/04/07/08/52/girl-7905874_1280.jpg')]">
                                    <h1 className="mx-3 self-center text-center text-gray-200 text-2xl font-bold lg:text-4xl font-sans">{post.title}</h1>
                                </div>
                            )
                        }
                    </div>

                    {/*TODO: Add logic to remove this with the scrolling like the stories in facebook*/}
                    {/* Left Icon, to move the queue to the right.*/}
                    <div className="absolute top-1/2 left-1.5 -translate-y-1/2">
                        <ChevronLeftIcon className="w-12 h-12 text-black bg-slate-50 rounded-full" />
                    </div>

                    {/* Right Icon, to move the queue to the left.*/}
                    <div className="absolute top-1/2 right-1.5 -translate-y-1/2">
                        <ChevronRightIcon className="w-12 h-12 text-black bg-slate-50 rounded-full" />
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default Explore;

interface PostsInterface {
    id: number
    title: string,
    description: string,
    date: Date,
    topics: string[],
    contentTypeId: number,
}