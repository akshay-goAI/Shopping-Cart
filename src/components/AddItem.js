import React, { useState } from 'react';
import axios from 'axios';

const AddItem = ({ onItemAdded }) => {
    const [itemId, setItemId] = useState('');
    const [quantity, setQuantity] = useState(1);

    const handleAddItem = async () => {
        try {
            const response = await axios.post('/cart/add', { item_id: itemId, quantity });
            if (response.data.status === 'success') {
                onItemAdded();
                alert('Item added to cart!');
            }
        } catch (error) {
            console.error('Error adding item:', error);
            alert('Failed to add item.');
        }
    };

    return (
        <div>
            <input type="text" value={itemId} onChange={(e) => setItemId(e.target.value)} placeholder="Item ID" />
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" />
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    );
};

export default AddItem;