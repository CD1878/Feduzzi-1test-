import { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnnouncementBar from './AnnouncementBar';
import { LOGO_URL, IMAGES } from '../constants/images';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import CartDrawer from './CartDrawer';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { cartCount, setIsCartOpen } = useCart();
    const { t, language, setLanguage } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-feduzzi-red shadow-md' : 'bg-feduzzi-red'} ${mobileMenuOpen ? 'bg-transparent' : ''}`}>
                {!mobileMenuOpen && <AnnouncementBar />}
                <div className={`mx-auto max-w-7xl px-4 md:px-8 py-4 md:py-6 flex justify-between items-center transition-colors duration-300 text-white`}>

                    {/* Logo */}
                    <div className="w-32 md:w-48 relative z-50">
                        <Link to="/">
                            <img
                                src={isScrolled ? IMAGES.footerLogo : LOGO_URL}
                                alt="Feduzzi"
                                className={`w-full object-contain transition-all duration-300 ${isScrolled ? 'invert-0' : 'brightness-0 invert'}`}
                                style={isScrolled ? { filter: 'none' } : {}}
                            />
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center space-x-8 font-sans uppercase tracking-widest text-xs font-semibold">
                        {[
                            { key: 'menu', path: '/menu' },
                            { key: 'sfeer', path: '/sfeer' },
                            { key: 'over_ons', path: '/over-ons' },
                            { key: 'werken_bij', path: '/werken-bij' },
                            { key: 'vestigingen', path: '/vestigingen' }
                        ].map((item) => (
                            <Link key={item.key} to={item.path} className="hover-underline-animation hover:text-feduzzi-olive transition-colors duration-300">
                                {t(item.key)}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {/* Language Switcher */}
                        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest">
                            <button
                                onClick={() => setLanguage('nl')}
                                className={`transition-colors ${language === 'nl' ? 'text-feduzzi-olive' : 'text-white/70 hover:text-white'}`}
                            >
                                NL
                            </button>
                            <span className="text-white/30">|</span>
                            <button
                                onClick={() => setLanguage('en')}
                                className={`transition-colors ${language === 'en' ? 'text-feduzzi-olive' : 'text-white/70 hover:text-white'}`}
                            >
                                EN
                            </button>
                        </div>

                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-feduzzi-olive transition-colors duration-300 transform hover:scale-110"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-feduzzi-olive transition-colors duration-300 transform hover:scale-110"><Instagram size={20} /></a>
                        </div>

                        <button
                            onClick={() => setIsCartOpen(true)}
                            className={`relative p-2 hover:text-feduzzi-olive transition-colors duration-300 transform hover:scale-110 ${isScrolled ? 'text-black' : 'text-white'}`}
                        >
                            <ShoppingCart size={24} />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-feduzzi-olive text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold animate-bounce">
                                    {cartCount}
                                </span>
                            )}
                        </button>

                        <Link to="/menu" className={`border px-6 py-3 uppercase text-xs font-bold tracking-widest transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${isScrolled ? 'border-black hover:bg-feduzzi-olive hover:border-feduzzi-olive hover:text-white' : 'border-white hover:bg-white hover:text-feduzzi-dark'}`}>
                            {t('bestel_broodjes')}
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="lg:hidden flex items-center space-x-4 relative z-50">
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className={`relative p-1 ${isScrolled ? 'text-black' : 'text-white'}`}
                        >
                            <ShoppingCart size={24} />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-feduzzi-red text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                                    {cartCount}
                                </span>
                            )}
                        </button>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={28} color={isScrolled ? "black" : "white"} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {mobileMenuOpen && (
                    <div className="fixed inset-0 bg-black text-white z-40 flex flex-col pt-32 px-8">
                        <nav className="flex flex-col space-y-6 text-xl font-serif">
                            {['Menu', 'Sfeer', 'Over ons', 'Werken bij', 'Vestigingen'].map((item) => (
                                <Link
                                    key={item}
                                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                                    className="hover:text-feduzzi-red transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}
                        </nav>
                        <div className="mt-12 flex space-x-6">
                            <Facebook size={24} />
                            <Instagram size={24} />
                        </div>
                        <Link to="/menu" className="mt-8 bg-feduzzi-red text-white text-center py-4 uppercase tracking-widest text-sm font-bold" onClick={() => setMobileMenuOpen(false)}>
                            Bestel broodjes
                        </Link>
                    </div>
                )}
            </header>
            <CartDrawer />
        </>
    );
};

export default Header;
