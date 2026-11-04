import React from 'react';

const ViewCart = ({ items }) => {
    return (
        <div className="view-cart">
            <h2>Your Cart Items</h2>
            {items.length === 0 ? (
                <p>No items in the cart.</p>
            ) : (
                <ul>
                    {items.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ViewCart;
