import React from 'react';
import CartView from './components/CartView';
import './styles/App.css';

const App = () => {
    return (
        <div className="App">
            <h1>Shopping Cart</h1>
            <CartView />
        </div>
    );
};

export default App;