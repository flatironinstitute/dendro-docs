// src/components/InteractiveDetails.js
import React, { useState } from 'react';
import NonPropagatingCheckbox from '../NonPropagatingCheckbox/NonPropagatingCheckbox';
import Details from '@theme/Details';


const InteractiveDetails = ({ title, children }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked); // Toggles the checked state
    };

    const detailsStyle = {
        backgroundColor: isChecked ? 'rgba(79,212,90,0.3)' : 'rgba(79,179,212,0.1)', // Conditional styling based on checked state
    };

    return (
        <Details summary={(
            <summary>
                <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>{title}</div>
                    <NonPropagatingCheckbox checked={isChecked} onChange={handleChange} style={{ marginLeft: "auto" }} />
                </span>
            </summary>
        )}
            style={detailsStyle}
        >
            <>
                {children}
            </>
        </Details>
    );
};

export default InteractiveDetails;