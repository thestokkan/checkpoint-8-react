import './Dropdown.css';
import React from "react";

type DropdownProps = {
    onClick: () => void;
    text: string;
    alt1: string;
    alt2: string;
    alt3: string;
}

const Dropdown = ({onClick, text, alt1, alt2, alt3}: DropdownProps) => {
    return (
        <div className="dropdown">
            <button onClick={onClick} className="dropdown">{text}</button>
            <div className="dropdown-content">
                <a href="#">{alt1}</a>
                <a href="#">{alt2}</a>
                <a href="#">{alt3}</a>
            </div>
        </div>
    );
}

export default Dropdown;