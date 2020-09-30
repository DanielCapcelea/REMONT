import React from "react";
import Footer from '../components/Footer';
import './external.css';

export default function External() {
    return (
        <>
            <div className='esterni'>
                <img src='/images/esterni3.png'/><h1> ESTERNI CASA</h1>
                <div className='esterni-testo'>
                    <ul>
                        <h3>Può scegliere tra i seguenti servizi:</h3>
                        <li>
                            Tinteggiatura per esterni
                        </li>
                        <li>
                            Installazione strutture da giardino
                        </li>
                        <li>
                            <a href='/pavimenti'> Posa o rifacimento pavimentazione esterna</a>
                        </li>
                        <br/><br/>
                        Pitturare casa all'esterno è un'opera complessa, non solo per le dimensioni dell'intervento, ma
                        anche per le condizioni di lavoro.
                        Sono necessarie attrezzature professionali per lavorare in totale sicurezza, e competenze
                        approfondite per scegliere la pittura per esterni più adatta e durevole nel tempo.
                        In Personal "RomaServiziCasa", imbianchini esperti e attrezzati, sapranno consigliarti la
                        modalità
                        d'intervento più adatta al tuo caso e i materiali più indicati per le tue esigenze, tenendo
                        conto di fattori importanti come l'esposizione al sole e alle intemperie nella scelta dei tipi
                        di pittura tra i tanti presenti sul mercato: ad esempio la pittura silossanica – ideale per la
                        tinteggiatura delle facciate – la pittura al quarzo e pitture per esterni resistenti.
                        E soprattutto porteranno a termine il lavoro a regola d'arte e con il risultato estetico che
                        desideri, dando alla tua casa il colore esterno che hai sempre sognato!
                        E il prezzo dell'intervento, con "RomaServiziCasa", non sarà solo conveniente, ma anche chiaro
                        fin da subito, con la sicurezza che la cifra indicata nel preventivo non subirà variazioni a
                        fine lavori.
                        <br/><br/>
                        Hai finalmente deciso di regalarti un gazebo o un pergolato, e magari un barbecue in muratura?
                        Gli esperti edili di "RomaServiziCasa" sono a tua disposizione per scegliere e installare i
                        manufatti più adeguati alla tua casa e alle tue esigenze.
                        La valutazione del tipo di strutture da installare nel tuo giardino richiede alcune valutazioni
                        esperte, come la verifica della dimensione e forma degli spazi da arredare, e l'analisi delle
                        condizioni di esposizione solare e agli agenti atmosferici.
                        Una volta definiti tutti gli aspetti chiave dell'intervento, i nostri tecnici saranno pronti a
                        portare a termine i lavori richiesti in tempi rapidi e assicurandoti un risultato a regola
                        d'arte.
                        E oltre ad offrirti dei prezzi altamente convenienti, ti daranno la tranquillità di un costo
                        definito con chiarezza fin dal preventivo, senza sorprese al termine dell'intervento.
                    </ul>
                </div>
            </div>
            <Footer/>
        </>
    );
}