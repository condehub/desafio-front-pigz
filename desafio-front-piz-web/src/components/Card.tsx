import React from 'react';
import styled from 'styled-components';
import pigzLogo from '../assets/pigz-fone.svg'
import * as S from './styles'
import marketplaceLogo from '../assets/marketplace-icon.svg'

const LogoImage = styled.img`
  width: 50%;
`


export function Card() {
  return(
      <LogoImage src='{marketplaceLogo}'>
  )
}