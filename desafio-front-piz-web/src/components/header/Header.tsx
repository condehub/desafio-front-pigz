import React from 'react';
import styled from 'styled-components';
import pigzLogo from '../../assets/pigz-logo.svg'
import * as S from '../styles'

/**
 * Header
 * -------
 * Barra de navegação fixa no topo da página.
 *
 * Conteúdo:
 * - Logo da Pigz (SVG), alinhado à esquerda.
 * - Botão "Já sou parceiro" com gradiente laranja, alinhado à direita.
 *
 * Estilos: HeaderContainer · HeaderContent · Logo · PartnerButton (styles.ts)
 */
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


