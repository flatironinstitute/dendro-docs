// src/components/NonPropagatingCheckbox.js
import React from 'react';

const NonPropagatingCheckbox = ({ checked, onChange }) => {
    const handleClick = (e) => {
        e.stopPropagation(); // Stop the click from propagating to parent elements
    };

    return (
        <input
            type="checkbox"
            checked={checked}
            onClick={handleClick}
            onChange={onChange}
            style={{
                margin: 0, // Adjust margins as needed
                verticalAlign: 'middle', // Aligns checkbox vertically with text
            }}
        />
    );
};

export default NonPropagatingCheckbox;
