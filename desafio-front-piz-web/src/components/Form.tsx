import React, { useState } from "react";
import styled from "styled-components";
import * as S from "./styles.ts"
// Container apenas para centralizar na tela


export function Form() {
  return (
    <S.FormContainer>
      <S.FormCard>
        <S.FormElement>
          <S.TituloForm>Quero vender no Pigz</S.TituloForm>
          <S.Subtitulo>Dê o primeiro passo para aumentar suas vendas</S.Subtitulo>

          <S.InputGroup>
            <S.Label>Nome</S.Label>
            <S.StyledInput type="text" placeholder="Leonercio Goesfeeld" />
          </S.InputGroup>

          <S.InputGroup>
            <S.Label>E-mail</S.Label>
            <S.StyledInput type="email" placeholder="leonercio.goesfeeld@email.com" />
          </S.InputGroup>

          <S.InputGroup>
            <S.Label>Telefone</S.Label>
            <S.PhoneContainer>
              <S.PhonePrefix>
                🇧🇷 +55
              </S.PhonePrefix>
              <S.PhoneInput type="tel" placeholder="(95) " />
            </S.PhoneContainer>
          </S.InputGroup>

          <S.AvisoLegal>
            Ao continuar, aceito que a Pigz entre em contato comigo por telefone, e-mail ou WhatsApp.
          </S.AvisoLegal>

          <S.BotaoContinuar type="button">Continuar</S.BotaoContinuar>
        </S.FormElement>
      </S.FormCard>
    </S.FormContainer>
  );
}