import React from 'react';

const Input = ({ name, label, value, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                name="username"
                value={value}
                onChange={onChange}
                type="text"
                className="form-control"
                id={name}
                placeholder="Enter username"
            />

        </div>);
}

export default Input;