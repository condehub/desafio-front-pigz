import React from 'react';
import styled from 'styled-components';
import pigzLogo from '../assets/pigz-fone.svg'
import * as S from './styles'
import marketplaceLogo from '../assets/marketplace-icon.svg'

const LogoImage = styled.img`
  width: 50%;
`

const Title = styled.h2`
  font-family: 'Poppins';
  font-weight: bold;
`
const CardContainer= styled.div`
  display: flex;
  flex-direction: row;
`

const Subtitles = styled.p`
  font-family: 'Poppins';
`

export function Card() {
  return(
    <CardContainer>
      <LogoImage src='{marketplaceLogo}'/>
      <Title></Title>
    </CardContainer>
  )
}