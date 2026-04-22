import { useState, useEffect } from "react";
import { LineButton } from "./LineButton";
import { FeatureCard } from "../cards/FeatureCard";
import imgSmartphones from '../../assets/smartphones-img.png'
import * as S from '../styles'

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
            descricao="Você no controle, sempre. Gerencie seu restaurante de forma simples e rápida."
            imagemUrl="/gestao-img.png"
            imagemAlt="Telas do aplicativo Pigz Gestão"
          />
        )}

        {abaAtiva === 'pigz-gestao' && (
          <FeatureCard 
            titulo="Pigz Gestão"
            descricao="Você no controle, sempre. Gerencie seu restaurante de forma simples e rápida."
            imagemUrl="/gestao-img.png"
            imagemAlt="Telas do aplicativo Pigz Gestão"
          />
        )}

        {abaAtiva === 'pigz-gestao' && (
          <FeatureCard 
            titulo=""
            descricao="Você no controle, sempre. Gerencie seu restaurante de forma simples e rápida."
            imagemUrl="/gestao-img.png"
            imagemAlt="Telas do aplicativo Pigz Gestão"
          />
        )}

      

      </S.ConteudoContainer>

    </> 
  )
  
}