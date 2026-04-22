# 05 — `Form.tsx` — Formulário multi-etapas

**Caminho:** `src/components/form/Form.tsx`

---

## O que faz

Renderiza um **formulário de cadastro em 3 telas** dentro de um card branco. O usuário avança entre as etapas clicando no botão. Cada etapa coleta informações diferentes:

- **Tela 1:** Nome e e-mail
- **Tela 2:** Endereço (CEP, Estado, Cidade)
- **Tela 3:** Informações da loja (nome, CNPJ, tipo)

---

## Código simplificado

```tsx
export function Form() {
  const [paginaAtual, setPaginaAtual] = useState(1);

  const handleContinuar = () => {
    if (paginaAtual === 1) setPaginaAtual(2);
    else if (paginaAtual === 2) setPaginaAtual(3);
    else setPaginaAtual(1); // volta ao início
  };

  return (
    <S.FormContainer>
      <S.FormCard>
        <S.FormElement>
          {paginaAtual === 1 && ( <> {/* Tela 1 */} </> )}
          {paginaAtual === 2 && ( <> {/* Tela 2 */} </> )}
          {paginaAtual === 3 && ( <> {/* Tela 3 */} </> )}

          <S.BotaoContinuar onClick={handleContinuar}>
            {paginaAtual === 1 ? "Continuar" : paginaAtual === 2 ? "Próximo" : "Concluir"}
          </S.BotaoContinuar>
        </S.FormElement>
      </S.FormCard>
    </S.FormContainer>
  );
}
```

---

## Funções e APIs do React utilizadas

| Função / API | O que faz aqui |
|---|---|
| `useState(1)` | Cria a variável `paginaAtual` (começa em `1`) e a função `setPaginaAtual` para atualizá-la. Toda vez que o estado muda, o React re-renderiza o componente mostrando a nova tela |

---

## Conceitos de JavaScript utilizados

| Conceito | Onde aparece |
|---|---|
| **Renderização condicional com `&&`** | `{paginaAtual === 1 && (<> ... </>)}` — exibe o bloco JSX somente se a condição for verdadeira |
| **Operador ternário `? :`** | Texto do botão muda dinamicamente: `paginaAtual === 1 ? "Continuar" : paginaAtual === 2 ? "Próximo" : "Concluir"` |
| **Arrow function** | `const handleContinuar = () => { ... }` — função que controla a mudança de páginas |
| **Fragment `<></>`** | Agrupa múltiplos elementos JSX sem criar um nó extra no DOM |
| **Condicional `if / else if / else`** | Dentro de `handleContinuar`, decide para qual página ir |

---

## Styled Components usados

| Componente | Comportamento |
|---|---|
| `S.FormContainer` | `<div>` com background laranja que centraliza o card |
| `S.FormCard` | `<section>` branca com bordas arredondadas (`30px`) — o "card" do formulário |
| `S.FormElement` | `<form>` com `flex-direction: column` para empilhar tudo |
| `S.TituloForm` | `<h2>` do título de cada etapa |
| `S.Subtitulo` | `<p>` cinza claro abaixo do título |
| `S.InputGroup` | `<div>` que agrupa label + input |
| `S.Label` | `<label>` com peso 600 |
| `S.StyledInput` | `<input>` com borda arredondada e foco laranja |
| `S.StyledSelect` | `<select>` customizado com seta SVG |
| `S.AvisoLegal` | `<p>` pequeno com aviso de contato |
| `S.BotaoContinuar` | `<button>` laranja com hover |
