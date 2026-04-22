# 02 — `GlobalStyle.ts` — Estilos globais

**Caminho:** `src/components/GlobalStyle.ts`

---

## O que faz

Define regras CSS que se aplicam a **toda a aplicação** de uma vez. É o primeiro componente renderizado no `main.tsx`, garantindo que tudo abaixo dele herde o reset e a fonte padrão.

---

## Código

```ts
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "poppins", sans-serif;
  }

  body {
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  button, input, textarea {
    font-family: inherit;
  }
`;
```

---

## Funções e APIs utilizadas

| Função / API | O que faz aqui |
|---|---|
| `createGlobalStyle` (styled-components) | Cria um componente especial cujo CSS é injetado globalmente no `<head>`, sem escopo local |

---

## Conceitos importantes

| Conceito | Detalhe |
|---|---|
| **Seletor `*`** | Aplica margin/padding zero e `box-sizing: border-box` a todos os elementos — impede comportamentos inesperados de espaçamento |
| **`font-family: "poppins"`** | Define a fonte padrão de todo o projeto. Como está no `*`, qualquer elemento herda automaticamente |
| **`font-family: inherit`** | Faz buttons e inputs (que normalmente ignoram herança de fonte) também usarem Poppins |
| **`overflow-x: hidden`** | Evita scroll horizontal indesejado |
