import React from 'react';
import ShoppingCart from './components/ShoppingCart';
import './styles/App.css';

const App = () => {
    return (
        <div className="App">
            <h1>Shopping Cart</h1>
            <ShoppingCart />
        </div>
    );
};

export default App;