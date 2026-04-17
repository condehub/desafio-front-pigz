import React, { useState } from 'react';
import styled from 'styled-components';
import * as S from './styles'
import marketplaceLogo from '../assets/marketplace-icon.svg'
import phoneLogo from '../assets/smartphone-logo.svg'
import pigzGestao from '../assets/pigzgestao-logo.svg'
import printerLogo from '../assets/printer-logo.svg'


// Styled Components

const LogoImage = styled.img`
  width: 50%;
`

const Title = styled.h2`
  font-weight: ;
  color: black;
`
const GridContainer= styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled.div`
  background-color: #FAFAFA;
  border-radius: 20%;
  padding: 40px 40px;
  border: 1px solid transparent;
  transition: border 0.15s;

  &:hover {
    border: 3px solid #E0E0E0;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
`;
const Subtitles = styled.p`
  color: black;
`

function CardContainer() {
  const [cards, setCards] = useState([{
        id: 1,
        icon: marketplaceLogo,
        title: 'Marketplace',
        subtitle: 'Pra sua loja vender mais'
      },{
        id: 2,
        icon: phoneLogo,
        title: 'É fácil e rápido',
        subtitle: 'Fazer um pedido no Pigz'
      },{
        id: 3,
        icon: pigzGestao,
        title: 'Pigz Gestão',
        subtitle: 'Você no controle, sempre'
      },{
        id: 4,
        icon: printerLogo,
        title: 'Vias de impressão',
        subtitle: 'Personalizáveis'
      }
    ]);

    return (
      <div className="card-container">
        {cards.map((card) => (
          <GridContainer>
            <CardWrapper key={card.id} className="card">
              <LogoImage src={card.icon} className={card.title} />
              <Title>{card.title}</Title>
              <Subtitles>{card.subtitle}</Subtitles>
            </CardWrapper>
          </GridContainer>
          
        ))}
      </div>
    );
}

export default CardContainer;

