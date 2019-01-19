import React from 'react';

const Input = ({ name, label, value, onChange,placeholder,errors }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                name={name}
                value={value}
                onChange={onChange}
                type="text"
                className="form-control"
                id={name}
                placeholder={placeholder}
                errors={errors}
            />
           {errors && <div className="alert alert-danger">{errors}</div>
}
        </div>);
}

export default Input;