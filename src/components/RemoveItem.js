import React, { useState } from 'react';
import axios from 'axios';

const RemoveItem = ({ onItemRemoved }) => {
    const [itemId, setItemId] = useState('');

    const handleRemoveItem = async () => {
        try {
            const response = await axios.delete(`/cart/remove`, { data: { item_id: itemId } });
            if (response.data.status === 'success') {
                onItemRemoved();
                alert('Item removed from cart!');
            }
        } catch (error) {
            console.error('Error removing item:', error);
            alert('Failed to remove item.');
        }
    };

    return (
        <div>
            <input type="text" value={itemId} onChange={(e) => setItemId(e.target.value)} placeholder="Item ID" />
            <button onClick={handleRemoveItem}>Remove Item</button>
        </div>
    );
};

export default RemoveItem;