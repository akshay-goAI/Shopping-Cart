import React, { useState } from 'react';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const handleRemoveItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <div className='app'>
            <ShoppingCart items={cartItems} onRemove={handleRemoveItem} />
        </div>
    );
};

export default App;
