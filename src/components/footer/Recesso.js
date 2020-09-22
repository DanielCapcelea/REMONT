import React from "react";
import Footer from "../Footer";

export default function Recesso() {
    return (
        <>

            <strong>
                <article className='recesso'>
                    <div>
                        <h1> Diritto di recesso del consumatore</h1><br/>
                        <h2>Istruzioni tipo sul recesso ai sensi dell’art.49, comma 4 D.Lgs. 206/2005</h2><br/>
                        <h3>Diritto di recesso da servizi</h3>
                        <ul>
                            <li>
                                Lei ha il diritto di recedere dal contratto, senza indicarne le ragioni, entro 14
                                giorni. Il periodo di recesso scade dopo 14 giorni dal giorno di conclusione del
                                contratto. Per esercitare il diritto di recesso, Lei è tenuto a informarci (presso la
                                sede di "RIPARAZIONI ROMA", tel. +39-xxx.xxx.xxx, email riparazioniroma@gmail.com) della
                                sua decisione di recedere dal presente contratto tramite una dichiarazione esplicita (ad
                                esempio lettera inviata per posta, fax o posta elettronica). A tal fine può utilizzare
                                il modulo tipo di recesso qui allegato, ma non è obbligatorio: può anche compilare e
                                inviare elettronicamente il modulo tipo di recesso o qualsiasi altra esplicita
                                dichiarazione sul nostro sito web http://www.riparazioniroma.it // Nel caso scegliesse
                                detta opzione, Le trasmetteremo senza indugio una conferma di ricevimento del recesso su
                                un supporto durevole (ad esempio per posta elettronica). Per rispettare il termine di
                                recesso, è sufficiente che Lei invii la comunicazione relativa all’esercizio del diritto
                                di recesso prima della scadenza del periodo di recesso.
                            </li>
                        </ul>
                        <br/>
                        <h3>Effetti del recesso</h3>
                        <ul>
                            <li>
                                Se Lei recede dal presente contratto, Le saranno rimborsati tutti i pagamenti che ha
                                effettuato a nostro favore, senza indebito ritardo e in ogni caso non oltre 14 giorni
                                dal giorno in cui siamo informati della Sua decisione di recedere dal presente
                                contratto. Detti rimborsi saranno effettuati utilizzando lo stesso mezzo di pagamento da
                                Lei usato per la transazione iniziale, salvo che Lei non abbia espressamente convenuto
                                altrimenti; in ogni caso, non dovrà sostenere alcun costo quale conseguenza di tale
                                rimborso.
                            </li>
                            <br/>
                            <a href="/public/modulo_recesso.pdf" download>Download modulo di recesso</a>
                        </ul>
                    </div>
                </article>

                <Footer/>
            </strong>
        </>
    )
}