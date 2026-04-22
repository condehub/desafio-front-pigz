import * as S from '../styles';
import pigzCinza from '../../assets/pigz-cinza.png';
import seloAppStore from '../../assets/selo-app-store.png';
import seloGooglePlay from '../../assets/selo-google-play.png';

// Placeholders para ícones que você deve adicionar posteriormente
const PlaceholderIcon = ({ name }: { name: string }) => (
  <S.FooterSocialIcon title={name}>{name[0]}</S.FooterSocialIcon>
);

/**
 * Footer
 * -------
 * Rodapé da landing page contendo informações, links úteis, contatos, 
 * redes sociais e botões de download do app.
 */
export function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterContent>
        {/* Top: Logo & Subtitle */}
        <S.FooterBrand>
          <S.FooterLogo src={pigzCinza} alt="Pigz Logo Cinza" />
          <S.FooterSubtitle>Tudo que você precisa.</S.FooterSubtitle>
        </S.FooterBrand>

        {/* Middle: Links Grid */}
        <S.FooterGrid>
          {/* Column 1: Pigz */}
          <S.FooterColumn>
            <S.FooterColumnTitle>Pigz</S.FooterColumnTitle>
            <S.FooterLinkList>
              <S.FooterLink href="#">Sobre</S.FooterLink>
              <S.FooterLink href="#">Portal do Parceiro</S.FooterLink>
              <S.FooterLink href="#">Quero ser um Pigz Partner</S.FooterLink>
            </S.FooterLinkList>
          </S.FooterColumn>

          {/* Column 2: Fale Conosco */}
          <S.FooterColumn>
            <S.FooterColumnTitle>Fale Conosco</S.FooterColumnTitle>
            <S.FooterLinkList>
              <S.FooterContactItem>
                {/* Ícone fale conosco placeholder */}
                <span>💬</span> falecom@pigz.com.br
              </S.FooterContactItem>
              <S.FooterContactItem>
                {/* Ícone telefone placeholder */}
                <span>📞</span> (95) 3224-2603
              </S.FooterContactItem>
            </S.FooterLinkList>
          </S.FooterColumn>

          {/* Column 3: Redes Sociais */}
          <S.FooterColumn>
            <S.FooterColumnTitle>Pigz nas redes</S.FooterColumnTitle>
            <S.FooterSocialList>
              {/* Ícones linkedin, instagram, facebook e youtube */}
              <PlaceholderIcon name="LinkedIn" />
              <PlaceholderIcon name="Instagram" />
              <PlaceholderIcon name="Facebook" />
              <PlaceholderIcon name="YouTube" />
            </S.FooterSocialList>
          </S.FooterColumn>

          {/* Column 4: App Links */}
          <S.FooterColumn>
            <S.FooterAppSection>
              <S.FooterAppTitle>Baixe o App</S.FooterAppTitle>
              <S.FooterAppLinks>
                <a href="https://apps.apple.com/br/app/pigz/id1526557835" target="_blank" rel="noopener noreferrer">
                  <S.StoreBadge src={seloAppStore} alt="Baixar na App Store" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=app.pigz.mart&hl=pt_BR" target="_blank" rel="noopener noreferrer">
                  <S.StoreBadge src={seloGooglePlay} alt="Disponível no Google Play" />
                </a>
              </S.FooterAppLinks>
            </S.FooterAppSection>
          </S.FooterColumn>
        </S.FooterGrid>
      </S.FooterContent>

      <S.FooterDivider />

      {/* Bottom: Termos, Copyright e Logo Orange Labs */}
      <S.FooterBottom>
        <S.FooterBottomLinks>
          <S.FooterBottomLink href="#">Nossos termos</S.FooterBottomLink>
          <S.FooterBottomLink href="#">Privacidade</S.FooterBottomLink>
          <S.FooterBottomLink href="#">Ajuda</S.FooterBottomLink>
        </S.FooterBottomLinks>

        <S.FooterCopyright>
          Pigz © Todos os direitos reservados.
        </S.FooterCopyright>

        {/* Placeholder para ícone orange labs */}
        <S.OrangeLabsIcon>Orange Labs</S.OrangeLabsIcon>
      </S.FooterBottom>
    </S.FooterContainer>
  );
}
