import React from "react";
import Footer from '../components/Footer';
import './desoturantion.css';

export default function Desoturation() {
    return (
        <>
            <div className='disotturazione'>
                <img src='/images/disotturazione.png'/><h1>DISOTTURAZIONE</h1>
                <div className='disotturazione-testo'>
                    <ul>
                        L'intasamento dello scarico domestico è un inconveniente abbastanza frequente: lo scarico
                        del lavandino della cucina è otturato, quello del bagno è lento?
                        Anche se talvolta i rimedi semplici fai da te possono temporaneamente ripristinare il
                        funzionamento degli scarichi, alla lunga le condizioni di ostruzione delle tubazioni tendono
                        a ripresentarsi sempre più spesso, richiedendo quanto prima l'intervento di un idraulico
                        specializzato.
                        Eventuali depositi di detriti lungo i tubi di scarico necessitano di trattamenti specifici
                        con attrezzature ad alta pressione o prodotti disgorganti di tipo professionale. Per
                        assicurarti una completa soluzione del problema e una prevenzione sul lungo periodo di
                        ulteriori disagi, la soluzione migliore è sempre rivolgersi ad un idraulico esperto, come il
                        tuo Personal "RomaServiziCasa".
                        <br/><br/>
                        <h3>Come si svolge l'intervento</h3><br/>
                        Un tecnico idraulico specializzato "RomaServiziCasa" arriva a casa tua già dotato di
                        tutte le attrezzature professionali necessarie. Prima di sturare il lavandino, rimuove l'acqua
                        in eccesso, svuotando lo scarico.Procede quindi a liberare lo scarico intasato per mezzo di
                        attrezzature ad alta pressione o, se necessario, con prodotti acidi sgorganti professionali.
                        Prima di lasciare gli ambienti di lavoro, l'idraulico effettua una verifica della funzionalità
                        degli altri scarichi e ripulisce gli spazi interessati dall'intervento.
                        <br/><br/>
                        <h3>Cosa è incluso nel servizio</h3><br/>
                        <li>
                            Il disgorgamento degli scarichi interni all'abitazione
                        </li>
                        <li>
                            Il controllo degli altri scarichi dell'impianto
                        </li>
                        <li>
                            La pulizia finale degli spazi
                        </li>
                        <br/>
                        L'intervento comprende l'eventuale materiale di consumo necessario.
                        Sull'operazione è prevista una garanzia della durata di 1 anno.
                    </ul>
                </div>
            </div>

            <Footer/>
        </>
    );
}