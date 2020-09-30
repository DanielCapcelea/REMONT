import React from "react";
import Footer from '../components/Footer';
import './floor.css';

export default function Floor() {
    return (
        <>
            <div className='pavimenti'>
                <img src='/images/pavimenti.png'/><h1>PAVIMENTI</h1>
                <div className='pavimenti-testo'>
                    <ul>
                        La nostra squadra è sempre disponibile per il montaggio/smontaggio pavimenti sia interni che
                        esterni.
                        <li>
                            <strong>Pavimenti laminati, piastrelle</strong> per interni ed anche per esterni: lavoriamo
                            ogni giorno per garantire i migliori
                            servizi al giusto prezzo.
                        </li>
                        <li>
                            Rifare i pavimenti è un'operazione che non capita spesso, per fortuna, perché è un lavoro
                            complesso e impegnativo, che spesso va di pari passo con il ristrutturare casa. Non solo
                            nella progettazione dell'intervento di posa di rivestimenti e pavimenti servono solide
                            competenze professionali, ma l'intervento di posa stesso richiede perizia, precisione e cura
                            del dettaglio. Anche la scelta dei materiali per pavimenti non è scontata, perché il mercato
                            oggi offre una disponibilità molto ampia, dai prodotti più classici ai più innovativi, e
                            bisogna considerare molti fattori, non solo estetici anche pratici.

                            Affidando la pavimentazione esterna di casa ai posatori "RomaServiziCasa", però, scegli
                            sempre la
                            sicurezza di una posa a regola d'arte, con costi convenienti e certi fin dall'inizio e un
                            risultato di finitura all'altezza delle tue aspettative.
                        </li>
                        <br/>
                        <h3>Come si svolge l'intervento</h3>
                        <br/>
                        L'intervento inizia con la rimozione del pavimento esistente da sostituire e il rifacimento del
                        massetto di appoggio. In seguito viene posato il nuovo pavimento e, a lavori conclusi, viene
                        controllato in ogni sua parte per assicurarsi della corretta applicazione.
                        Ad intervento ultimato, i tecnici rimuovono protezioni, detriti e materiali di lavoro e
                        riconsegnano l'area di lavoro alle condizioni iniziali.<br/><br/>
                        <h3>Cosa è incluso nel servizio</h3><br/>
                        Di norma, l'intervento comprende:
                        <li>
                            Rimozione del vecchio pavimento da sostituire
                        </li>
                        <li>
                            Predisposizione del nuovo massetto di appoggio delle pavimentazioni
                        </li>
                        <li>
                            Fornitura e posa in opera delle nuove pavimentazioni
                        </li>
                        <li>
                            Smaltimento di materiali di scarto, detriti ed eventuali protezioni
                        </li>
                        <br/>
                        Richiedi un preventivo gratuito e i nostri esperti ti aiuteranno nella scelta dell'essenza e
                        dei materiali fornendo tutte le informazioni richieste in modo veloce e gratuito.
                    </ul>
                </div>
            </div>
            <Footer/>
        </>
    );
}