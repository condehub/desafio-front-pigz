import React from 'react';
import styled from 'styled-components';
import pigzLogo from '../assets/pigz-fone.svg'
import * as S from './styles'

const PigzLogo = styled.img`
  width: 30%;
`

const ImgContainer = styled.div`

`;

const Container = styled.section`
  display: flex:
  flex-direction: row;
`




export function Section1() {
  return (
    <Container>
     <ImgContainer>
        <PigzLogo src={pigzLogo}></PigzLogo>
      </ImgContainer>
    </Container>
  );
}



