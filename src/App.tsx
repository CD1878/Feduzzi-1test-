import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

import Menu from './pages/Menu';
import Sfeer from './pages/Sfeer';
import OverOns from './pages/OverOns';
import WerkenBij from './pages/WerkenBij';
import Vestigingen from './pages/Vestigingen';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import AdminDashboard from './pages/AdminDashboard';

import Catering from './pages/Catering';

import ScrollToTop from './components/ScrollToTop';

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <CartProvider>
                <LanguageProvider>
                    <div className="min-h-screen bg-white">
                        <Routes>
                            {/* Admin Route - Separate Layout */}
                            <Route path="/admin" element={<AdminDashboard />} />

                            {/* Public Routes - Main Layout */}
                            <Route path="*" element={
                                <>
                                    <Header />
                                    <main>
                                        <Routes>
                                            <Route path="/" element={<Home />} />
                                            <Route path="/menu" element={<Menu />} />
                                            <Route path="/sfeer" element={<Sfeer />} />
                                            <Route path="/over-ons" element={<OverOns />} />
                                            <Route path="/werken-bij" element={<WerkenBij />} />
                                            <Route path="/vestigingen" element={<Vestigingen />} />
                                            <Route path="/catering" element={<Catering />} />
                                            <Route path="/checkout" element={<Checkout />} />
                                            <Route path="/bevestiging" element={<OrderSuccess />} />
                                        </Routes>
                                    </main>
                                    <Footer />
                                </>
                            } />
                        </Routes>
                    </div>
                </LanguageProvider>
            </CartProvider>
        </Router>
    );
};

export default App;
