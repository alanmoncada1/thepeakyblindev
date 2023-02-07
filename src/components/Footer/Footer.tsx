import * as React from 'react';
import SocialMediaButtons from "./SocialMediaButtons";

const Footer = () => {
    return (
        <footer>
            <div className="container mx-auto text-center">
                <div className="flex flex-col items-center">

                    <div className="lg:hidden p-6 space-y-6">
                        <h3 className="text-gray-600 font-bold leading-loose">Follow me for more</h3>
                        <SocialMediaButtons />
                    </div>

                    <h3 className="text-lg font-medium mb-4">Suscríbete a mi blog</h3>

                    <form className="flex flex-col items-center">

                        <input type="email" placeholder="Tu correo electrónico" className="bg-white border border-gray-400 p-2 mb-4"/>

                        <button type="submit" className="bg-green-400 text-white p-2 rounded">
                            Suscribirse
                        </button>

                    </form>



                </div>
                <p className="text-sm mt-8">Copyright &copy; {new Date().getFullYear()} &middot; thepeakyblindev.com</p>
            </div>
        </footer>
    );
};

export default Footer;
