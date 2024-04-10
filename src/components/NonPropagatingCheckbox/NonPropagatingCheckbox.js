// src/components/NonPropagatingCheckbox.js
import React from 'react';

const NonPropagatingCheckbox = () => {
    const handleClick = (e) => {
        e.stopPropagation(); // Stop the click from propagating to parent elements
    };

    const style = {
        margin: 0, // Adjust margins as needed
        verticalAlign: 'middle', // Aligns checkbox vertically with text
    };

    return <input type="checkbox" onClick={handleClick} />;
};

export default NonPropagatingCheckbox;
