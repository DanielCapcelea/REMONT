import React from "react";
import Footer from "../Footer";

export default function Privacy() {
    return (
        <>
            <strong>
                <article className='privacy'>
                    <div>
                        <h1> Informativa sulla privacy</h1><br/>
                        <h2>DIRITTI A LEI SPETTANTI (quali richieste può rivolgerci per esercitare i Suoi diritti sul
                            trattamento)</h2><br/>
                        <h3>La informiamo, infine, che in ogni momento Lei potrà esercitare i diritti seguenti: Oltre a
                            queste informazioni, per garantirle un trattamento dei suoi dati il più corretto e
                            trasparente possibile, deve essere a conoscenza del fatto che:</h3>
                        <ul>
                            <li>
                                ha il diritto di chiedere al titolare del trattamento l'accesso ai Suoi dati personali,
                                chiedendo conferma o meno della loro esistenza nonchè la rettifica o la cancellazione
                                degli stessi o la limitazione (blocco temporaneo) del trattamento che La riguarda;
                            </li>
                            <li>
                                se ha fornito il consenso per una o più specifiche finalità, ha il diritto di revocare
                                tale consenso in qualsiasi momento;
                            </li>
                            <li>
                                ha il diritto alla portabilità dei Suoi dati personali (per quelli con base legale di
                                esecuzione contrattuale o consensuale) mediante richiesta al titolare, a mezzo di
                                comunicazione di un file in formato .csv, .xml o analogo. Il trattamento avviene
                                mediante processi automatizzati che non determinano la profilazione degli interessati.
                            </li>
                            <li>
                                <h3>HA IL DIRITTO DI OPPORSI IN QUALSIASI MOMENTO AL LORO TRATTAMENTO PER MOTIVI
                                    CONNESSI ALLA SUA SITUAZIONE PARTICOLARE IN CASO: I) DI TRATTAMENTO NECESSARIO PER
                                    L’ESECUZIONE DI UN COMPITO DI INTERESSE PUBBLICO O CONNESSO ALL’ESERCIZIO DI
                                    PUBBLICI POTERI, OPPURE II) IN CASO DI PERSEGUIMENTO DI LEGITTIMO INTERESSE DEL
                                    TITOLARE;</h3>
                            </li>
                            <br/>
                        </ul>
                    </div>
                </article>
            </strong>
            <Footer/>

        </>
    );
}