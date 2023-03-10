import * as React from 'react';
import Card from "./Card";


const data = [{
    "date": "January 1, 2022",
    "description": "<b>Do you have 5 min?</b> Step into the world of Stories and Reflections, where every tale will leave you breathless and every reflection will ignite a fire within you. Get ready for a journey of self-discovery and be inspired by the passion and depth of these carefully crafted stories and thoughts.",
    "title": "Take a look into my blog!",
    "link": "/blog",
    "imageUrl": "https://images.unsplash.com/photo-1674718246692-19a7c2c39462?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
}, {
    "date": "February 14, 2022",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "title": "Love is in the air",
    "link": "www.example.com/valentines-day",
    "imageUrl": "https://images.unsplash.com/photo-1674664799224-dd87403f5049?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80"
}, {
    "date": "April 1, 2022",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "title": "Fool me once...",
    "link": "www.example.com/april-fools",
    "imageUrl": "https://images.unsplash.com/photo-1674665895191-6ee1ac923ba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
}];

const SectionList = props => {
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
                        data.map(item => <Card date={item.date} description={item.description} title={item.title} link={item.link} imageUrl={item.imageUrl} />)
                    }

                </div>
            </div>
        </div>
    );
};

export default SectionList;
