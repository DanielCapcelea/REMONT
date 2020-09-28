import React from "react";
import '../../App.css';
import Footer from "../Footer";
import contatti from './contatti.css';

export default function Contatti() {
    return (
        <>
            <div className='contatti-page'>
                <a href='https://wa.link/23zxbn' target='_blank'>
                    <img src='/images/whtsap.png'></img> Whatsapp:(+39)329.444.2599
                </a>
                <a href='tel:+393294442599'>
                    <img src='/images/phone2.png'></img> Telefono:(+39)329.444.2599
                </a>
                <a href="mailto: romaservizicasa@gmail.com"><img src='/images/mail.png'></img> E-mail:
                    romaservizicasa@gmail.com</a>
                <a href='https://www.google.com/maps/place/Via+Rubiera,+6,+00125+Roma+RM,+%D0%98%D1%82%D0%B0%D0%BB%D0%B8%D1%8F/@41.781162,12.3770449,17z/data=!3m1!4b1!4m5!3m4!1s0x1325f3bd4035b5d7:0x72d3ee0696ded47a!8m2!3d41.781162!4d12.3792336'
                   target="_blank">
                    <img src='/images/map.png'></img>
                    Indirizzo: Via Rubiera, 6, 00125 - Roma</a>
            </div>
            <Footer/>
        </>
    )
}