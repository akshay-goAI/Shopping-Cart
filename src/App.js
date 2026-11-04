import React from 'react';
import AddItem from './components/AddItem';
import RemoveItem from './components/RemoveItem';
import ViewCart from './components/ViewCart';

const App = () => {
    return (
        <div>
            <h1>Shopping Cart</h1>
            <AddItem onItemAdded={() => console.log('Item added')} />
            <RemoveItem onItemRemoved={() => console.log('Item removed')} />
            <ViewCart />
        </div>
    );
};

export default App;