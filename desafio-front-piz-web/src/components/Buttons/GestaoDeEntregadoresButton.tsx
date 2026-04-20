import styled from "styled-components";
import * as S from '../styles.ts'


export function GestaoDeEntregadoresButton({ isActive, onClick }) {
  return (
    <>
      <S.StyledLine $isActive={isActive} onClick={onClick} />
    </>
  )
}