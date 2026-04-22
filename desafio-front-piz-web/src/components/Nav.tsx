import React from 'react';
import styled from 'styled-components';
import hamburguerFoto from '../assets/hamburger-with-floating-ingredients.png';
import * as S from './styles.ts'
import { Form } from './form/Form.tsx';

/**
 * Nav
 * ----
 * Seção hero principal da landing page, renderizada logo abaixo do Header fixo.
 *
 * Layout:
 * - Fundo laranja (#FA641E) com overflow hidden para cortar a imagem à direita.
 * - TopSection: título à esquerda + imagem do hambúrguer cortada à direita.
 * - Parágrafo descritivo abaixo do TopSection.
 *
 * Estilos: Texto · Container · TopSection · FirstText · Hamburguer · Paragrafo (styles.ts)
 */

function Nav() {
  return (
    <S.Texto>
      <S.Container>
        
        {/* PRIMEIRA DIV: Título e Imagem lado a lado */}
        <S.TopSection>
          <S.FirstText>Pigz: tudo o que você precisa para vender ainda mais!</S.FirstText>
          <S.Hamburguer src={hamburguerFoto} alt="Hambúrguer com ingredientes flutuantes" />
        </S.TopSection>

        {/* SEGUNDO TEXTO: Fica embaixo de ambos */}
        <S.Paragrafo>
          Temos uma equipe ansiosa para cadastrar seus produtos no Pigz Marketplace e deixar sua loja prontinha para iniciar as vendas.
        </S.Paragrafo>

      </S.Container>
    </S.Texto>
  );
}

export default Nav;