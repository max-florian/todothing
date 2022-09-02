import React from "react";
import './index.css';

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <i 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
            </i>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <li 
                className="Icon Icon-delete"
                onClick={props.onDelete}
            >
            </li>
        </li>
    )
}

export { TodoItem };  