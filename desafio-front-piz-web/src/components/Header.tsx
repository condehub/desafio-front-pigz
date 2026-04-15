import React from 'react';
import styled from 'styled-components';
import pigzLogo from '../assets/pigz-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo src={pigzLogo} alt="Pigz Logo" />
        <PartnerButton>Já sou parceiro</PartnerButton>
      </HeaderContent>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  background-color: #ffffff;
  padding: 16px 0;
`;

const HeaderContent = styled.div`
  max-width: 1126px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const PartnerButton = styled.button`
  /* 1. CSS padrão do botão */
  background: linear-gradient(90deg, #FA641E 0%, #FF881F 100%);
  color: #ffffff;
  border: none;
  border-radius: 9999px;
  padding: 12px 24px;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0px 4px 14px rgba(250, 100, 30, 0.35);
  transition: all 0.2s ease-in-out;

  /* 2. Efeitos com & */
  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
    box-shadow: 0px 6px 16px rgba(250, 100, 30, 0.45);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0px 2px 8px rgba(250, 100, 30, 0.3);
  }

  /* 3. Responsividade aninhada */
  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

const Logo = styled.img
`height: 40px;
  width: auto;

  @media (max-width: 768px) {
    height: 32px;
  }
`;


