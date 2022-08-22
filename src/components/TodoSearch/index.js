import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import './index.css';

function TodoSearch() {
    const { searchValue, setSearchValue } = useContext(TodoContext);
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