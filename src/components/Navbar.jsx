import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'
import Logo from './images/Logo.png'

const Navbar = () => {

    const[ click, setClick] = useState(false);
    const[button , setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)
    

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img src={Logo} alt="Logo" className='navbar-logo' />
                </Link>
                <div className="CompanyName">
                    <h1><span className='gradient'>Taxi</span> Boat Sunrise</h1>
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/services" className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/products" className='nav-links' onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/sign-up" className='nav-links-mobile' onClick={closeMobileMenu}>
                            BOOK NOW
                        </Link>
                    </li>
                </ul>
                <div className="navbutton">
                    {button && <Button buttonSize='btn--small' buttonStyle='btn--outline'>CONTACT ME</Button>}
                </div>
                
            </div>
            
        </nav>
        <div className='border-gradient sticky'>
        </div>
    </>
  )
}

export default Navbar