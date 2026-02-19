import { Product } from '../data/products';

export interface CartItem extends Product {
    quantity: number;
}

export interface CustomerDetails {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    zip: string;
    isBusiness: boolean;
    companyName?: string;
    kvkNumber?: string;
}

export interface Order {
    id: string;
    date: string;
    items: CartItem[];
    total: number;
    customer: CustomerDetails;
    status: 'pending' | 'paid' | 'completed' | 'cancelled';
    paymentMethod: 'ideal' | 'creditcard' | 'invoice';
}

const STORAGE_KEY = 'feduzzi_orders';

export const OrderService = {
    getOrders: (): Order[] => {
        const orders = localStorage.getItem(STORAGE_KEY);
        return orders ? JSON.parse(orders) : [];
    },

    saveOrder: (order: Order): void => {
        const orders = OrderService.getOrders();
        orders.push(order);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
    },

    clearOrders: (): void => {
        localStorage.removeItem(STORAGE_KEY);
    },

    generateOrderId: (): string => {
        return 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    }
};
