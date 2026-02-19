import { useState } from 'react';
import { Plus, Minus, User, Scale } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => setQuantity(prev => prev + 1);
    const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    const handleAddToCart = () => {
        addToCart(product, quantity);
        setQuantity(1); // Reset after adding
    };

    return (
        <div className="flex flex-col border border-gray-100 rounded-lg overflow-hidden group hover:shadow-lg transition-shadow duration-300 bg-white h-full relative">
            <div className="h-48 overflow-hidden relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>

                {/* Badges for Weight/Serves moved to image overlay for cleaner look or keep in body? Let's keep in body for readability but maybe a small badge on image if needed. sticking to body for now. */}
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-xl text-feduzzi-dark group-hover:text-feduzzi-red transition-colors mb-2 line-clamp-2">{product.name}</h3>
                    <span className="font-sans font-bold text-feduzzi-red text-lg whitespace-nowrap">€{product.price.toFixed(2)}</span>
                </div>

                {/* Product Details (Weight & Serves) */}
                {(product.weight || product.serves) && (
                    <div className="flex gap-4 mb-3 text-xs text-gray-500 font-bold uppercase tracking-wider">
                        {product.weight && (
                            <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded">
                                <Scale size={14} className="text-feduzzi-olive" />
                                <span>{product.weight}</span>
                            </div>
                        )}
                        {product.serves && (
                            <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded">
                                <User size={14} className="text-feduzzi-olive" />
                                <span>{product.serves === 1 ? '1 persoon' : `${product.serves} personen`}</span>
                            </div>
                        )}
                    </div>
                )}

                <p className="font-sans text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                    {product.description}
                </p>

                <div className="pt-4 border-t border-gray-50 mt-auto flex flex-col gap-3">
                    {/* Quantity Selector & Add Button */}
                    <div className="flex items-center gap-3">
                        {/* Quantity Control */}
                        <div className="flex items-center border border-gray-200 rounded-sm h-10 w-24 flex-shrink-0">
                            <button
                                onClick={handleDecrement}
                                className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-feduzzi-red hover:bg-gray-50 transition-colors"
                            >
                                <Minus size={14} />
                            </button>
                            <span className="flex-1 text-center font-bold text-sm text-gray-700">{quantity}</span>
                            <button
                                onClick={handleIncrement}
                                className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-feduzzi-red hover:bg-gray-50 transition-colors"
                            >
                                <Plus size={14} />
                            </button>
                        </div>

                        {/* Add Button */}
                        <button
                            onClick={handleAddToCart}
                            className="flex-1 flex justify-center items-center gap-2 bg-feduzzi-dark border border-transparent hover:bg-feduzzi-olive text-white px-4 py-2.5 rounded-sm text-xs uppercase tracking-wider font-bold transition-all duration-300 h-10 shadow-sm hover:shadow-md"
                        >
                            In Winkelmand
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
