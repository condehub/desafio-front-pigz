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


// FORM STYLES //

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

// A "caixa" branca do formulário
export const FormCard = styled.section`
  background-color: #FFFFFF;
  width: 100%;
  max-width: 380px; /* Largura ideal para esse tipo de card */
  border-radius: 30px; /* Bordas bem arredondadas como na imagem */
  padding: 32px;
  /* Uma sombra suave opcional para destacar do fundo */
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05); 
`;

// O formulário usando Flexbox para empilhar tudo perfeitamente
export const FormElement = styled.form`
  display: flex;
  flex-direction: column;
`;

export const TituloForm = styled.h2`
  color: #333333;
  font-size: 24px;
  margin: 0 0 8px 0;
  font-weight: 700;
`;

export const Subtitulo = styled.p`
  font-size: 13px;
  color: #666666;
  margin: 0 0 24px 0;
  font-family: "Poppins", sans-serif;
`;

// Grupo para manter o Label e o Input juntos
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  text-align: left;
  font-size: 12px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 6px;
`;

// Estilo padrão para os inputs de Nome e E-mail
export const StyledInput = styled.input`
  color: black;
  background-color: white;
  border: 1px solid #CCCCCC;
  border-radius: 12px;
  padding: 14px;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  outline: none;

  &::placeholder {
    color: #BBBBBB;
  }

  &:focus {
    border-color: #FA641E; /* Borda fica laranja ao clicar */
  }
`;

/* --- ESTILOS ESPECÍFICOS DO TELEFONE --- */
export const PhoneContainer = styled.div`
  color: black;
  display: flex;
  border: 1px solid #CCCCCC;
  border-radius: 12px;
  overflow: hidden; /* Mantém o fundo cinza contido nas bordas */

  &:focus-within {
    border-color: #FA641E;
  }
`;

export const PhonePrefix = styled.div`
  background-color: #F4F4F4;
  padding: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #888888;
  border-right: 1px solid #CCCCCC; /* Linha divisória */
`;

export const PhoneInput = styled.input`
  color: black;
  background-color: white;
  border: none;
  padding: 14px;
  font-size: 14px;
  flex: 1; /* Ocupa o restante do espaço */
  outline: none;
  font-family: "Poppins", sans-serif;

  &::placeholder {
    color: #BBBBBB;
  }
`;
/* -------------------------------------- */

export const AvisoLegal = styled.p`
  font-size: 11px;
  color: #666666;
  line-height: 1.5;
  margin: 16px 0 24px 0;
  font-family: "Poppins", sans-serif;
`;

export const BotaoContinuar = styled.button`
  background-color: #FA641E;
  color: #FFFFFF;
  border: none;
  border-radius: 16px;
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  transition: background-color 0.2s;

  &:hover {
    background-color: #E55A1B;
  }
`;