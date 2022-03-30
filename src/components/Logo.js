import React from 'react';

const Logo = () => {
    return (
        <div className='logo'>
            {/* Imported imgages by tag img are accessible in public */}
            <img src="logo192.png" alt="logo react" />
            <h3>Flags Project</h3>
        </div>
    );
};

export default Logo;