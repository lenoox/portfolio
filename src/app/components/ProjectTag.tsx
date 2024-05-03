import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected
        ? "text-white border-amber-500"
        : "text-[#ADB7BE] border-slate-600 hover:border-white";

    return (
        <button
            onClick={() => onClick(name)}
            className={`border rounded-full mb-1 px-6 py-1 text-md md:text-xl cursor-pointer ${buttonStyles}`}
        >
            {name}
        </button>
    );
};

export default ProjectTag;