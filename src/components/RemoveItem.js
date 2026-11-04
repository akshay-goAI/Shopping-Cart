import React from 'react';

const RemoveItem = ({ item, onRemove }) => {
    const handleRemove = () => {
        onRemove(item.id);
    };

    return (
        <div className="remove-item">
            <span>{item.name}</span>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
};

export default RemoveItem;
