import React from "react";
import '../App.css';
import Footer from "../Footer";
import idraulici from './idraulici.css';


export default function Idraulici() {
    return (
        <>
            <div className='idraulici'>
                <img src='/images/idraulici.png'></img><h1> SERVIZI IDRAULICI</h1>
                <div className='idraulici-testo'>
                    <ul>
                        <li>
                            Progettare e installare impianti igienico-sanitari, di riscaldamento e di climatizzazione
                        </li>
                        <li>
                            Fare la manutenzione ordinaria e straordinaria degli impianti idrico-sanitari e di scarico
                        </li>
                        <li>
                            Individuare e riparare guasti e malfunzionamenti
                        </li>
                        <li>
                            Sostituire guarnizioni, valvole e altri elementi soggetti ad usura
                        </li>
                        <li>
                            Collaudare gli impianti installati e/o riparati
                        </li>
                        <li>
                            Effettuare preventivi di tempi e costi del proprio intervento
                        </li>
                    </ul>
                    <br/><br/>
                    <h3>Montaggio sanitari</h3><br/>
                    Gli <strong>idraulici esperti "RomaServiziCasa"</strong> sono a tua disposizione in ogni momento per
                    intervenire con
                    rapidità ed eseguire tutti i tipi <strong>d'installazione di sanitari a regola d'arte</strong> e ad
                    un
                    costo senza
                    sorprese.
                    Il nostro tecnico arriverà a casa tua e farà un preventivo gratuito senza alcun costo di chiamata,
                    se
                    effettuiamo l'intervento.
                    E per qualsiasi informazione o per avere aiuto nella prenotazione, chiama il nostro numero di <a
                    href='tel:+393294442599'> telefono. </a><br/><br/>

                    <h3>Come si svolge l'intervento</h3><br/>
                    Il tuo idraulico specializzato interviene a casa ed esegue, se necessario, lo smontaggio dei
                    sanitari
                    vecchi, eventualmente provvedendo al loro smaltimento. Installa quindi le tubature necessarie,
                    predisponendo le flange e gli attacchi.
                    Provvede quindi a <strong>cambiare il morsetto di scarico, a ripulire l'alloggiamento dei sanitari a
                    terra,
                    rimuovendo i residui e fissa i nuovi lavandini bidet e wc</strong>, collegando le
                    tubazioni flessibili e allacciando i punti di carico e scarico delle acque.
                    <br/><br/>
                    <h3>Cosa è incluso nel servizio</h3><br/>
                    <ul>
                        Di norma, l'intervento comprende:
                        <li>
                            La disinstallazione dei vecchi sanitari e il loro eventuale smaltimento
                        </li>
                        <li>
                            L'installazione e l'ancoraggio dei nuovi sanitari comprensivi di rubinetti
                        </li>
                        <br/>
                        Nell'intervento sono inclusi tutti i materiali di consumo necessari.
                        Sull'installazione di nuovi sanitari è compresa la garanzia per un periodo di 1 anno.
                        <br/>*Il servizio non include la fornitura dei nuovi sanitari né eventuali interventi alla
                        cassetta
                        di scarico.
                    </ul>
                    <br/>
                    <strong>Rispondiamo tutti i giorni a qualsiasi orario, anche nei giorni festivi.</strong>
                </div>
            </div>
            <Footer/>
        </>
    );
}