import * as S from '../styles.ts'

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