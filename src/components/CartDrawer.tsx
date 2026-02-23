import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
    const { isCartOpen, setIsCartOpen, items, removeFromCart, updateQuantity, cartTotal } = useCart();
    const { t } = useLanguage();

    if (!isCartOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
                onClick={() => setIsCartOpen(false)}
            ></div>

            {/* Drawer */}
            <div className="relative w-full max-w-md bg-white h-full shadow-xl flex flex-col transform transition-transform duration-300">

                {/* Header */}
                <div className="p-6 flex justify-between items-center border-b border-gray-100">
                    <h2 className="font-serif text-2xl text-feduzzi-dark">{t('winkelmandje')}</h2>
                    <button onClick={() => setIsCartOpen(false)} className="hover:opacity-70">
                        <X size={24} />
                    </button>
                </div>

                {/* Items */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {items.length === 0 ? (
                        <div className="text-center text-gray-500 mt-10 font-sans">
                            <p>{t('winkelmandje_leeg')}</p>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="mt-4 text-feduzzi-red hover:underline"
                            >
                                {t('verder_winkelen')}
                            </button>
                        </div>
                    ) : (
                        items.map((item) => (
                            <div key={item.id} className="flex gap-4">
                                <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-serif text-lg text-feduzzi-dark leading-tight">{item.name}</h3>
                                    <p className="text-feduzzi-red font-bold font-sans mt-1">€{item.price.toFixed(2)}</p>

                                    <div className="flex items-center justify-between mt-2">
                                        <div className="flex items-center border border-gray-200 rounded-sm">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="p-1 hover:bg-gray-100"
                                            >
                                                <Minus size={16} />
                                            </button>
                                            <span className="px-3 font-sans text-sm">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="p-1 hover:bg-gray-100"
                                            >
                                                <Plus size={16} />
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-gray-400 hover:text-red-500"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                    <div className="p-6 border-t border-gray-100 bg-gray-50">
                        <div className="flex justify-between items-center mb-6 font-serif text-xl">
                            <span>{t('totaal')}</span>
                            <span>€{cartTotal.toFixed(2)}</span>
                        </div>
                        <Link
                            to="/checkout"
                            onClick={() => setIsCartOpen(false)}
                            className="block w-full bg-feduzzi-red text-white text-center py-4 uppercase tracking-widest text-sm font-bold hover:bg-feduzzi-red-hover transition-colors rounded-sm"
                        >
                            {t('afrekenen')}
                        </Link>
                    </div>
                )}

            </div>
        </div>
    );
};

export default CartDrawer;
