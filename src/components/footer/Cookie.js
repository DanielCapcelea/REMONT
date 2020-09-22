import React from "react";
import Footer from "../Footer";

export default function Cookie() {
    return (
        <>

            <article className='cookie'>
                <div>
                    <h1> USO DEI COOKIE</h1><br/>
                    <strong>
                        <h3>
                            Il sito utilizza i Cookie per rendere i propri servizi semplici e efficienti per l’utenza
                            che
                            visiona le pagine dei nostri siti (detti congiuntamente “Sito”).

                            Gli utenti che visionano il Sito, vedranno inserite delle quantità minime di informazioni
                            nei
                            dispositivi in uso, che siano computer e periferiche mobili, in piccoli file di testo
                            denominati
                            “cookie” salvati nelle directory utilizzate dal browser web dell’Utente.

                            Vi sono vari tipi di cookie, alcuni per rendere più efficace l’uso del Sito, altri per
                            abilitare
                            determinate funzionalità.
                            <br/><br/>
                            Analizzandoli in maniera particolareggiata i nostri cookie permettono di:
                        </h3>
                    </strong>
                    <ul>
                        <li>
                            memorizzare le preferenze inserite
                        </li>
                        <li>
                            evitare di reinserire le stesse informazioni più volte durante la visita quali ad esempio
                        </li>
                        <li>
                            nome utente e password
                        </li>
                        <li>
                            analizzare l’utilizzo dei servizi e dei contenuti forniti dal nostro sito per ottimizzarne
                            l’esperienza di navigazione e i servizi offerti
                        </li>
                        <li>
                            effettuare una profilazione del comportamento online dell’utente così da proporre promozioni
                            e
                            servizi mirati alle preferenze manifestate.
                        </li>
                    </ul>
                </div>
            </article>
            <Footer/>
        </>
    )
}