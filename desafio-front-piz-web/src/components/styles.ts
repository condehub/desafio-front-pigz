import styled from "styled-components";


export const HeaderContainer = styled.header`
  width: 100%;
  background-color: #ffffff;
  padding: 16px 0;
`;

export const HeaderContent = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;



export const PartnerButton = styled.button`
  /* 1. CSS padrão do botão */
  background: linear-gradient(90deg, #FA641E 0%, #FF881F 100%);
  color: #ffffff;
  border: none;
  border-radius: 9999px;
  padding: 12px 24px;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0px 4px 14px rgba(250, 100, 30, 0.35);
  transition: all 0.2s ease-in-out;

  /* 2. Efeitos com & */
  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
    box-shadow: 0px 6px 16px rgba(250, 100, 30, 0.45);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0px 2px 8px rgba(250, 100, 30, 0.3);
  }

  /* 3. Responsividade aninhada */
  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

export const Logo = styled.img
`height: 40px;
  width: auto;

  @media (max-width: 768px) {
    height: 32px;
  }
`;

// --- ESTILOS PRINCIPAIS ---

export const Texto = styled.section`
  background-color: #FA641E;
  color: #FFFFFF;
  padding: 40px 20px;
`;

// NOVO: Um container para limitar a largura máxima e manter tudo centralizado na tela
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px; /* Espaço entre a parte de cima (título+imagem) e o parágrafo abaixo */
`;

// NOVO: A primeira div que você pediu, que coloca o texto e a imagem lado a lado
export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Centraliza a imagem e o título na vertical */
  gap: 20px;

  /* RESPONSIVIDADE: Empilha a imagem abaixo do título no celular */
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const FirstText = styled.h2`
  font-size: 40pt;
  font-weight: bold;
  margin: 0; /* Removida a margem pois o gap do Container já faz o espaçamento */
  line-height: 1.2;
  flex: 1; /* Faz o título ocupar o espaço disponível empurrando a imagem para a direita */

  @media (max-width: 768px) {
    font-size: 28pt;
  }
`;

export const Hamburguer = styled.img`
  max-width: 60%; /* Ajuste o tamanho da imagem conforme necessário */
  height: auto;
  object-fit: contain;

  @media (max-width: 768px) {
    max-width: 70%;
    margin-top: 16px;
  }
`;

export const Paragrafo = styled.p`
  font-size: 16pt;
  line-height: 1.5;
  margin: 0;
  max-width: 80%; /* Evita que o parágrafo estique até o final da tela em monitores largos */

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;


