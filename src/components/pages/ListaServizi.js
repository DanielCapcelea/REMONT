import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>La nostra squadra offre vari servizi di manutenzione casa</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-edilizia.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Edilizia'
                            path='/servizi'
                        />
                        <CardItem
                            src='images/img-idraulico.jpg'
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Servizi Idraulici'
                            path='/servizi'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-serramenti.jpg'
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Serramenti'
                            path='/servizi'
                        />
                        <CardItem
                            src='images/img-imbiancatura.jpg'
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Imbiancatura'
                            path='/servizi'
                        />
                        <CardItem
                            src='images/img-tapparelle.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Tapparelle'
                            path='/servizi'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;