import { useState, useEffect } from "react";
import { LineButton } from "./LineButton";
import { FeatureCard } from "../cards/FeatureCard";
import imgSmartphones from '../../assets/smartphones-img.png'
import imgNotebook from '../../assets/notebook-smartphone.png'
import imgDelivery from '../../assets/delivery-gestao.png'
import imgPayment from '../../assets/payment-card.png'
import * as S from '../styles'

/**
 * LineTrail
 * ----------
 * Carrossel de funcionalidades com troca automática a cada 10 segundos.
 *
 * Abas disponíveis (ORDEM_DAS_ABAS):
 * 1. pigz-marketplace  → Pigz Marketplace
 * 2. pigz-gestao       → Pigz Gestão
 * 3. delivery-gestao   → Gestão de entregadores
 * 4. online-payment    → Pagamento on-line
 *
 * Comportamento:
 * - useEffect cria um intervalo de 10s que avança para a próxima aba automaticamente.
 * - O usuário pode clicar em qualquer LineButton para trocar a aba manualmente.
 *
 * Estilos: TrailContainer · ConteudoContainer (styles.ts)
 * Filhos:  LineButton · FeatureCard
 */

const ORDEM_DAS_ABAS = [
  'pigz-marketplace', // 0: Primeira parada
  'pigz-gestao',      // 1: Segunda parada
  'delivery-gestao',  // 2: Terceira parada
  'online-payment'    // 3: Última parada
];



export function LineTrail(){
  // Variável que vai ser lida para renderizar os cards
  // setAbaAtiva é a função que vai mudar o valor de 'AbaAtiva' 
  const [abaAtiva, setAbaAtiva] = useState('pigz-marketplace');

  // useEffect monitora efeitos colaterais, como por exemplo: A cada 10 segundos o card vai mudar, mudando os textos, imagem e título.
  useEffect(() => {
    
    // A varíavel relogio vai segurar a função que criará o intervalo de tempo que as abas vão mudar.
    const relogio = setInterval(() => {
      setAbaAtiva((abaAtual) => {
        const ondeEstou = ORDEM_DAS_ABAS.indexOf(abaAtual);
        const proximaParada = (ondeEstou + 1) % ORDEM_DAS_ABAS.length; 
        return ORDEM_DAS_ABAS[proximaParada];
      });
    }, 10000);

    return () => clearInterval(relogio);

  }, []);

  return(
    <>
    <S.TrailContainer>

    <LineButton isActive={abaAtiva === 'pigz-marketplace'} onClick={() => setAbaAtiva('pigz-marketplace')} />

    <LineButton isActive={abaAtiva === 'pigz-gestao'} onClick={() => setAbaAtiva('pigz-gestao')} />

    <LineButton isActive={abaAtiva === 'delivery-gestao'} onClick={() => setAbaAtiva('delivery-gestao')} />

    <LineButton isActive={abaAtiva === 'online-payment'} onClick={() => setAbaAtiva('online-payment')} />

    </S.TrailContainer>

    <S.ConteudoContainer>
        {abaAtiva === 'pigz-marketplace' && (
          <FeatureCard 
            titulo="Pigz Marketplace"
            descricao="Além de uma página exclusiva, com o Pigz Marketplace sua loja terá mais visibilidade, no app e no site. Uma vitrine com milhares de clientes todos os dias, pra vender muito mais."
            imagemUrl={imgSmartphones} 
            imagemAlt="Telas do aplicativo Pigz Marketplace"
          />
        )}

        {abaAtiva === 'pigz-gestao' && (
          <FeatureCard 
            titulo="Pigz Gestão"
            descricao="Acompanhe suas vendas em tempo real, no computador ou no celular, de onde estiver. Faça alterações de preços e disponibilidade de produtos rapidamente, como deve ser."
            imagemUrl={imgNotebook}
            imagemAlt="Telas do aplicativo Pigz Gestão"
          />
        )}

        {abaAtiva === 'delivery-gestao' && (
          <FeatureCard 
            titulo="Gestão de entregadores"
            descricao="A ferramenta ideal pra quem tem entrega própria. Controle de entregas por motoboy, geração de relatórios por entregas e por taxas de entrega, individualmente."
            imagemUrl={imgDelivery}
            imagemAlt="Telas do aplicativo Gestão de entregadores"
          />
        )}

        {abaAtiva === 'online-payment' && (
          <FeatureCard 
            titulo="Pagamento on-line"
            descricao="Segurança e agilidade para receber e entregar pedidos. Seus clientes pagam com Pix ou cartão de crédito pelo app, e o entregador nem precisa levar a maquininha de cartão."
            imagemUrl={imgPayment}
            imagemAlt="Telas do aplicativo Pigz Gestão"
          />
        )}

      

      </S.ConteudoContainer>

    </> 
  )
  
}