import React from "react";
import '../App.css';
import Footer from "../Footer";
import edilizia from './edilizia.css';

export default function Edilizia() {
    return (
        <>
            <div className='edilizia'>
                <img src='/images/edilizia.png'></img>
                <h1>EDILIZIA</h1>
                <div className='edilizia-testo'>

                    Può essere che sia da ristrutturare, o da rifinire. Può essere che già ci abiti e hai comunque
                    bisogno di un intervento di ripristino o di qualche manutenzione.<br/><br/>
                    <strong>Che si tratti di intonacare un soffitto, di verniciare le porte, di lucidatura dei
                        pavimenti, di piastrellare il bagno, di dipingere casa,</strong> di applicare la carta
                    da parati, siamo qui,pronti per essere prenotati. O meglio il nostro team <strong>
                    "RomaServiziCasa", imbianchini, muratori, cartongessisti, pavimentisti,</strong>
                    sono a tua disposizione, per qualsiasi tipo di tua esigenza per abbellire ma anche
                    rendere più funzionale il tuo habitat.<br/>
                    Potresti però avere bisogno di aiuto anche per una <strong>riparazione del tetto, per una tapparella
                    rotta, per la muffa in casa, per la pulizia della canna fumaria o di un pronto intervento di un
                    fabbro per aprire una serratura, riparare rubinetti, montare box doccia, disotturare scarichi, vari
                    lavori nell'ambito esterno della casa, servizi di sistemazione giardini, e vari servizi
                    idraulici.</strong><br/><br/>
                    Qualsiasi sia la necessità di un professionista artigiano edile in casa, noi ci abbiamo pensato!
                    A te basta prenotare qui il servizio che ti abbiamo dedicato: pochi minuti e puoi richiedere
                    l’intervento del team "RomaServiziCasa" a domicilio, subito nel caso di una serratura rotta, o se il
                    servizio fosse più complesso (come la piastrellatura ad esempio), puoi richiedere un preventivo
                    online
                    oppure chiamando il numero di <a href='tel:+393294442599'> telefono. </a>
                    In ogni caso, il prezzo che formuleremo sarà accurato e trasparente ed
                    includerà l’assicurazione.
                </div>
            </div>
            <Footer/>
        </>
    );
}