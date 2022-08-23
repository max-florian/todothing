import React from "react";
import './index.css';

function CreateTodoButton(props) {

    const onClickButton = () => {
        // Devolver la negación del estado anterior de setOpenModal
        props.setOpenModal(prevState => !prevState);
    };

    return (
        <button 
            className="CreateTodoButton"
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export { CreateTodoButton };