import React from "react";

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active
        ? "text-white border-amber-500 border-b-2"
        : "text-gray-400";

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
                {children}
            </p>
        </button>
    );
};

export default TabButton;