import React, { useState } from 'react';

const AddItem = ({ onAdd }) => {
    const [itemId, setItemId] = useState('');
    const [quantity, setQuantity] = useState(1);

    const handleAdd = () => {
        if (itemId && quantity > 0) {
            onAdd({ itemId, quantity });
            setItemId('');
            setQuantity(1);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={itemId}
                onChange={(e) => setItemId(e.target.value)}
                placeholder="Item ID"
            />
            <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                min="1"
            />
            <button onClick={handleAdd}>Add to Cart</button>
        </div>
    );
};

export default AddItem;