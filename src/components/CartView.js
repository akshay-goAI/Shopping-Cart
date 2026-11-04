import React, { useState, useEffect } from 'react';
import ViewCart from './ViewCart';

const CartView = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Simulate fetching cart items from an API
        const fetchCartItems = async () => {
            const response = await fetch('/api/cart/view'); // Adjust API endpoint accordingly
            const data = await response.json();
            setCartItems(data.cart_items);
        };
        fetchCartItems();
    }, []);

    return <ViewCart cartItems={cartItems} />;
};

export default CartView;