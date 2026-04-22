import * as S from '../styles'

/**
 * FeatureCard
 * ------------
 * Card laranja que exibe uma funcionalidade do Pigz dentro do carrossel LineTrail.
 *
 * Props:
 * - titulo: string     — título da funcionalidade (ex.: "Pigz Marketplace").
 * - descricao: string  — texto descritivo exibido dentro do card laranja.
 * - imagemUrl: string  — caminho da imagem exibida na base do card.
 * - imagemAlt: string  — texto alternativo da imagem para acessibilidade.
 *
 * Layout:
 * - Título (FeatureTitle) acima do card.
 * - Card laranja (OrangeCard) com descrição + imagem ancorada ao fundo.
 *
 * Estilos: FeatureContainer · FeatureTitle · OrangeCard · FeatureDescription · FeatureImage (styles.ts)
 */
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