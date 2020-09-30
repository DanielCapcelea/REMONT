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
                        <Link to='/cookie'>Cookie policy</Link>
                        <Link to='/recesso'>Diritto di recesso</Link>
                        <Link to='/privacy'>Privacy policy</Link>
                        <Link to='/condizioni'>Condizioni generali</Link>
                        <Link to='/lavoro'>LAVORA CON NOI</Link>
                    </div>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-items'>
                            <h2>Social Media</h2>
                            <Link to='/' target='_blank'>Instagram</Link>
                            <Link to='/' target='_blank'>Facebook</Link>
                        </div>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contatti</h2>
                        <address>
                            <a href='tel:+393294442599'><i
                                className="fas fa-phone-volume"/>Telefono:(+39)329.444.2599</a><br/><br/>
                            <a href='https://www.google.com/maps/place/Via+Rubiera,+6,+00125+Roma+RM,+%D0%98%D1%82%D0%B0%D0%BB%D0%B8%D1%8F/@41.781162,12.3770449,17z/data=!3m1!4b1!4m5!3m4!1s0x1325f3bd4035b5d7:0x72d3ee0696ded47a!8m2!3d41.781162!4d12.3792336'
                               target="_blank"><i className="fas fa-map-marked-alt"/>Indirizzo:<br/>Via Rubiera,
                                6,<br/> 00125 - Roma</a><br/><br/>
                        </address>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            <img src='/images/logo.png'/> <strong>RomaServiziCasa</strong>
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
                            <img src='/images/facebook2.png'/>
                        </Link>
                        <Link
                            className='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <img src='/images/instagram.png'/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;