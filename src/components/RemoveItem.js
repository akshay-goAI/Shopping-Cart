import React, { useState } from 'react';

const RemoveItem = ({ onRemove }) => {
    const [itemId, setItemId] = useState('');

    const handleRemove = () => {
        if (itemId) {
            onRemove(itemId);
            setItemId('');
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
            <button onClick={handleRemove}>Remove from Cart</button>
        </div>
    );
};

export default RemoveItem;