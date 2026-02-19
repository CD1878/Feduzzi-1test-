import { Plus } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const { addToCart } = useCart();

    return (
        <div className="flex flex-col border-b border-gray-100 pb-6 mb-2 group">
            <div className="flex justify-between items-start mb-2">
                <div className="flex-1 pr-4">
                    <h3 className="font-serif text-xl text-feduzzi-dark group-hover:text-feduzzi-red transition-colors">{product.name}</h3>
                    <p className="font-sans text-gray-500 text-sm leading-relaxed mt-1">
                        {product.description}
                    </p>
                </div>
                <div className="flex flex-col items-end">
                    <span className="font-sans font-bold text-feduzzi-red mb-2">€{product.price.toFixed(2)}</span>
                    <button
                        onClick={() => addToCart(product)}
                        className="flex items-center gap-2 bg-white border border-gray-200 hover:border-feduzzi-red hover:text-feduzzi-red text-gray-600 px-3 py-1 rounded-sm text-xs uppercase tracking-wider font-bold transition-all"
                    >
                        <Plus size={14} />
                        Toevoegen
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
