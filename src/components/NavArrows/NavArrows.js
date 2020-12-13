import React from 'react'
import './navArrows.css'

const NavArrows = ({ page, totalPages, handleClick }) => {
    return (
        <div className='arrows-container'>
            <a href="#" onClick={handleClick} className={`${page > 1 ? 'available' : 'non-available'} nav-button prev`}>Previous page</a>
            <a href="#" onClick={handleClick} className={`${page < totalPages ? 'available' : 'non-available'} nav-button next`}>Next page</a>
        </div>
    );
};

export default NavArrows;