import React from "react";
import '../App.css';
import Footer from "../Footer";
import rubinetti from './rubinetti.css';

export default function Rubinetti() {
    return (
        <>
            <div className='rubinetti'>
                <img src='/images/rubinetti1.png'></img><h1> RUBINETTI</h1>
                <div className='rubinetti-testo'>
                    <ul>
                        <li>
                            Se vi accorgete di avere un rubinetto che perde è molto meglio agire subito per riparare la
                            perdita ed evitare problemi più gravi.

                            Le perdite d'acqua, infatti, oltre a danneggiare le superfici con cui vengono a contatto,
                            potrebbero a lungo andare, causare danni più gravi all’impianto idraulico.

                            Un altro aspetto da non sottovalutare, inoltre, è quello economico poiché le perdite
                            incidono
                            sui consumi e di conseguenza sulle bollette che saranno più salate.
                        </li>
                        <li>
                            Il guasto in genere è abbastanza facile da identificare: se dal rubinetto non esce acqua a
                            sufficienza solitamente il problema è un deposito di sporco o calcare all'interno del
                            rubinetto,
                            soprattutto sulle bocchette di erogazione. Oppure, all'opposto, può essere la tenuta delle
                            guarnizioni che cede e che determina il fastidioso problema del rubinetto che gocciola e
                            perde
                            acqua: se siamo più fortunati si tratterà di una goccia fastidiosa, ma in casi più gravi
                            possiamo avere perdite d'acqua con piccoli o grandi allagamenti del bagno o della cucina.
                            Anche se talvolta il fai da te funziona, è sempre raccomandabile far la riparare il
                            rubinetto ad
                            idraulici preparati in grado di intervenire in sicurezza evitando danni peggiori
                            all'impianto
                            idraulico e risolvendo il problema in tempi brevi e con disagio minimo.

                        </li>
                        Se preferisci prenotare al telefono chiama il Servizio Clienti al numero di <a
                        href='tel:+393294442599'> telefono. </a> per avere tutte le informazioni che desideri e
                        completare la prenotazione
                        dell'intervento.
                    </ul>

                </div>
            </div>
            <Footer/>
        </>
    );
}