import * as S from '../styles'

interface FeatureCardProps {
  titulo: string;
  descricao: string;
  imagemUrl: string;
  imagemAlt: string;
}

export function FeatureCard({ titulo, descricao, imagemUrl, imagemAlt }: FeatureCardProps) {
  return (
    <S.FeatureContainer>
      <S.FeatureTitle>{titulo}</S.FeatureTitle>

      <S.OrangeCard>
        <S.FeatureDescription>{descricao}</S.FeatureDescription>
        <S.FeatureImage src={imagemUrl} alt={imagemAlt} />
      </S.OrangeCard>
    </S.FeatureContainer>

  )
}