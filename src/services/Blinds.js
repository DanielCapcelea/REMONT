import React from "react";
import Footer from '../components/Footer';
import './blinds.css';

export default function Blinds() {
    return (
        <>
            <div className='tapparelle'>
                <img src='/images/tapparelle.png'/><h1>TAPPARELLE</h1>
                <div className='tapparelle-testo'>
                    <ul>
                        Oltre ai servizi di sbloccaggio porte e serrature, "RomaServiziCasa" ti offre una
                        squadra sempre reperibile di fabbri esperti nella riparazione tapparelle e/o sostituzione
                        tapparelle, per rispondere anche ai piccoli problemi quotidiani che potrebbero presentarsi con
                        le
                        tapparelle di casa, siano esse motorizzate, coibentate o a cinghia.
                        <br/><br/>
                        Persiane, serrande e tapparelle motorizzate sono indubbiamente molto comode, perché possono
                        essere azionate con un semplice comando senza la fatica di manovrarle a mano.
                        Purtroppo, come tutti i meccanismi elettrici, i sistemi di movimentazione degli infissi sono
                        soggetti a usura e richiedono una manutenzione periodica.<br/>
                        I guasti più frequenti sono in genere rappresentati dal blocco dell'infisso motorizzato:
                        serrande e cancelli possono smettere di muoversi correttamente e allo stesso modo possono
                        immobilizzarsi i rulli che avvolgono le tapparelle. In genere questi guasti si producono per
                        normale usura delle parti meccaniche, o nei casi meno gravi per deposito di polvere, sporco o
                        altri detriti nelle fessure dei meccanismi. Altre volte il blocco può essere dovuto a un guasto
                        all'interno degli elettromeccanismi. Richiedi i servizi "RomaServiziCasa" per la riparazione
                        tapparelle e serrande elettriche: interveniamo tempestivamente a domicilio per individuare il
                        guasto e risolvere l'inconveniente.<br/><br/>
                        Per qualsiasi malfunzionamento di persiane, serrande e tapparelle elettriche puoi rivolgerti ai
                        nostri serramentisti specializzati, con la certezza di una riparazione rapida ed efficace a
                        costi chiari e sostenibili.
                    </ul>
                </div>
            </div>
            <Footer/>
        </>
    );
}