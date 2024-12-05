import React from 'react';

const InlineStyledComponent = () => {
    const styles = {
        color: 'blue',
        fontSize: '20px',
        textAlign: 'center',
    };

    return <p style={styles}>This is styled with inline styles!</p>;
};

export default InlineStyledComponent;
