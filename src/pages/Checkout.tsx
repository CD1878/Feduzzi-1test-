import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { OrderService, CustomerDetails, Order } from '../services/OrderService';

const Checkout = () => {
    const { items, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();

    const [formData, setFormData] = useState<CustomerDetails>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zip: '',
        isBusiness: false,
        companyName: '',
        kvkNumber: ''
    });

    const [paymentMethod, setPaymentMethod] = useState<'ideal' | 'creditcard' | 'invoice'>('ideal');
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate verify/processing delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        const newOrder: Order = {
            id: OrderService.generateOrderId(),
            date: new Date().toISOString(),
            items: items,
            total: cartTotal,
            customer: formData,
            status: 'pending',
            paymentMethod: paymentMethod
        };

        OrderService.saveOrder(newOrder);
        clearCart();
        setLoading(false);
        navigate('/bevestiging', { state: { order: newOrder } });
    };

    if (items.length === 0) {
        return (
            <div className="pt-32 pb-20 px-4 text-center">
                <h2 className="text-2xl font-serif mb-4">Je winkelmandje is leeg</h2>
                <button onClick={() => navigate('/menu')} className="text-feduzzi-red underline">
                    Terug naar menu
                </button>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-20 px-4 md:px-8 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Checkout Form */}
                <div>
                    <h1 className="font-serif text-3xl text-feduzzi-dark mb-8">Afrekenen</h1>
                    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-sm shadow-sm">

                        {/* Customer Type */}
                        <div className="mb-6">
                            <label className="flex items-center space-x-2 cursor-pointer mb-2">
                                <input
                                    type="checkbox"
                                    name="isBusiness"
                                    checked={formData.isBusiness}
                                    onChange={handleInputChange}
                                    className="rounded text-feduzzi-red focus:ring-feduzzi-red"
                                />
                                <span className="font-sans font-bold text-sm">Zakelijk bestellen</span>
                            </label>
                        </div>

                        {/* Personal Details */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Voornaam</label>
                                <input required type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full border border-gray-300 p-2 rounded-sm focus:border-feduzzi-red focus:outline-none" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Achternaam</label>
                                <input required type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full border border-gray-300 p-2 rounded-sm focus:border-feduzzi-red focus:outline-none" />
                            </div>
                        </div>

                        {formData.isBusiness && (
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Bedrijfsnaam</label>
                                    <input required type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} className="w-full border border-gray-300 p-2 rounded-sm focus:border-feduzzi-red focus:outline-none" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1">KvK Nummer</label>
                                    <input required type="text" name="kvkNumber" value={formData.kvkNumber} onChange={handleInputChange} className="w-full border border-gray-300 p-2 rounded-sm focus:border-feduzzi-red focus:outline-none" />
                                </div>
                            </div>
                        )}

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Email</label>
                                <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full border border-gray-300 p-2 rounded-sm focus:border-feduzzi-red focus:outline-none" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Telefoonnummer</label>
                                <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full border border-gray-300 p-2 rounded-sm focus:border-feduzzi-red focus:outline-none" />
                            </div>
                        </div>

                        {/* Address */}
                        <div className="mb-4">
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Straat en huisnummer</label>
                            <input required type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full border border-gray-300 p-2 rounded-sm focus:border-feduzzi-red focus:outline-none" />
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-8">
                            <div className="col-span-1">
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Postcode</label>
                                <input required type="text" name="zip" value={formData.zip} onChange={handleInputChange} className="w-full border border-gray-300 p-2 rounded-sm focus:border-feduzzi-red focus:outline-none" />
                            </div>
                            <div className="col-span-2">
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Stad</label>
                                <input required type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full border border-gray-300 p-2 rounded-sm focus:border-feduzzi-red focus:outline-none" />
                            </div>
                        </div>

                        {/* Payment Method */}
                        <h3 className="font-serif text-xl border-b pb-2 mb-4">Betaalmethode</h3>
                        <div className="space-y-3 mb-8">
                            <label className="flex items-center space-x-3 cursor-pointer p-3 border rounded-sm hover:bg-gray-50">
                                <input type="radio" name="payment" value="ideal" checked={paymentMethod === 'ideal'} onChange={() => setPaymentMethod('ideal')} className="text-feduzzi-red focus:ring-feduzzi-red" />
                                <span className="font-bold">iDEAL</span>
                            </label>
                            <label className="flex items-center space-x-3 cursor-pointer p-3 border rounded-sm hover:bg-gray-50">
                                <input type="radio" name="payment" value="creditcard" checked={paymentMethod === 'creditcard'} onChange={() => setPaymentMethod('creditcard')} className="text-feduzzi-red focus:ring-feduzzi-red" />
                                <span className="font-bold">Creditcard</span>
                            </label>
                            <label className="flex items-center space-x-3 cursor-pointer p-3 border rounded-sm hover:bg-gray-50">
                                <input type="radio" name="payment" value="invoice" checked={paymentMethod === 'invoice'} onChange={() => setPaymentMethod('invoice')} className="text-feduzzi-red focus:ring-feduzzi-red" />
                                <span className="font-bold">Factuur (Zakelijk)</span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-feduzzi-red text-white py-4 uppercase font-bold tracking-widest hover:bg-feduzzi-red-hover transition-colors disabled:opacity-50"
                        >
                            {loading ? 'Bezig met verwerken...' : `Bestellen (€${cartTotal.toFixed(2)})`}
                        </button>
                    </form>
                </div>

                {/* Order Summary */}
                <div>
                    <h2 className="font-serif text-2xl text-feduzzi-dark mb-8">Overzicht Bestelling</h2>
                    <div className="bg-white p-8 rounded-sm shadow-sm sticky top-32">
                        <ul className="space-y-4 mb-6">
                            {items.map((item) => (
                                <li key={item.id} className="flex justify-between items-start border-b border-gray-100 pb-4">
                                    <div>
                                        <h4 className="font-serif text-lg">{item.name}</h4>
                                        <p className="text-gray-500 text-sm">Aantal: {item.quantity}</p>
                                    </div>
                                    <span className="font-bold">€{(item.price * item.quantity).toFixed(2)}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-between items-center text-xl font-serif font-bold pt-4 border-t border-gray-200">
                            <span>Totaal</span>
                            <span>€{cartTotal.toFixed(2)}</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-4 text-center">
                            Incl. BTW
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Checkout;
