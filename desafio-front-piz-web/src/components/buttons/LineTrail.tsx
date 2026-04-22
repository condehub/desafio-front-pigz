import { useState, useEffect } from "react";
import { LineButton } from "./LineButton";
import * as S from '../styles'

// 🗺️ PEÇA 1: O nosso Mapa (A ordem em que as abas vão passar)
// Colocamos fora da função para o React não recriar isso toda hora.
const ORDEM_DAS_ABAS = [
  'pigz-marketplace', // 0: Primeira parada
  'pigz-gestao',      // 1: Segunda parada
  'delivery-gestao',  // 2: Terceira parada
  'online-payment'    // 3: Última parada
];



export function LineTrail(){
  const [abaAtiva, setAbaAtiva] = useState('pigz-marketplace');

  // ⏱️ PEÇA 2: O Motorzinho do Tempo
  useEffect(() => {
    
    // 1. Criamos um cronômetro chamado "relogio"
    const relogio = setInterval(() => {
      
      // 2. A cada 15 segundos, o relógio pede para trocar a aba
      setAbaAtiva((abaAtual) => {
        // - "Onde estamos no mapa?"
        const ondeEstou = ORDEM_DAS_ABAS.indexOf(abaAtual); 
        
        // - "Qual é a próxima parada?" (+1)
        // O "%" é a mágica que faz voltar para o começo (0) quando chega no final.
        const proximaParada = (ondeEstou + 1) % ORDEM_DAS_ABAS.length; 
        
        // - Vai para a próxima!
        return ORDEM_DAS_ABAS[proximaParada];
      });

    }, 10000);
    
    // 3. A faxineira (MUITO IMPORTANTE!)
    // Se o usuário sair dessa página, precisamos desligar o relógio, senão ele fica apitando no vazio!
    return () => clearInterval(relogio);

  }, []); // Os colchetes vazios significam: "Ligue o motor apenas UMA VEZ quando a tela nascer".

  return(
    <S.TrailContainer>

    <LineButton isActive={abaAtiva === 'pigz-marketplace'} onClick={() => setAbaAtiva('pigz-marketplace')} />

    <LineButton isActive={abaAtiva === 'pigz-gestao'} onClick={() => setAbaAtiva('pigz-gestao')} />

    <LineButton isActive={abaAtiva === 'delivery-gestao'} onClick={() => setAbaAtiva('delivery-gestao')} />

    <LineButton isActive={abaAtiva === 'online-payment'} onClick={() => setAbaAtiva('online-payment')} />

    </S.TrailContainer>
  )
  
}