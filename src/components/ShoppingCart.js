import React, { useState } from 'react';
import ViewCart from './ViewCart';

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([]);

    const handleRemoveItem = (itemId) => {
        setCartItems(cartItems.filter(item => item.item_id !== itemId));
    };

    return (
        <div className="shopping-cart">
            <ViewCart cartItems={cartItems} onRemoveItem={handleRemoveItem} />
        </div>
    );
};

export default ShoppingCart;