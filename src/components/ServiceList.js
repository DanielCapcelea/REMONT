import React from 'react';
import './Cards.css';
import CardItem from "./CardItem";

function ServiceList() {
    return (
        <div className='cards'>
            <h1>I nostri servizi</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-edilizia.jpg'
                            label='Edilizia'
                            path='/edilizia'
                        />
                        <CardItem
                            src='images/img-idraulico.jpg'
                            label='Servizi Idraulici'
                            path='/idraulici'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-rubinetto.jpg'
                            label='Rubinetti'
                            path='/rubinetti'
                        />
                        <CardItem
                            src='images/img-serramenti.jpg'
                            label='Serramenti'
                            path='/serramenti'
                        />
                        <CardItem
                            src='images/pavimenti2.jpg'
                            label='Pavimenti'
                            path='/pavimenti'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/interni1.jpg'
                            label='Interni Casa'
                            path='/interni'
                        />
                        <CardItem
                            src='images/img-esterni2.jpg'
                            label='Esterni Casa'
                            path='/esterni'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-tapparelle.jpg'
                            label='Tapparelle'
                            path='/tapparelle'
                        />
                        <CardItem
                            src='images/img-scarico.jpg'
                            label='Disotturazione'
                            path='/disotturazione'
                        />
                        <CardItem
                            src='images/img-doccia.jpg'
                            label='Doccia'
                            path='/doccia'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-giardino1.jpg'
                            label='Giardinaggio'
                            path='/giardinaggio'
                        />
                        <CardItem
                            src='images/img-imbiancatura.jpg'
                            label='Imbiancatura'
                            path='/imbiancatura'
                        />
                    </ul>
                    <h3 className='service24'><img src='/images/service.png'/> Servizio clienti attivo h24, 7
                        giorni su 7</h3>
                </div>
            </div>
        </div>

    );
}

export default ServiceList;