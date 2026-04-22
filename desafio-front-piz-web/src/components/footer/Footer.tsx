import * as S from '../styles';
import pigzCinza from '../../assets/pigz-cinza.png';
import seloAppStore from '../../assets/selo-app-store.png';
import seloGooglePlay from '../../assets/selo-google-play.png';

export function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterContent>
        <S.FooterBrand>
          <S.FooterLogo src={pigzCinza} alt="Pigz Logo Cinza" />
          <S.FooterSubtitle>Tudo que você precisa.</S.FooterSubtitle>
        </S.FooterBrand>

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
      </S.FooterContent>

      <S.FooterDivider />

      <S.FooterCopyright>
        Pigz © Todos os direitos reservados.
      </S.FooterCopyright>
    </S.FooterContainer>
  );
}
