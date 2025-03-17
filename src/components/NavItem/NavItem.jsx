import React from 'react'

const NavItem = ({ icon, text }) => {
    return (
        <div className='navItem'>
            <div className="navItem__icon">
               <img src= {icon} alt='logo illustrant la barre de navigation' />
            </div>
            <p className="navItem__text">
                {text}
            </p>
        </div>
    )
}

export default NavItem