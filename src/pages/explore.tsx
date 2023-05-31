import * as React from 'react';
import Layout from "../components/layout";
import {useEffect, useState} from "react";
import {PostsInterface} from "../model/Types";
import DataBlogApi from "../DataBlogApi/DataBlogApi";
import ScrollSection from "../components/ScrollSection";

const Explore = () => {
    const [posts, setPosts] = useState<PostsInterface[]>([]);

    useEffect(() => {
        // IIFE To resolve the promise.
        (async (): Promise<void> => DataBlogApi.getPost()
                .then(({ success, data }) => {
                    if (success)
                        setPosts(data);
                })
        )();
    });

    return (
        <Layout>
            {/*// TODO: BIG PICTURE AND SEARCH BAR*/}
            {/*<ScrollSection posts={posts} />*/}
            {/*// TODO: Components different than Scroll to the different sections*/}

        </Layout>
    )
};

export default Explore;
