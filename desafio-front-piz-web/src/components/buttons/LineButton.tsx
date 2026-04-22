import * as S from '../styles.ts'

/**
 * LineButton
 * -----------
 * Barra clicável usada como indicador de aba no carrossel LineTrail.
 *
 * Props:
 * - isActive: boolean — define se a linha aparece laranja (ativa) ou cinza (inativa).
 * - onClick: () => void — callback para trocar a aba ativa no LineTrail.
 *
 * Estilos: StyledLine (styles.ts)
 */
interface LineButtonProps {
  isActive: boolean;
  onClick: () => void;
}
export function LineButton({ isActive, onClick }: LineButtonProps) {
  return (
    <>
      <S.StyledLine $isActive={isActive} onClick={onClick} />
    </>
  )
}