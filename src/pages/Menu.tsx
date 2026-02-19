import { useState } from 'react';
import { IMAGES } from '../constants/images';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

const Menu = () => {
    const [activeTab, setActiveTab] = useState<'maaltijden' | 'broodjes' | 'traiteur'>('maaltijden');

    const filteredProducts = PRODUCTS.filter(p => p.category === activeTab);

    return (
        <div className="pt-32 pb-20 px-4 md:px-8 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-center font-serif text-4xl md:text-5xl text-feduzzi-red mb-8 font-light">
                    Ons Menu
                </h1>
                <p className="text-center font-sans text-gray-700 mb-12 max-w-2xl mx-auto">
                    Geniet van onze authentieke Italiaanse gerechten, vers bereid met de beste ingrediënten.
                    Kies uit onze heerlijke maaltijden, rijk belegde broodjes of diverse traiteur opties.
                </p>

                {/* Tabs */}
                <div className="flex justify-center flex-wrap gap-4 mb-16">
                    {['maaltijden', 'broodjes', 'traiteur'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as any)}
                            className={`px-8 py-3 uppercase text-xs font-bold tracking-widest transition-all rounded-sm border ${activeTab === tab
                                ? 'bg-feduzzi-red text-white border-feduzzi-red'
                                : 'bg-white text-gray-500 border-gray-300 hover:border-black hover:text-black'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 animate-fadeIn">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Image Grid */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 h-96">
                    <div className="w-full h-full overflow-hidden rounded-lg">
                        <img src={IMAGES.serviceMaaltijden} alt="Maaltijd" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="w-full h-full overflow-hidden rounded-lg">
                        <img src={IMAGES.serviceBroodjes} alt="Broodje" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Menu;
