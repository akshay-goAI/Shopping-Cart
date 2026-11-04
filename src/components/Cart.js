import React from 'react';
import ShoppingCart from './ShoppingCart';
import ViewCart from './ViewCart';

const Cart = ({ items, onRemove }) => {
    return (
        <div className="cart">
            <ShoppingCart items={items} onRemove={onRemove} />
            <ViewCart items={items} />
        </div>
    );
};

export default Cart;
