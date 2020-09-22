import React from 'react';
import './Footer.css';
import {Button} from './Button';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    SI ISCRIVA E INIZI A RISPARMIARE OGGI STESSO!
                </p>
                <p className='footer-subscription-text'>
                    Posso disiscrivermi in ogni momento.
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='E-mail'
                        />
                        <Button buttonStyle='btn--outline'>ISCRIVITI</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Cliente</h2>
                        <Link to='/cookie'>COOKIE POLICY</Link>
                        <Link to='/recesso'>DIRITTO DI RECESSO</Link>
                        <Link to='/privacy'>PRIVACY POLICY</Link>
                        <Link to='/condizioni'>CONDIZIONI GENERALI</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/contatti'>Contact</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            <img src='/images/logo.png'/> Riparazioni Roma
                        </Link>
                    </div>
                    <small className='website-rights'> Tutti i diritti riservati "Riparazioni Roma" © 2020</small>
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f'/>
                        </Link>
                        <Link
                            className='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram'/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;