import React from 'react';

const CartView = ({ cartItems, onRemove }) => {
    return (
        <div className="cart-view">
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.item_id}>
                            {item.name} - Quantity: {item.quantity}
                            <button onClick={() => onRemove(item.item_id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartView;