import React from "react";
import '../App.css';
import Footer from "../Footer";
import giardino from './giardino.css';

export default function Giardinaggio() {
    return (
        <>
            <div  className='giardino'>
                <img src='/images/giardino.png'></img><h1>GIARDINAGGIO</h1>
                <div className='giardino-testo'>
                    <ul>
                        <li>

                        </li>
                        <li>

                        </li>
                        <li>

                        </li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </>
    );
}