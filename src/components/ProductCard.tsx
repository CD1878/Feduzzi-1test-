import { Plus } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const { addToCart } = useCart();

    return (
        <div className="flex flex-col border border-gray-100 rounded-lg overflow-hidden group hover:shadow-lg transition-shadow duration-300 bg-white h-full">
            <div className="h-48 overflow-hidden relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-xl text-feduzzi-dark group-hover:text-feduzzi-red transition-colors mb-2">{product.name}</h3>
                    <span className="font-sans font-bold text-feduzzi-red text-lg">€{product.price.toFixed(2)}</span>
                </div>
                <p className="font-sans text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                    {product.description}
                </p>
                <div className="pt-4 border-t border-gray-50 mt-auto">
                    <button
                        onClick={() => addToCart(product)}
                        className="w-full flex justify-center items-center gap-2 bg-white border border-gray-200 hover:border-feduzzi-red hover:bg-feduzzi-red hover:text-white text-gray-600 px-4 py-3 rounded-sm text-xs uppercase tracking-wider font-bold transition-all duration-300"
                    >
                        <Plus size={16} />
                        Toevoegen
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
