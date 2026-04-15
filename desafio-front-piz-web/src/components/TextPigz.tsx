import React from 'react';
import styled from 'styled-components';
import hamburguerFoto from '../assets/hamburger-with-floating-ingredients.png'


const texto = styled.section`
  background-color: #FA641E`

const firstText = styled.h2`
  color: #FFFFFF

`
function TextPigz() {
  return (
    <text
      <h2 className='first-text'>Pigz: tudo que você precisa pra vender mais!</h2>
      <img src={hamburguerFoto}></img>
      <p>Temos uma equipe ansiosa para cadastrar seus produtos no Pigz Marketplace e deixar sua loja prontinha para iniciar as vendas.</p>
    </section>
  )
}

export default TextPigz;