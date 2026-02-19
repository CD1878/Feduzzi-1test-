import { useLocation, Link } from 'react-router-dom';
import { CheckCircle, Download } from 'lucide-react';
import { Order } from '../services/OrderService';
import { useEffect } from 'react';

const OrderSuccess = () => {
    const location = useLocation();
    const order = location.state?.order as Order;

    // If accessed directly without order, redirect or show error (simplified here)
    if (!order) {
        return (
            <div className="pt-32 pb-20 px-4 text-center">
                <p>Geen bestelling gevonden.</p>
                <Link to="/" className="text-feduzzi-red underline">Terug naar home</Link>
            </div>
        );
    }

    const handleDownloadInvoice = () => {
        // Determine content for invoice (mock)
        const invoiceContent = `
      FACTUUR
      ---------------------------
      Bestelnummer: ${order.id}
      Datum: ${new Date(order.date).toLocaleDateString()}
      
      Klant:
      ${order.customer.firstName} ${order.customer.lastName}
      ${order.customer.companyName ? order.customer.companyName + '\n' : ''}
      ${order.customer.address}
      ${order.customer.zip} ${order.customer.city}
      
      Artikelen:
      ---------------------------
      ${order.items.map(item => `${item.quantity}x ${item.name} - €${(item.price * item.quantity).toFixed(2)}`).join('\n')}
      ---------------------------
      TOTAAL: €${order.total.toFixed(2)}
      
      Betaalmethode: ${order.paymentMethod}
    `;

        const blob = new Blob([invoiceContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `factuur_${order.id}.txt`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="pt-32 pb-20 px-4 md:px-8 bg-white min-h-screen flex flex-col items-center text-center">
            <div className="mb-6 text-green-500">
                <CheckCircle size={80} />
            </div>

            <h1 className="font-serif text-4xl text-feduzzi-dark mb-4">Bedankt voor je bestelling!</h1>
            <p className="font-sans text-gray-600 mb-8 max-w-md">
                We hebben je bestelling <strong>{order.id}</strong> goed ontvangen.
                Je ontvangt binnen enkele minuten een bevestiging per e-mail op <strong>{order.customer.email}</strong>.
            </p>

            <div className="bg-gray-50 p-8 rounded-sm w-full max-w-lg mb-8 text-left">
                <h3 className="font-bold uppercase text-xs text-gray-500 mb-4">Besteloverzicht</h3>
                <ul className="space-y-2 mb-6 border-b border-gray-200 pb-6">
                    {order.items.map(item => (
                        <li key={item.id} className="flex justify-between text-sm">
                            <span>{item.quantity}x {item.name}</span>
                            <span>€{(item.price * item.quantity).toFixed(2)}</span>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-between font-bold text-lg">
                    <span>Totaal</span>
                    <span>€{order.total.toFixed(2)}</span>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <button
                    onClick={handleDownloadInvoice}
                    className="flex items-center justify-center gap-2 border border-gray-300 px-8 py-3 uppercase text-xs font-bold tracking-widest hover:border-black hover:text-black transition-colors"
                >
                    <Download size={18} />
                    Download Factuur
                </button>

                <Link
                    to="/"
                    className="bg-feduzzi-red text-white px-8 py-3 uppercase text-xs font-bold tracking-widest hover:bg-feduzzi-red-hover transition-colors flex items-center justify-center"
                >
                    Terug naar Home
                </Link>
            </div>
        </div>
    );
};

export default OrderSuccess;
