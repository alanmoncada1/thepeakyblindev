import * as React from 'react';
import SocialMediaButtons from "../SocialMediaIcons/SocialMediaButtons";

const Footer = () => {
    return (
        <footer>
            <div className="container mx-auto flex flex-col-reverse my-10 lg:my-14 lg:inline-grid lg:grid-cols-2">
                <div className="text-center">
                    <p className="text-sm mt-8">Copyright &copy; {new Date().getFullYear()} &middot; thepeakyblindev.com</p>
                </div>

                <div className="flex flex-col text-center space-y-8 lg:space-y-1">

                    <div className="hidden lg:block self-end">
                        <SocialMediaButtons type="grayIcons"/>
                    </div>

                    <div className="lg:hidden space-y-4">
                        <h3 className="text-gray-600 font-bold leading-loose">Follow me for more</h3>
                        <SocialMediaButtons type="color"/>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium mb-4 text-gray-600">Subscribe to my blog</h3>

                        <form className="flex justify-center space-x-2">
                            <input type="email" placeholder="Your mail"
                                   className="bg-slate-50 border border-gray-400 p-2 rounded-md ring-1 ring-teal-700"/>
                            <button type="submit"
                                    className="bg-primary text-white p-2 rounded-md text-white font-medium transition w-auto
                                               hover:delay-150 hover:duration-300 hover:bg-primary hover:ring hover:ring-2 hover:ring-teal-700 hover:ring-offset-2 hover:ring-offset-white">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
