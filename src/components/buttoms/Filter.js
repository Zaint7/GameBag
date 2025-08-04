import React, { useState } from 'react';
import "../../App.css";



function Filter() {
    const[isOpen, setIsOpen] = useState(false);
    const[selectedOption, setSelectedOption] = useState("Ordenar por");

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    }

    const selectOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    }

  return (
    <div className="filter-container">
    <div className="filter-dropdown" tabIndex={0} onBlur={() => setIsOpen(false)}>
      <button
        className="filter-button" onClick={toggleDropdown}
      >
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

