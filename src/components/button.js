import React from 'react';

const Button = ({ value, style, className, onClick }) => (
    <button style={style}
        className={className}
        onClick={onClick}>
        {value}
    </button>
)

export default Button;