import { Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants/images';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

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
                        <h4 className="font-serif text-2xl mb-2 text-white/90">{t('vestigingen')}</h4>
                        <Link to="/vestigingen" className="hover-underline-animation w-fit mx-auto md:mx-0 hover:text-feduzzi-olive transition-colors duration-300">Amsterdam</Link>
                        <Link to="/vestigingen" className="hover-underline-animation w-fit mx-auto md:mx-0 hover:text-feduzzi-olive transition-colors duration-300">Laren</Link>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <h4 className="font-serif text-2xl mb-2 text-white/90">{t('menu')}</h4>
                        <Link to="/menu" className="hover-underline-animation w-fit mx-auto md:mx-0 hover:text-feduzzi-olive transition-colors duration-300">{t('maaltijden')}</Link>
                        <Link to="/menu" className="hover-underline-animation w-fit mx-auto md:mx-0 hover:text-feduzzi-olive transition-colors duration-300">Broodjes</Link>
                        <Link to="/menu" className="hover-underline-animation w-fit mx-auto md:mx-0 hover:text-feduzzi-olive transition-colors duration-300">{t('traiteur')}</Link>
                        <Link to="/catering" className="hover-underline-animation w-fit mx-auto md:mx-0 hover:text-feduzzi-olive transition-colors duration-300">{t('catering')}</Link>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <h4 className="font-serif text-2xl mb-2 text-white/90">{t('bestellen')}</h4>
                        <a href="#" className="hover-underline-animation w-fit mx-auto md:mx-0 hover:text-feduzzi-olive transition-colors duration-300">{t('online_broodjes')}</a>
                        <a href="#" className="hover-underline-animation w-fit mx-auto md:mx-0 hover:text-feduzzi-olive transition-colors duration-300">{t('catering_amsterdam')}</a>
                        <a href="#" className="hover-underline-animation w-fit mx-auto md:mx-0 hover:text-feduzzi-olive transition-colors duration-300">{t('catering_laren')}</a>
                    </div>

                    <div className="flex flex-col space-y-4 items-center">
                        <h4 className="font-serif text-2xl mb-2 text-white/90">{t('volg_ons')}</h4>
                        <div className="flex space-x-6 mt-2">
                            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-feduzzi-red transition-all duration-300 transform hover:scale-110"><Facebook size={20} /></a>
                            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-feduzzi-red transition-all duration-300 transform hover:scale-110"><Instagram size={20} /></a>
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
