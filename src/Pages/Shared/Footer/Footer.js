import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer>
            <p className='text-center my-4'><small>Copyright @ {year}  </small></p>
        </footer>
    );
};

export default Footer;