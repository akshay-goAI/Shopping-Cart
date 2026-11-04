import React from 'react';
import RemoveItem from './RemoveItem';

const ShoppingCart = ({ items, onRemove }) => {
    return (
        <div className="shopping-cart">
            <h2>Your Shopping Cart</h2>
            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                items.map(item => (
                    <RemoveItem key={item.id} item={item} onRemove={onRemove} />
                ))
            )}
        </div>
    );
};

export default ShoppingCart;