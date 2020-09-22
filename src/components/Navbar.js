import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css';


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
                        <img src="/images/logo.png"/> RIPARAZIONI ROMA
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                <i className="fas fa-home"/> PAGINA PRINCIPALE
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/servizi' className='nav-links' onClick={closeMobileMenu}>
                                <i className="fas fa-tools fa-fw"></i> SERVIZI
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/recensioni' className='nav-links' onClick={closeMobileMenu}>
                                <i className="fas fa-grin-stars fa-fw"></i> RECENSIONI
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contatti' className='nav-links' onClick={closeMobileMenu}>
                                <i className="far fa-address-book fa-fw"></i> CONTATTI
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;