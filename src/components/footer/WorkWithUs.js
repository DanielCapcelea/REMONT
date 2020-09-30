import React from "react";
import Footer from "../Footer";
import './workWithUs.css';

export default function WorkWithUs() {
    return (
        <>
            <article className='lavoro'>
                <div>
                    <h1>Vuoi entrare a far parte del team RomaServiziCasa?</h1><br/>
                    <form action="/" className='form-container-work'>
                        <fieldset>
                            <legend>Compila il form per candidarti:</legend>
                            <br/>
                            <label> Nome: </label>
                            <input type="text" id="fname" name="fname"/>
                            <label> Cognome: </label>
                            <input type="text" id="lname" name="lname"/><br/>
                            <label> Email: </label>
                            <input className="form-email" type="email" id="email" name="email"/>
                            <label> Anno di nascita: </label>
                            <input type="number"/><br/><br/>
                            <label> Il Suo mestiere: </label><br/>
                            <textarea className="form-container-text" rows="3" cols="25"/><br/><br/>
                            <legend>Carica ed invia il tuo Curriculum</legend>
                            <br/>
                            <input type="file" className='btn-work-file'/><br/><br/><br/>
                            <input type="submit" className='btn-work' value="Inviare"/>
                        </fieldset>
                    </form>
                </div>
            </article>
            <Footer/>
        </>
    )
}