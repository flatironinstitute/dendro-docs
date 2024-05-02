// src/components/InteractiveDetails.js
import React, { useState } from 'react';
import NonPropagatingCheckbox from '../NonPropagatingCheckbox/NonPropagatingCheckbox';

const InteractiveDetails = ({ title, children }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked); // Toggles the checked state
    };

    const detailsStyle = {
        backgroundColor: isChecked ? 'rgba(79,212,90,0.3)' : 'rgba(79,179,212,0.1)', // Conditional styling based on checked state
    };

    return (
        // <details style={detailsStyle}>
        <details
            className='details_node_modules-@docusaurus-theme-common-lib-components-Details-styles-module isBrowser_node_modules-@docusaurus-theme-common-lib-components-Details-styles-module alert alert--info details_node_modules-@docusaurus-theme-classic-lib-theme-Details-styles-module'
            style={detailsStyle}
        >
            <summary>
                <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>{title}</div>
                    <NonPropagatingCheckbox checked={isChecked} onChange={handleChange} style={{ marginLeft: "auto" }} />
                </span>
            </summary>
            <div
                className='collapsibleContent_node_modules-@docusaurus-theme-common-lib-components-Details-styles-module'
            >
                {children}
            </div>
        </details>
    );
};

export default InteractiveDetails;
