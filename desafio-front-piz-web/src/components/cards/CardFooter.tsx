import { useState } from "react";
import styled from "styled-components";


const TextDiv = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;
  padding: 30px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Text = styled.h2`
    color: black;
    font-size: 32pt;
    font-weight: bold;
    width: 400px;
    margin-bottom: 40px;
`

const Subtitles = styled.p`
    color: black;
    width: 300px;
    font-size: 16pt;
`
export function CardFooter() {
  return (
    <>
      <TextDiv>
        <Text>
          Tudo que você precisa por apenas R$199/mês
        </Text>
        <Subtitles>
          Tenha todas as funcionalidades Pigz sem taxa de adesão, sem comissão por nada venda, sem letrinhas miúdas.
        </Subtitles>
      </TextDiv>
    </>
  )
}
