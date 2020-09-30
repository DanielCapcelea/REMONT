import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css';
import {Button} from "./Button";


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);


    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img src="/images/logo.png"/><strong>RomaServiziCasa</strong>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                <i className="fas fa-home fa-fw"/> PAGINA PRINCIPALE
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/servizi' className='nav-links' onClick={closeMobileMenu}>
                                <i className="fas fa-tools fa-fw"/> SERVIZI
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contatti' className='nav-links' onClick={closeMobileMenu}>
                                <i className="far fa-address-book fa-fw"/> CONTATTI
                            </Link>
                        </li>
                    </ul>
                    {button &&
                    <Button buttonStyle='btn--outline'><i className="fas fa-phone-volume fa-fw"/>Chiama Ora</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;