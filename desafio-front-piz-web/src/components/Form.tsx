import React, { useState } from "react";
import * as S from "./styles.ts";

export function Form() {
  // 1. A Memória (Estado)
  const [paginaAtual, setPaginaAtual] = useState(1);

  // 2. O Controle Remoto (Função)
  const handleContinuar = () => {
    if (paginaAtual === 1) {
      setPaginaAtual(2);
    } else if (paginaAtual === 2) {
      setPaginaAtual(3);
    } else {
      setPaginaAtual(1); // Retorna ao início
    }
  };

  // 3. O Visual (JSX com Renderização Condicional)
  return (
    <S.FormContainer>
      <S.FormCard>
        <S.FormElement>

          {/* Tela 1: Mostra apenas se paginaAtual for igual a 1 */}
          {paginaAtual === 1 && (
            <>
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

              {/* (Coloquei os inputs de E-mail e Telefone aqui) */}
            </>
          )}

          {/* Tela 2: Mostra apenas se paginaAtual for igual a 2 */}
          {paginaAtual === 2 && (
            <>
              <S.TituloForm>Onde fica a sua loja?</S.TituloForm>
              
              <S.InputGroup>
                <S.Label>CEP</S.Label>
                <S.StyledInput type="text" placeholder="00000-00" />
                <S.InputRow>
                  <S.InputGroup>
                    <S.Label>Estado</S.Label>
                    <S.StyledInput type="text" placeholder="Selecione" />
                  </S.InputGroup>
                <S.InputGroup>
                  


                  <S.Label>Cidade</S.Label>
                  <S.StyledInput type="text" placeholder="Avenida Brasil" />
                </S.InputGroup>
                </S.InputRow>
                
                
                <S.Label>Endereço</S.Label>
                <S.StyledInput type="text" placeholder="123" />
                <S.Label>Complemento</S.Label>
                <S.StyledInput type="text" placeholder="Sala 1" />
              </S.InputGroup>

              {/* (Outros inputs da tela 2: Estado, Cidade, etc) */}
            </>
          )}

          {/* Tela 3: Mostra apenas se paginaAtual for igual a 3 */}
          {paginaAtual === 3 && (
            <>
              <S.TituloForm>Me conta um pouco sobre a sua loja</S.TituloForm>
              
              <S.InputGroup>
                <S.Label>Nome da loja</S.Label>
                <S.StyledInput type="text" placeholder="Restaurante Todo Mundo Gosta" />
                <S.Label>CNPJ da loja</S.Label>
                <S.StyledInput type="text" placeholder="12.345.678/0001-99" />
                <S.Label>Tipo de loja</S.Label>
                <S.StyledSelect>
                  <option value="" disabled selected hidden>Selecione</option>

                  <option value="restaurante">Restaurante</option>
                  <option value="mercado">Mercado</option>
                  <option value="farmacia">Farmácia</option>
                  <option value="Microempreendedor">Microempreendedor</option>
                </S.StyledSelect>
              </S.InputGroup>

              {/* (Outros inputs da tela 3: CNPJ, Tipo de loja) */}
            </>
          )}

          {/* O Aviso Legal se mantém fixo em todas as telas na sua primeira imagem, 
              mas pode ser movido para dentro do bloco da tela 1 se necessário. */}
          <S.AvisoLegal>
            Ao continuar, aceito que a Pigz entre em contato comigo por telefone, e-mail ou WhatsApp.
          </S.AvisoLegal>

          {/* Botão que aciona a mudança de tela */}
          <S.BotaoContinuar type="button" onClick={handleContinuar}>
            {/* O texto do botão muda de acordo com a página atual */}
            {paginaAtual === 1 ? "Continuar" : paginaAtual === 2 ? "Próximo" : "Concluir"}
          </S.BotaoContinuar>

        </S.FormElement>
      </S.FormCard>
    </S.FormContainer>
  );
}