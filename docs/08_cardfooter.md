# 08 — `CardFooter.tsx` — Rodapé da seção de cards

**Caminho:** `src/components/cards/CardFooter.tsx`

---

## O que faz

Renderiza um **bloco de texto** que aparece logo abaixo dos 4 cards de funcionalidades. Reforça a proposta de valor do plano com um título grande e uma frase explicativa.

---

## Código

```tsx
export function CardFooter() {
  return (
    <>
      <TextDiv>
        <Text>Tudo que você precisa por apenas R$199/mês</Text>
        <SubtitlesFooter>
          Tenha todas as funcionalidades Pigz sem taxa de adesão,
          sem comissão por nenhuma venda, sem letrinhas miúdas.
        </SubtitlesFooter>
      </TextDiv>
    </>
  );
}
```

---

## Funções e APIs do React utilizadas

| Função / API | O que faz aqui |
|---|---|
| **Componente funcional** | Retorna JSX estático, sem estado ou efeitos |
| **Named export** | `export function CardFooter()` |
| **Fragment `<></>`** | Evita wrapper desnecessário |

---

## Observação sobre os estilos

Este componente define seus próprios styled components **localmente** (dentro do próprio arquivo), ao invés de usar o `styles.ts` central. Isso é uma escolha válida para componentes simples e autocontidos.

```ts
const TextDiv = styled.div`...`
const Text = styled.h2`...`
const SubtitlesFooter = styled.p`...`
```

| Componente local | Comportamento |
|---|---|
| `TextDiv` | `<div>` centralizada com flexbox em coluna, padding vertical |
| `Text` | `<h2>` preto, `font-size: 32pt`, negrito, `width: 400px` |
| `SubtitlesFooter` | `<p>` preto, `font-size: 16pt`, `width: 320px` |
