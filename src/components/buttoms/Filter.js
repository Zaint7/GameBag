import React, { useState } from 'react';
import { BsGrid3X3Gap, BsList } from 'react-icons/bs';
import "../../App.css";


function Filter({ viewMode, onViewModeChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Ordenar por");
    /*const [viewMode, setViewMode] = useState("grid");*/

    const toggleDropdown = () => setIsOpen(prev => !prev);

    const selectOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    }

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
                        <li onClick={() => selectOption('Precio Alto')}>Precio Alto</li>
                        <li onClick={() => selectOption('Precio Bajo')}>Precio Bajo</li>
                        <li onClick={() => selectOption('Nombre')}>Nombre A-Z</li>
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Filter;