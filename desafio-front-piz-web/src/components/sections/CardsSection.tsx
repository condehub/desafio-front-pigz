import React from 'react';
import styled from 'styled-components';
import pigzLogo from '../assets/pigz-fone.svg'
import * as S from '../styles'
import CardContainer from '../cards/Card';
import { CardFooter } from '../cards/CardFooter';





export function Section1() {
  return (
    <>
    <S.ContainerSection>
      <S.ImgContainer>
        <S.PigzLogo src={pigzLogo}></S.PigzLogo>
      </S.ImgContainer>
    </S.ContainerSection>
    <S.ContainerSection>
      <S.PigzTexto>
        Você tem um novo Pigzdido!
      </S.PigzTexto>
    </S.ContainerSection>
    <S.ContainerSection>
      <CardContainer>
      </CardContainer>
    </S.ContainerSection>
    <CardFooter></CardFooter>
    
    </>
  );
}



