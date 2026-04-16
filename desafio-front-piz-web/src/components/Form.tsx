import React, { useState } from "react";
import styled from "styled-components";



const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
  `
const FormDiv = styled.section`
  border: 5px solid red;
  display: flex;
  justify-content: center;
  width: 800px;
  border-radius: 20px;
  height: 500px;
  `
const Form1 = styled.form`
  `

const TituloForm = styled.h1`
  color: black;
  font-size: 28pt;
  margin: 10px 5px;
  font-family: "poppins", sans-serif;
  font-weight: 700;
  font-style: normal;
`
const TextoForm = styled.p`
  `
export function Form() {
  return (
    <FormContainer>
       <FormDiv>
        <Form1>
          <TituloForm>Quero Vender no Pigz</TituloForm>
          <p>Dê o primeiro passo para aumentar suas vendas</p>
          <label>Nome</label>
          <br />
          <input type="text"/>
          <label>E-mail</label>
          <br />
          <input type="text"/>
          <label>Telefone</label>
          <br />
          <input type="text"/>
        </Form1>
      </FormDiv>
    
    </FormContainer>
   
  );
}
