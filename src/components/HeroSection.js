import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>

            {/*<video src='/videos/video-2.mp4' autoPlay loop muted />*/}

            <h1>ESPERTI E LAVORI DI ALTA QUALITÀ</h1>
            <p>Garanzia sul lavoro effettuato</p>
            <p></p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    <i className="fas fa-phone-volume fa-fw"/> CHIAMA ORA
                </Button>
            </div>
            <button

                className="open-button" onClick="openForm()"
            >
                RICHIEDI PREVENTIVO <i className="fas fa-euro-sign"/>
            </button>
        </div>
    );
}

export default HeroSection;