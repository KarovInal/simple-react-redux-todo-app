import React from 'react';


export default function Checkbox ({ type, className, checked, onChange, disabled }) {
    return (
        <input 
            type={type} 
            className={className} 
            checked={checked}
            onChange={onChange}
            disabled={disabled}
        />
    );
}