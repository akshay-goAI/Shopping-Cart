import React, { useState } from 'react';
import AddItem from './AddItem';

const Cart = () => {
    const [items, setItems] = useState([]);

    const handleAddItem = (item) => {
        setItems((prevItems) => [...prevItems, item]);
    };

    const handleRemoveItem = (itemId) => {
        setItems((prevItems) => prevItems.filter(item => item.itemId !== itemId));
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            <AddItem onAdd={handleAddItem} />
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        Item ID: {item.itemId}, Quantity: {item.quantity}
                        <button onClick={() => handleRemoveItem(item.itemId)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;