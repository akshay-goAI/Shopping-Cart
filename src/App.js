import React, { useState } from 'react';
import ShoppingCart from './components/ShoppingCart';
import AddItem from './components/AddItem';
import Cart from './components/Cart';
import RemoveItem from './components/RemoveItem';
import ViewCart from './components/ViewCart';
import CartView from './components/CartView';

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const handleAdd = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(i => (i.itemId ?? i.id ?? i.item_id) === (item.itemId ?? item.id ?? item.item_id));
            if (existingItem) {
                return prevItems.map(i =>
                    (i.itemId ?? i.id ?? i.item_id) === (item.itemId ?? item.id ?? item.item_id)
                        ? { ...i, quantity: (i.quantity || 1) + (item.quantity || 1) }
                        : i
                );
            }
            return [...prevItems, item];
        });
    };

    const handleRemove = (itemId) => {
        setCartItems((prevItems) =>
            prevItems.filter(item => (item.itemId ?? item.id ?? item.item_id) !== itemId)
        );
    };

    return (
        <div className="app">
            <h1>Shopping Cart</h1>
            <AddItem onAdd={handleAdd} />
            <RemoveItem onRemove={handleRemove} />
            <ViewCart cartItems={cartItems} />
            <CartView cartItems={cartItems} onRemove={handleRemove} />
            <Cart />
            <ShoppingCart items={cartItems} onRemove={handleRemove} />
        </div>
    );
};

export default App;
