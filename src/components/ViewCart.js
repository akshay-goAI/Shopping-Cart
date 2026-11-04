import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const fetchCartItems = async () => {
        try {
            const response = await axios.get('/cart/view');
            setCartItems(response.data.cart_items);
            setTotalPrice(response.data.total_price);
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };

    useEffect(() => {
        fetchCartItems();
    }, []);

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? <p>Your cart is empty.</p> : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.item_id}>{item.item_id} - Quantity: {item.quantity}</li>
                    ))}
                </ul>
            )}
            <h3>Total Price: ${totalPrice}</h3>
        </div>
    );
};

export default ViewCart;