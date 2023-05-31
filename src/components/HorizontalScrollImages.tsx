import * as React from 'react';
import {useRef, useState} from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/20/solid";
import {PostsInterface} from "../model/Types";

const HorizontalScrollImages = (props: HorizontalScrollImagesInterface) => {
    const scrollConf: ScrollConfigurationInterface = { RIGHT: 'right', LEFT: 'left', behavior: 'smooth' };
    const [showLeftIcon, setShowLeftIcon] = useState<boolean>(false);
    const [showRightIcon, setShowRightIcon] = useState<boolean>(true);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (!scrollContainerRef.current) return;
        const {scrollLeft, scrollWidth, clientWidth} = scrollContainerRef.current;

        setShowLeftIcon(scrollLeft > 0);
        setShowRightIcon(scrollLeft < scrollWidth - clientWidth);
    };

    const scrollContent = (direction: ScrollDirectionInterface["direction"]) => {
        if (!scrollContainerRef.current) return;
        const scrollAmount = scrollContainerRef.current.clientWidth;
        const newScrollPosition = scrollContainerRef.current.scrollLeft + (direction === scrollConf.RIGHT ? scrollAmount : -scrollAmount);
        scrollContainerRef.current.scrollTo({
            left: newScrollPosition,
            behavior: scrollConf.behavior
        });
    };

    return (
        <div className="relative">
            <div className="snap-x flex overflow-x-auto space-x-2" onScroll={handleScroll} ref={scrollContainerRef}>
                {
                    props.posts.map(post =>
                        <div
                            className="snap-end cursor-pointer grid inset-0 h-46 w-46 lg:h-72 lg:w-72 aspect-square rounded-md bg-cover bg-center bg-no-repeat bg-primary bg-[url('https://cdn.pixabay.com/photo/2023/04/07/08/52/girl-7905874_1280.jpg')]">
                            <h1 className="mx-3 self-center text-center text-gray-200 text-2xl font-bold lg:text-4xl font-sans">{post.title}</h1>
                        </div>
                    )
                }
            </div>

            {showLeftIcon && (
                <div className="cursor-pointer absolute top-1/2 left-1.5 -translate-y-1/2 cursor-pointer"
                     onClick={() => scrollContent(scrollConf.LEFT)}>
                    <ChevronLeftIcon
                        className="w-12 h-12 text-black bg-slate-50 rounded-full
                                   hover:bg-opacity-80"/>
                </div>
            )}

            {showRightIcon && (
                <div className="cursor-pointer absolute top-1/2 right-1.5 -translate-y-1/2 cursor-pointer"
                     onClick={() => scrollContent(scrollConf.RIGHT)}>
                    <ChevronRightIcon
                        className="w-12 h-12 text-black bg-slate-50 rounded-full
                                   hover:bg-opacity-80"/>
                </div>
            )}
        </div>
    );
};

export default HorizontalScrollImages;

interface HorizontalScrollImagesInterface {
    posts: PostsInterface[],
}

interface ScrollConfigurationInterface {
    RIGHT: string,
    LEFT: string,
    behavior: ScrollBehavior
}

interface ScrollDirectionInterface { direction: string }