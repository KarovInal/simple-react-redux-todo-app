import React from 'react';


export default function Checkbox ({ type, className, checked, onChange }) {
    return (
        <input 
            type={type} 
            className={className} 
            checked={checked}
            onChange={onChange}
        />
    );
}