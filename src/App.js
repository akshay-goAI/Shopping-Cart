import React, { useState } from 'react';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const handleRemoveItem = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    return (
        <div className="app">
            <h1>Shopping Cart</h1>
            <ShoppingCart items={cartItems} onRemove={handleRemoveItem} />
        </div>
    );
};

export default App;