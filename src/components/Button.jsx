import React from 'react';

export default function Button ({ className, type, onClick, disabled, value }) {
    return (
        <button 
            className={className}
            type={type} 
            onClick={onClick}
            disabled={!disabled ? disabled : !disabled}
        >{value}
        </button>
    )
}