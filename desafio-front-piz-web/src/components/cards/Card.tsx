import { useState } from 'react';
import * as S from '../styles'
import marketplaceLogo from '../../assets/marketplace-icon.svg'
import phoneLogo from '../../assets/smartphone-logo.svg'
import pigzGestao from '../../assets/pigzgestao-logo.svg'
import printerLogo from '../../assets/printer-logo.svg'


// Styled Components



function CardContainer() {
  const [cards] = useState([{
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
          <S.GridContainer>
            <S.CardWrapper key={card.id} className="card">
              <S.LogoImage src={card.icon} className={card.title} />
              <S.Title>{card.title}</S.Title>
              <S.Subtitles>{card.subtitle}</S.Subtitles>
            </S.CardWrapper>
          </S.GridContainer>
          
        ))}
      </div>
    );
}

export default CardContainer;

