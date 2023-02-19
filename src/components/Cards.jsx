import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import '../App.css'
import Jakobsmuschel from './images/jakobsmuschel.jpg'
import CardImage2 from './images/img-2.jpg'
import Caminha from './images/caminha.jpg'
import Riamar1 from './images/riamar1.png'
import Tui from './images/tui.jpg'
import Maps from './images/maps.png'

const Cards = () => {
  return (
    <div className='cards'>
        <h1>Look here for more Information !</h1>
        <div className="cards__container">
          <div className='cards__wrapper'>
            <ul className='cards__items'>
            <CardItem
                src={Caminha}
                text="Caminha é uma vila portuguesa localizada na sub-região do Alto Minho, pertencendo à região do Norte e ao distrito de Viana do Castelo."
                label="Caminha"
                path="/services"
            />
            <CardItem
                src={Tui}
                text="Tui (em galego e oficialmente: Tui; em castelhano: Tuy) é um município raiano da Espanha que se encontra na comarca do Baixo Minho, província de Pontevedra, comunidade autónoma da Galiza. Tem 68,3 km² de área e em 2021 tinha 17 398 habitantes (densidade: 254,7 hab./km²)."
                label="Tui"
                path="/services"
            />
            </ul>
            <ul className='cards__items'>
                <CardItem
                    src={Riamar1}
                    text="O Riamar 700 Acapulco é um modelo universal vocacionado para diversas actividades, tanto de lazer como deportivas e profissionais destacando-se a pesca e actividades maritimo turisticas."
                    label="The Boat"
                    path="/services"
                />
                <CardItem
                    src={Maps}
                    text="Find me on on Google Maps"
                    label="Location"
                    path="/services"
                />
                 <CardItem
                    src={Jakobsmuschel}
                    text="The Way of St James was one of the most important Christian pilgrimages during the later Middle Ages, and a pilgrimage route on which a plenary indulgence could be earned;"
                    label="Adventure"
                    path="/services"
                />
            </ul>
           
          </div>
        </div>
    </div>
  )
}

export default Cards