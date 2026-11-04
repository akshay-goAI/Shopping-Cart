import React, { useState } from 'react';
import ShoppingCart from './components/ShoppingCart';
import AddItem from './components/AddItem';
import Cart from './components/Cart';

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const handleAdd = (item) => {
        setCartItems((prev) => [...prev, item]);
    };

    const handleRemoveItem = (id) => {
        setCartItems(cartItems.filter(item => (item.id ?? item.itemId) !== id));
    };

    return (
        <div className='app'>
            <AddItem onAdd={handleAdd} />
            <Cart />
            <ShoppingCart items={cartItems} onRemove={handleRemoveItem} />
        </div>
    );
};

export default App;
