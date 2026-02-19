import { Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants/images';

const Footer = () => {
    return (
        <footer className="bg-feduzzi-red text-white py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Footer Logo */}
                <div className="w-48 mb-16">
                    <img src={IMAGES.footerLogo} alt="Feduzzi Footer Logo" className="w-full object-contain" />
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full max-w-5xl text-center font-sans">

                    <div className="flex flex-col space-y-4">
                        <h4 className="font-serif text-2xl mb-2">Vestigingen</h4>
                        <Link to="/vestigingen" className="underline hover:opacity-80">Amsterdam</Link>
                        <Link to="/vestigingen" className="underline hover:opacity-80">Laren</Link>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <h4 className="font-serif text-2xl mb-2">Menu</h4>
                        <Link to="/menu" className="underline hover:opacity-80">Maaltijden</Link>
                        <Link to="/menu" className="underline hover:opacity-80">Broodjes</Link>
                        <Link to="/menu" className="underline hover:opacity-80">Traiteur</Link>
                        <Link to="/catering" className="underline hover:opacity-80">Catering</Link>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <h4 className="font-serif text-2xl mb-2">Bestellen</h4>
                        <a href="#" className="underline hover:opacity-80">Online broodjes</a>
                        <a href="#" className="underline hover:opacity-80">Catering Amsterdam</a>
                        <a href="#" className="underline hover:opacity-80">Catering Laren</a>
                    </div>

                    <div className="flex flex-col space-y-4 items-center">
                        <h4 className="font-serif text-2xl mb-2">Volg ons</h4>
                        <div className="flex space-x-6 mt-2">
                            <a href="#" className="hover:opacity-80"><Facebook size={20} /></a>
                            <a href="#" className="hover:opacity-80"><Instagram size={20} /></a>
                        </div>
                    </div>

                </div>

                {/* Copyright */}
                <div className="mt-20 text-[10px] md:text-xs text-center opacity-80 font-sans tracking-wide">
                    <p>
                        Cookieverklaring | Privacyverklaring | © 2026 Feduzzi. All rights reserved | Made by <a href="#" className="underline">Chef Digital</a>
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
