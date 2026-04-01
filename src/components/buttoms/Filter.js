import React, { useState } from 'react';
import { BsGrid3X3Gap, BsList } from 'react-icons/bs';
import "../../App.css";

function Filter({ viewMode, onViewModeChange, onSortChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Ordenar por");

    const toggleDropdown = () => setIsOpen(prev => !prev);

    const selectOption = (label, value) => {
        setSelectedOption(label);
        setIsOpen(false);
        if (onSortChange) onSortChange(value);
    };

    return (
        <div className="filter-container">

            {/* Toggle vista */}
            <div className="view-toggle">
                <button
                    className={`toggle-btn ${viewMode === "grid" ? "active" : ""}`}
                    onClick={() => onViewModeChange("grid")}
                >
                    <BsGrid3X3Gap />
                </button>
                <button
                    className={`toggle-btn ${viewMode === "list" ? "active" : ""}`}
                    onClick={() => onViewModeChange("list")}
                >
                    <BsList />
                </button>
            </div>

            {/* Dropdown ordenar */}
            <div className="filter-dropdown" tabIndex={0} onBlur={() => setIsOpen(false)}>
                <button className="filter-button" onClick={toggleDropdown}>
                    {selectedOption} <span className="arrow">&#9662;</span>
                </button>
                {isOpen && (
                    <ul className="filter-menu">
                        <li onMouseDown={() => selectOption('Precio Alto', 'price-desc')}>Precio Alto</li>
                        <li onMouseDown={() => selectOption('Precio Bajo', 'price-asc')}>Precio Bajo</li>
                        <li onMouseDown={() => selectOption('Nombre A-Z', 'name-asc')}>Nombre A-Z</li>
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Filter;
