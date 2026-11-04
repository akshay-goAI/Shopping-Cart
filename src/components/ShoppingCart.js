import React, { useState } from 'react';
import AddItem from './AddItem';
import RemoveItem from './RemoveItem';
import ViewCart from './ViewCart';

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([]);

    const handleAdd = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.itemId === item.itemId);
            if (existingItem) {
                return prevItems.map((i) => 
                    i.itemId === item.itemId ? { ...i, quantity: i.quantity + item.quantity } : i
                );
            }
            return [...prevItems, item];
        });
    };

    const handleRemove = (itemId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.itemId !== itemId));
    };

    return (
        <div>
            <AddItem onAdd={handleAdd} />
            <RemoveItem onRemove={handleRemove} />
            <ViewCart cartItems={cartItems} />
        </div>
    );
};

export default ShoppingCart;