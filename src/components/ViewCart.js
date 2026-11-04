import React from 'react';

const ViewCart = ({ cartItems, onRemoveItem }) => {
    return (
        <div className="view-cart">
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.item_id}>
                            {item.name} - Quantity: {item.quantity}
                            <button onClick={() => onRemoveItem(item.item_id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ViewCart;