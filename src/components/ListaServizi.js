import React from 'react';
import '../Cards.css';
import CardItem from "../CardItem";

function ListaServizi() {
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
                            path='/servizi'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-rubinetto.jpg'
                            label='Rubinetti'
                            path='/servizi'
                        />
                        <CardItem
                            src='images/img-imbiancatura.jpg'
                            label='Imbiancatura'
                            path='/servizi'
                        />
                        <CardItem
                            src='images/img-serramenti.jpg'
                            label='Serramenti'
                            path='/servizi'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-giardino1.jpg'
                            label='Giardinaggio'
                            path='/servizi'
                        />
                        <CardItem
                            src='images/img-box-doccia.jpg'
                            label='Doccia'
                            path='/servizi'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-tapparelle.jpg'
                            label='Tapparelle'
                            path='/servizi'
                        />
                        <CardItem
                            src='images/img-scarico.jpg'
                            label='Disotturazione scarichi'
                            path='/servizi'
                        />
                        <CardItem
                            src='images/img-scarico.jpg'
                            label='Disotturazione scarichi'
                            path='/servizi'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ListaServizi;