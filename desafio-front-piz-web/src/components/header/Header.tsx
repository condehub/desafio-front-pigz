import React from 'react';
import styled from 'styled-components';
import pigzLogo from '../../assets/pigz-logo.svg'
import * as S from '../styles'

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.Logo src={pigzLogo} alt="Pigz Logo" />
        <S.PartnerButton>Já sou parceiro</S.PartnerButton>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
}



