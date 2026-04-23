import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1; /* Termina totalmente visível */ranslateY(0);
  }
`;


export const HeaderContainer = styled.header`
  width: 100%;
  background-color: #ffffff;
  padding: 16px 0;
  position: fixed;
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
  font-size: 16pt;
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
    font-size: 14pt;
  }
`;

export const Logo = styled.img`
  height: 40px;
  width: auto;

  @media (max-width: 768px) {
    height: 32px;
  }
`;

// --- ESTILOS PRINCIPAIS ---

export const Texto = styled.section`
  margin-top: 80px;
  background-color: #FA641E;
  color: #FFFFFF;
  padding: 32px 0 32px 32px;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FirstText = styled.h2`
  font-size: 40pt;
  font-weight: bold;
  margin: 0;
  line-height: 1.1;
  text-align: left;
  flex: 1;
  min-width: 0;

  @media (max-width: 768px) {
    font-size: 26pt;
  }
`;

export const Hamburguer = styled.img`
  flex-shrink: 0;
  width: 40%;
  height: auto;
  object-fit: contain;
  margin-right: -70px;
  align-self: center;

  @media (max-width: 768px) {
    width: 46%;
    margin-right: -50px;
  }
`;

export const Paragrafo = styled.p`
  font-size: 14pt;
  line-height: 1.5;
  margin: 0;
  max-width: 58%;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 12pt;
    max-width: 62%;
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
  max-width: 600px; /* Largura ideal para esse tipo de card */
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
  font-size: 24pt;
  margin: 0 0 8px 0;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 20pt;
  }
`;

export const Subtitulo = styled.p`
  margin-bottom: 4px;
  text-align: left;
  font-size: 14pt;
  color: #666666;
  margin: 0 0 24px 0;

  @media (max-width: 768px) {
    font-size: 12pt;
  }
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
  font-size: 14pt;
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
  font-size: 14pt;
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
  font-size: 14pt;
  color: #888888;
  border-right: 1px solid #CCCCCC; /* Linha divisória */
`;

export const PhoneInput = styled.input`
  color: black;
  background-color: white;
  border: none;
  padding: 14px;
  font-size: 14pt;
  flex: 1; /* Ocupa o restante do espaço */
  outline: none;

  &::placeholder {
    color: #BBBBBB;
  }
`;
/* -------------------------------------- */

export const AvisoLegal = styled.p`
  font-size: 11pt;
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
  font-size: 16pt;
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
  font-size: 14pt;
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
  max-width: 200px;
  width: 40%;
  display: block;

  @media (max-width: 768px) {
    max-width: 140px;
    width: 35%;
  }
`;

// Container para colocar a Imagem dentro
export const ImgContainer = styled.div`
  margin-top: -60px;
  display: flex;
  justify-content: center;
  width: 100%;
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
  margin-top: 80px;
  margin-bottom: 40px;
  margin-left: 20px;
  margin-right: 20px;
  line-height: 1.2;
  font-weight: bold;
  letter-spacing: 0.6px;
  max-width: 400px;
  font-size: 36pt;
  
  @media (max-width: 768px) {
    font-size: 28pt;
    margin-top: 80px;
    margin-left: 16px;
    margin-right: 16px;
    max-width: 100%;
  }
`;

// Styles dos cards

export const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-bottom: 8px;
`

export const Title = styled.h2`
  font-weight: bold;
  color: black;
  font-size: 14pt;

  @media (max-width: 768px) {
    font-size: 13pt;
  }
`;
export const GridContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  justify-content: center;
  align-items: stretch;
  width: 100%;
`;

export const CardWrapper = styled.div`
  flex: 1;
  min-width: 140px;
  max-width: 240px; /* Limita a largura máxima do card */
  background-color: #FAFAFA;
  border-radius: 16px;
  padding: 32px 12px;
  border: 1px solid transparent;
  transition: border 0.15s;
  text-align: center;
  cursor: pointer;

  /* Tablet: 2 cards por linha */
  @media (max-width: 1024px) {
    flex: 0 1 calc(50% - 10px);
    max-width: 240px; 
  }

  /* Mobile: 1 card por linha */
  @media (max-width: 600px) {
    flex: 0 1 100%;
    max-width: 240px;
  }

  &:hover {
    border: 3px solid #E0E0E0;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const Subtitles = styled.p` 
  color: black;
  font-size: 12pt;

  @media (max-width: 768px) {
    font-size: 11pt;
  }
`;
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

// FeatureCard Container
export const ConteudoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  
  padding-top: 20px; 
  padding-bottom: 20px;
`;

export const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 480px;
  padding: 0 16px;

  // animation fade up
  animation: ${fadeUp} 0.5s ease-out;
`;

export const FeatureTitle = styled.h2`
  font-size: 28pt;
  font-weight: 700;
  color: black;
  margin-bottom: 16px;

  text-align: center;

  @media (max-width: 768px) {
    font-size: 20pt;
  }
`;

export const OrangeCard = styled.div`
  background-color: #FA641E;
  border-radius: 40px;
  width: 90%;
  max-width: 600px;
  min-height: 320px;
  padding: 32px 40px 0 40px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  justify-content: flex-start;
  gap: 16px;

  @media (max-width: 768px) {
    border-radius: 24px;
    padding: 24px 20px 0 20px;
    min-height: auto;
    gap: 16px;
  }
`;

export const FeatureDescription = styled.p`
  color: white;
  text-align: center;
  font-size: 14pt;
  line-height: 1.5;
  margin-bottom: 0;
  width: 100%;
  max-width: 390px;
  
  @media (max-width: 768px) {
    font-size: 13px;
    max-width: 100%;
    padding: 0 10px;
  }
`;

export const FeatureImage = styled.img`
  width: 100%;
  max-width: 380px;
  display: block;
  margin-top: 8px;`;

// --- PRICING CARD STYLES ---

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  gap: 40px;
  font-family: 'Poppins', sans-serif;
`;

export const PricingSectionHeader = styled.div`
  text-align: center;
  max-width: 560px;
`;

export const PricingSectionTitle = styled.h2`
  font-size: 32pt;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.2;
  margin: 0 0 16px 0;

  @media (max-width: 768px) {
    font-size: 20pt;
  }
`;

export const PricingSectionDescription = styled.p`
  font-size: 16pt;
  color: black;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14pt;
  }
`;

export const PricingSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
  }
`;

interface HighlightProps {
  $isHighlighted?: boolean;
}

export const PricingCardBox = styled.div<HighlightProps>`
  background-color: ${(props) => (props.$isHighlighted ? '#FA641E' : '#fafafa')};
  border-radius: 32px;
  padding: 36px 32px 32px;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const PricingHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
`;

export const PricingTitle = styled.h2<HighlightProps>`
  font-size: 28pt;
  font-weight: 700;
  color: ${(props) => (props.$isHighlighted ? '#ffffff' : '#1a1a1a')};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 20pt;
  }
`;

export const PricingSubtitle = styled.p<HighlightProps>`
  font-size: 14pt;
  color: ${(props) => (props.$isHighlighted ? '#ffffff' : '#888888')};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 12pt;
  }
`;

export const PricingFeatureList = styled.ul`
  list-style: none;
  text-align: left;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const PricingFeatureItem = styled.li<HighlightProps>`
  font-size: 13pt;
  color: ${(props) => (props.$isHighlighted ? '#ffffff' : 'black')};
  padding-left: 0;
`;

export const PricingPriceBadge = styled.div`
  background-color: #ffffff;
  border-radius: 50px;
  padding: 16px 24px;
  display: inline-flex;
  align-self: flex-start;
`;

export const PricingPrice = styled.p`
  font-size: 15pt;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
`;

export const PricingCTA = styled.button<HighlightProps>`
  background: ${(props) => (props.$isHighlighted ? '#ffffff' : 'linear-gradient(90deg, #FA641E 0%, #FF881F 100%)')};
  color: ${(props) => (props.$isHighlighted ? '#FA641E' : '#ffffff')};
  border: none;
  border-radius: 9999px;
  padding: 18px 24px;
  font-size: 15pt;
  cursor: pointer;
  box-shadow: 0px 6px 20px rgba(250, 100, 30, 0.35);
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0px 8px 24px rgba(250, 100, 30, 0.45);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0px 4px 12px rgba(250, 100, 30, 0.3);
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const ContactText = styled.span`
  font-size: 16pt;
  color: black;
`;

export const ContactPhoneWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ContactIcon = styled.img`
  width: 28px;
  height: 28px;
`;

export const ContactPhoneNumber = styled.span`
  font-size: 16pt;
  color: black;
`;

// --- FOOTER STYLES ---

export const FooterContainer = styled.footer`
  background-color: #FAFAFA;
  padding: 60px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #EEEEEE;
  text-align: left;
`;

export const FooterContent = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
`;

export const FooterLogo = styled.img`
  width: 120px;
  height: auto;
`;

export const FooterSubtitle = styled.p`
  font-size: 14pt;
  color: #666666;
  margin: 0;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;
  width: 100%;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`;

export const FooterColumnTitle = styled.h3`
  font-size: 16pt;
  color: #333333;
  margin: 0;
  font-weight: 600;
`;

export const FooterLinkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FooterLink = styled.a`
  font-size: 14pt;
  color: #666666;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #FA641E;
  }
`;

export const FooterContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14pt;
  color: #666666;
`;

export const FooterSocialList = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const FooterSocialIcon = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const FooterAppSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`;

export const FooterAppTitle = styled.h3`
  font-size: 16pt;
  color: #333333;
  margin: 0;
  font-weight: 600;
`;

export const FooterAppLinks = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const StoreBadge = styled.img`
  height: 40px;
  width: auto;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const FooterDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #EEEEEE;
  margin: 40px 0 20px;
  max-width: 1000px;
`;

export const FooterBottom = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FooterBottomLinks = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;

export const FooterBottomLink = styled.a`
  font-size: 12pt;
  color: #666666;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #FA641E;
  }
`;

export const FooterCopyright = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 12pt;
  color: #888888;
`;

export const OrangeLabsIcon = styled.img`
  height: 32px;
  width: auto;
  object-fit: contain;
`;