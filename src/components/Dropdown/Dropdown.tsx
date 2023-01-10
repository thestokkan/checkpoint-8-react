import './Dropdown.css';
import React from "react";

type DropdownProps = {
    label: string;
    opt1: string;
    opt2: string;
    opt3: string;
}

const Dropdown = ({label, opt1, opt2, opt3}: DropdownProps) => {
    return (
        <div className="select-div">
            <label className="select-label">{label}</label>
            <select>
                <option>{opt1}</option>
                <option>{opt2}</option>
                <option>{opt3}</option>
            </select>
        </div>
    );
}

export default Dropdown;