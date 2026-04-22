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
  width: 100%;
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
    flex-direction: row;
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
  background-color: #FA641E;
`;

// A "caixa" branca do formulário
export const FormCard = styled.section`
  margin: 80px 0;
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
  margin-bottom: 4px;
  text-align: left;
  color: #333333;
  font-size: 24px;
  margin: 0 0 8px 0;
  font-weight: 700;
`;

export const Subtitulo = styled.p`
  margin-bottom: 4px;
  text-align: left;
  font-size: 13px;
  color: #666666;
  margin: 0 0 24px 0;
`;

// Grupo para manter o Label e o Input juntos
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px
  flex: 1;
`;

export const InputRow = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;`

export const Label = styled.label`
  text-align: left;
  font-size: 14px;
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
  outline: none;
  margin-bottom: 12px;
  width: 100%;
  box-sizing: border-box;
  &::placeholder {
    color: #BBBBBB;
  }

  &:focus {
    border-color: #FA641E; /* Borda fica laranja ao clicar */
    outline: none;
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
  transition: background-color 0.2s;

  &:hover {
    background-color: #E55A1B;
  }
`;

// Adicione isso no seu styles.ts
export const StyledSelect = styled.select`
  color: black;
  background-color: white;
  border: 1px solid #CCCCCC;
  border-radius: 12px;
  
  /* Aumentamos o padding da direita para 40px, para o texto não encostar na seta */
  padding: 14px 40px 14px 14px; 
  font-size: 14px;
  outline: none;
  width: 100%;
  cursor: pointer;

  /* --- O TRUQUE DA SETINHA --- */
  
  /* 1. Remove a seta nativa do navegador */
  appearance: none;
  -webkit-appearance: none; /* Para funcionar no Safari/Chrome antigo */
  -moz-appearance: none;    /* Para funcionar no Firefox */

  /* 2. Cria uma nova seta usando uma imagem SVG inserida diretamente no código */
  background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23333333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  
  /* 3. Posiciona essa nova seta onde queremos: alinhada à direita, com 16px de respiro, e centralizada no meio */
  background-repeat: no-repeat;
  background-position: right 16px center; 
  background-size: 16px; /* Define o tamanho da setinha */

  /* --------------------------- */

  &:focus {
    border-color: #FA641E;
  }
`;

// Middle-section styles

// Logo do Pigz-fone 
export const PigzLogo = styled.img`
  width: 60%;
`
// Container para colocar a Imagem dentro
export const ImgContainer = styled.div`
  margin: -40px 0;
`;

// Container para toda a seção do meio 
export const ContainerSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const PigzTexto = styled.h1`
  text-align: center;
  color: #333333;
  margin: 40px 40px;
  line-height: 1.2;
  font-weight: bold;
  letter-spacing: 0.6px;
  max-width: 300px;
  font-size: 36px;
  
`;

// Styles dos cards

export const LogoImage = styled.img`
  width: 50%;
`

export const Title = styled.h2`
  font-weight: ;
  color: black;
`
export const GridContainer= styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  

  
`;

export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
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

export const Subtitles = styled.p` 
  color: black;
`
// Line Section Styles

interface StyledLineProps {
  $isActive: boolean; // Avisamos que $isActive existe e é do tipo verdadeiro/falso
}

export const StyledLine = styled.div<StyledLineProps>`
  
  width: 100%;
  height: 4px;
  background-color: ${(props) => (props.$isActive ? '#FA641E' : '#EEEEEE')}; // Laranja se ativo, cinza se inativo
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${(props) => (props.$isActive ? '#FA641E' : '#BDBDBD')};
  }
`;

export const TrailContainer = styled.div`
  margin: 50px auto;
  align-items: center; 
  display: flex;
  width: 70%;
  gap: 12px; /* Controla o espaço exato entre as linhas */
`;