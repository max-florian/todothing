import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import './index.css';

function TodoSearch() {
    const { searchValue, setSearchValue } = useContext(TodoContext);
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div id="cover">
            <div className="tb">
                <div className="td">
                    <input 
                        type="text" 
                        className="TodoSearch" 
                        value={searchValue}
                        onChange={onSearchValueChange}
                        placeholder="Buscar" 
                    />
                </div>
                <div className="td" id="s-cover">
                    <button className="SearchButton" type="submit">
                        <div id="s-circle"></div>
                        <span></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export { TodoSearch };  