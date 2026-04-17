import React, { useState } from 'react';
import styled from 'styled-components';
import pigzLogo from '../assets/pigz-fone.svg'
import * as S from './styles'
import marketplaceLogo from '../assets/marketplace-icon.svg'
import phoneLogo from '../assets/smartphone-logo.svg'
import pigzGestao from '../assets/pigzgestao-logo.svg'
import printerLogo from '../assets/printer-logo.svg'
const LogoImage = styled.img`
  width: 50%;
`

const Title = styled.h2`
  font-weight: bold;
  color: 
`
// const CardContainer= styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `

const Subtitles = styled.p`
  color: black;
`

function CardContainer() {
  const [cards, setCards] = useState([{
        id: 1,
        icon: '{marketplaceLogo}',
        title: 'Marketplace',
        subtitle: 'Pra sua loja vender mais'
      },{
        id: 2,
        icon: '{smartphoneLogo}',
        title: 'É fácil e rápido',
        subtitle: 'Fazer um pedido no Pigz'
      },{
        id: 3,
        icon: '{pigzGestao}',
        title: 'Pigz Gestão',
        subtitle: 'Você no controle, sempre'
      },{
        id: 4,
        icon: '{printerLogo}',
        title: 'Vias de impressão',
        subtitle: 'Personalizáveis'
      }
    ]);

    return (
      <div className="card-container">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <LogoImage src={card.icon} className={card.title} />
            <Title>{card.title}</Title>
            <Subtitles>{card.subtitle}</Subtitles>
          </div>
        ))}
      </div>
    );
}

export default CardContainer;

