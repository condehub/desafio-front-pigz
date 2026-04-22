import { useState } from 'react';
import * as S from '../styles'
import marketplaceLogo from '../../assets/marketplace-icon.svg'
import phoneLogo from '../../assets/smartphone-logo.svg'
import pigzGestao from '../../assets/pigzgestao-logo.svg'
import printerLogo from '../../assets/printer-logo.svg'

/**
 * CardContainer
 * --------------
 * Exibe a grade de cards de serviços do Pigz (Marketplace, App, Gestão, Impressão).
 *
 * Cada card contém:
 * - Ícone SVG representando o serviço.
 * - Título do serviço (Title).
 * - Subtítulo descritivo (Subtitles).
 *
 * Os dados dos cards são mantidos em estado local (useState) como array estático.
 *
 * Estilos: GridContainer · CardWrapper · LogoImage · Title · Subtitles (styles.ts)
 */

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
      <S.GridContainer>
        {cards.map((card) => (
          <S.CardWrapper key={card.id} className="card">
            <S.LogoImage src={card.icon} className={card.title} />
            <S.Title>{card.title}</S.Title>
            <S.Subtitles>{card.subtitle}</S.Subtitles>
          </S.CardWrapper>
        ))}
      </S.GridContainer>
    );
}

export default CardContainer;

