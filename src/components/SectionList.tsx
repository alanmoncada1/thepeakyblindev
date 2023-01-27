import * as React from 'react';


const data = [{
    "date": "January 1, 2022",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "title": "Happy New Year!",
    "link": "www.example.com/new-year",
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

// TODO: Make here the list of items ask in open AI
const SectionList = props => {
    return (
        <div className="bg-teal-600 md:h-full flex items-center text-gray-600">
            <div className="container px-5 py-24 mx-auto">
                {/*Title */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-6xl text-white font-semibold">Check this out!</h2>
                </div>

                {/*List of items*/}
                <div className="flex flex-wrap -m-4">
                    {
                        data.map(item =>
                            <div className="p-4 sm:w-1/2 lg:w-1/3">
                                <div
                                    className="bg-white h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="h-72 lg:h-72 md:h-48 w-full object-cover object-center"
                                         src={item.imageUrl} alt="blog"/>
                                    <div
                                        className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                                        <h2 className="text-base font-medium text-indigo-700 mb-1">{item.date}</h2>
                                        <h2 className="text-2xl font-semibold mb-3">{item.title}</h2>
                                        <p className="leading-relaxed mb-3">{item.description}</p>
                                        <div className="flex items-center flex-wrap ">
                                            <a className="text-indigo-700 inline-flex items-center md:mb-2 lg:mb-0">Read
                                                More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor"
                                                     strokeWidth="2"
                                                     fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>

                                            <span
                                                className="text-gray-500 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none"
                                                     strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                    <path
                                                        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                                                    </path>
                                                </svg>6
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default SectionList;
