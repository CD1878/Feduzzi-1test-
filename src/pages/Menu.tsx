import { useState } from 'react';
import { IMAGES } from '../constants/images';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useLanguage } from '../context/LanguageContext';

const Menu = () => {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState<'maaltijden' | 'broodjes' | 'traiteur'>('broodjes');

    // Normalize category comparison (Data has 'Maaltijden', tab is 'maaltijden')
    const filteredProducts = PRODUCTS.filter(p => p.category.toLowerCase() === activeTab.toLowerCase());

    return (
        <div className="bg-feduzzi-cream min-h-screen">
            {/* Header Section */}
            <div className="pt-24 pb-32 bg-feduzzi-cream relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-feduzzi-red/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-feduzzi-olive to-feduzzi-red"></div>

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-feduzzi-olive font-bold uppercase tracking-widest text-xs mb-4 block">{t('la_dolce_vita')}</span>
                    <h1 className="font-serif text-5xl md:text-7xl text-feduzzi-dark mb-6">
                        {t('ons_menu')}
                    </h1>
                    <p className="font-sans text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        {t('menu_intro')}
                    </p>
                </div>
            </div>
            {/* How it Works - Stepper */}
            <div className="max-w-7xl mx-auto px-4 transform -translate-y-8 relative z-20">
                <div className="bg-white rounded-xl shadow-xl p-8 md:p-10 border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 -z-0"></div>

                        {/* Step 1 */}
                        <div className="text-center relative z-10">
                            <div className="w-24 h-24 mx-auto bg-feduzzi-cream rounded-full flex items-center justify-center mb-6 shadow-sm border-4 border-white">
                                <span className="font-serif text-4xl text-feduzzi-olive transition-transform hover:scale-110 duration-300">1</span>
                            </div>
                            <h3 className="font-bold text-feduzzi-dark uppercase tracking-widest text-sm mb-3">{t('stap_1_titel')}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed px-4">
                                {t('stap_1_desc')}
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="text-center relative z-10">
                            <div className="w-24 h-24 mx-auto bg-feduzzi-cream rounded-full flex items-center justify-center mb-6 shadow-sm border-4 border-white">
                                <span className="font-serif text-4xl text-feduzzi-olive transition-transform hover:scale-110 duration-300">2</span>
                            </div>
                            <h3 className="font-bold text-feduzzi-dark uppercase tracking-widest text-sm mb-3">{t('stap_2_titel')}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed px-4">
                                {t('stap_2_desc')}
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="text-center relative z-10">
                            <div className="w-24 h-24 mx-auto bg-feduzzi-cream rounded-full flex items-center justify-center mb-6 shadow-sm border-4 border-white">
                                <span className="font-serif text-4xl text-feduzzi-olive transition-transform hover:scale-110 duration-300">3</span>
                            </div>
                            <h3 className="font-bold text-feduzzi-dark uppercase tracking-widest text-sm mb-3">{t('stap_3_titel')}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed px-4">
                                {t('stap_3_desc_start')} <span className="text-feduzzi-red font-bold">{t('stap_3_desc_end')}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Tab Navigation - Playful Styling */}
            <div className="sticky top-[70px] md:top-[100px] z-30 bg-feduzzi-cream/95 backdrop-blur-sm border-b border-gray-100 shadow-sm py-4">
                <div className="flex justify-center flex-wrap gap-4 px-4 overflow-x-auto">
                    {['broodjes', 'maaltijden', 'traiteur'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as any)}
                            className={`px-8 py-3 rounded-full uppercase text-xs font-bold tracking-widest transition-all duration-300 transform hover:scale-105 ${activeTab === tab
                                ? 'bg-feduzzi-red text-white shadow-lg shadow-feduzzi-red/30'
                                : 'bg-gray-50 text-gray-500 hover:bg-feduzzi-olive hover:text-white'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 animate-fadeIn">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="transform transition-all duration-500 hover:-translate-y-2">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>

                {/* Visual Footer for Menu */}
                <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-feduzzi-cream rounded-3xl p-8 md:p-12 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-bl-full z-0 opacity-50"></div>

                    <div className="relative z-10">
                        <h2 className="font-serif text-3xl md:text-4xl text-feduzzi-dark mb-6">{t('dieetwensen_titel')}</h2>
                        <p className="font-sans text-gray-600 mb-8 leading-relaxed">
                            {t('dieetwensen_desc')}
                        </p>
                        <a href="mailto:info@feduzzi.nl" className="inline-block bg-feduzzi-dark text-white px-8 py-3 rounded-full uppercase text-xs font-bold tracking-widest hover:bg-feduzzi-olive transition-colors">
                            {t('neem_contact_op')}
                        </a>
                    </div>
                    <div className="relative z-10 h-64 md:h-full group">
                        <img src={IMAGES.pasta} alt="Pasta" className="w-full h-full object-cover rounded-2xl shadow-lg transform rotate-2 group-hover:rotate-0 transition-transform duration-500" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
