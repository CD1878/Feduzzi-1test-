import { useState, useEffect } from 'react';
import { OrderService, Order } from '../services/OrderService';
import { Package, Users, LogOut, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [activeTab, setActiveTab] = useState<'orders' | 'customers'>('orders');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Load orders every time the dashboard is opened or refreshed
        if (isAuthenticated) {
            const loadedOrders = OrderService.getOrders();
            // Sort by date newest first
            loadedOrders.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
            setOrders(loadedOrders);
        }
    }, [isAuthenticated]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'admin123') { // Simple mock authentication
            setIsAuthenticated(true);
        } else {
            alert('Ongeldig wachtwoord');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setPassword('');
    };

    const toggleOrderExpand = (orderId: string) => {
        setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
    };

    // Calculate unique customers
    const customers = Array.from(new Set(orders.map(o => o.customer.email)))
        .map(email => {
            return orders.find(o => o.customer.email === email)?.customer;
        }).filter(Boolean);

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
                    <h1 className="text-2xl font-serif text-center mb-6 text-feduzzi-dark">Admin Login</h1>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">Wachtwoord</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full border p-2 rounded"
                                placeholder="Voer wachtwoord in (admin123)"
                            />
                        </div>
                        <button type="submit" className="w-full bg-feduzzi-red text-white py-2 rounded font-bold hover:bg-feduzzi-red-hover">
                            Inloggen
                        </button>
                        <button onClick={() => navigate('/')} type="button" className="w-full mt-4 text-gray-500 text-sm hover:underline text-center block">
                            Terug naar website
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-feduzzi-dark text-white hidden md:flex flex-col">
                <div className="p-6 text-2xl font-serif border-b border-gray-700">
                    Feduzzi Admin
                </div>
                <nav className="flex-1 p-4">
                    <button
                        onClick={() => setActiveTab('orders')}
                        className={`w-full flex items-center space-x-3 p-3 rounded mb-2 transition-colors ${activeTab === 'orders' ? 'bg-feduzzi-red' : 'hover:bg-gray-700'}`}
                    >
                        <Package size={20} />
                        <span>Bestellingen</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('customers')}
                        className={`w-full flex items-center space-x-3 p-3 rounded mb-2 transition-colors ${activeTab === 'customers' ? 'bg-feduzzi-red' : 'hover:bg-gray-700'}`}
                    >
                        <Users size={20} />
                        <span>Klanten</span>
                    </button>
                </nav>
                <div className="p-4 border-t border-gray-700">
                    <button onClick={handleLogout} className="flex items-center space-x-2 text-gray-400 hover:text-white">
                        <LogOut size={18} />
                        <span>Uitloggen</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-serif text-gray-800">
                        {activeTab === 'orders' ? 'Bestellingen Overzicht' : 'Klanten Overzicht'}
                    </h1>
                    <button onClick={handleLogout} className="md:hidden text-feduzzi-red font-bold">Uitloggen</button>
                </div>

                {/* Orders Tab */}
                {activeTab === 'orders' && (
                    <div className="bg-white rounded shadow text-sm">
                        <div className="grid grid-cols-6 gap-4 p-4 border-b font-bold text-gray-500 bg-gray-50">
                            <div className="col-span-1">Bestel #</div>
                            <div className="col-span-1">Datum</div>
                            <div className="col-span-1">Klant</div>
                            <div className="col-span-1">Bedrag</div>
                            <div className="col-span-1">Status</div>
                            <div className="col-span-1"></div>
                        </div>
                        {orders.length === 0 ? (
                            <div className="p-8 text-center text-gray-500">Nog geen bestellingen.</div>
                        ) : (
                            orders.map(order => (
                                <div key={order.id} className="border-b last:border-0 hover:bg-gray-50 transition-colors">
                                    <div className="grid grid-cols-6 gap-4 p-4 items-center">
                                        <div className="font-mono text-xs">{order.id}</div>
                                        <div>{new Date(order.date).toLocaleDateString()}</div>
                                        <div>{order.customer.firstName} {order.customer.lastName}</div>
                                        <div className="font-bold">€{order.total.toFixed(2)}</div>
                                        <div>
                                            <span className={`px-2 py-1 rounded text-xs font-bold ${order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                    order.status === 'paid' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                                }`}>
                                                {order.status.toUpperCase()}
                                            </span>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => toggleOrderExpand(order.id)}
                                                className="text-gray-400 hover:text-black flex items-center gap-1"
                                            >
                                                {expandedOrderId === order.id ? 'Sluiten' : 'Details'}
                                                {expandedOrderId === order.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Expanded Details */}
                                    {expandedOrderId === order.id && (
                                        <div className="bg-gray-50 p-6 grid grid-cols-2 gap-8 text-sm border-t border-gray-100">
                                            <div>
                                                <h4 className="font-bold mb-2">Klantgegevens</h4>
                                                <p>{order.customer.firstName} {order.customer.lastName}</p>
                                                <p>{order.customer.email}</p>
                                                <p>{order.customer.phone}</p>
                                                <p>{order.customer.address}, {order.customer.zip} {order.customer.city}</p>
                                                {order.customer.isBusiness && (
                                                    <p className="mt-2 text-gray-500">Zakelijk: {order.customer.companyName} (KvK: {order.customer.kvkNumber})</p>
                                                )}
                                            </div>
                                            <div>
                                                <h4 className="font-bold mb-2">Artikelen</h4>
                                                <ul className="space-y-1">
                                                    {order.items.map((item, idx) => (
                                                        <li key={idx} className="flex justify-between">
                                                            <span>{item.quantity}x {item.name}</span>
                                                            <span>€{(item.price * item.quantity).toFixed(2)}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className="mt-4 pt-2 border-t flex justify-between font-bold">
                                                    <span>Totaal</span>
                                                    <span>€{order.total.toFixed(2)}</span>
                                                </div>
                                                <div className="mt-2 text-xs text-gray-500">Betaald met: {order.paymentMethod}</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                )}

                {/* Customers Tab */}
                {activeTab === 'customers' && (
                    <div className="bg-white rounded shadow overflow-hidden">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-gray-50 border-b">
                                <tr>
                                    <th className="p-4 font-bold text-gray-500">Naam</th>
                                    <th className="p-4 font-bold text-gray-500">Email</th>
                                    <th className="p-4 font-bold text-gray-500">Telefoon</th>
                                    <th className="p-4 font-bold text-gray-500">Plaats</th>
                                    <th className="p-4 font-bold text-gray-500">Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers.length === 0 ? (
                                    <tr><td colSpan={5} className="p-8 text-center text-gray-500">Nog geen klanten.</td></tr>
                                ) : (
                                    customers.map((customer, idx) => (
                                        <tr key={idx} className="border-b last:border-0 hover:bg-gray-50">
                                            <td className="p-4">{customer?.firstName} {customer?.lastName}</td>
                                            <td className="p-4">{customer?.email}</td>
                                            <td className="p-4">{customer?.phone}</td>
                                            <td className="p-4">{customer?.city}</td>
                                            <td className="p-4">
                                                {customer?.isBusiness ? (
                                                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Zakelijk</span>
                                                ) : (
                                                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">Particulier</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </main>
        </div>
    );
};

export default AdminDashboard;
