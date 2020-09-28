import React from "react";
import '../App.css';
import Footer from "../Footer";
import serramenti from './serramenti.css';

export default function Serramenti() {
    return (
        <>
            <div className="serramenti">
                <img src='/images/serramenti.png'></img> <h1>SERRAMENTI</h1>
                <div className="serramenti-testo">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

            </div>
            <Footer/>
        </>
    );
}