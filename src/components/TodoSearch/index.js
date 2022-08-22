import React from "react";
import './index.css';

function TodoSearch({ searchValue, setSearchValue }) {

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <input 
            className="TodoSearch"
            placeholder='Ejemplo'
            value={searchValue}
            onChange={onSearchValueChange}
        />
    )
}

export { TodoSearch };  