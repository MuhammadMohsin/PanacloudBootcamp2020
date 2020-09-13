import React from 'react';

const Text = ({ value, style, className }) => (
    <p style={style} className={className}> {value}</p>
);

export default Text;