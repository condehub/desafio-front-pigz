# 09 — `LineButton.tsx` — Botão de linha da trilha

**Caminho:** `src/components/buttons/LineButton.tsx`

---

## O que faz

Renderiza **uma única linha clicável** da trilha de navegação. Muda de cor (laranja ou cinza) dependendo se a aba que representa está ativa ou não. É um componente "burro" — não tem lógica própria, apenas recebe dados e dispara eventos para o pai.

---

## Código

```tsx
interface LineButtonProps {
  isActive: boolean;
  onClick: () => void;
}

export function LineButton({ isActive, onClick }: LineButtonProps) {
  return (
    <>
      <S.StyledLine $isActive={isActive} onClick={onClick} />
    </>
  );
}
```

---

## Funções e APIs do React utilizadas

| Função / API | O que faz aqui |
|---|---|
| **Props** | `isActive` e `onClick` são recebidos do componente pai (`LineTrail`) e controlam o visual e o comportamento |
| **Evento `onClick`** | Passa a função de clique recebida via props direto para o elemento estilizado |

---

## Conceitos de TypeScript utilizados

| Conceito | Onde aparece |
|---|---|
| **Interface** | `interface LineButtonProps` — define o contrato de tipos das props que o componente aceita |
| **`boolean`** | Tipo de `isActive` — só aceita `true` ou `false` |
| **`() => void`** | Tipo de `onClick` — uma função que não retorna nada |
| **Desestruturação de props** | `{ isActive, onClick }` — extrai as propriedades diretamente na assinatura da função |

---

## Styled Components usados

| Componente | Comportamento |
|---|---|
| `S.StyledLine` | `<div>` que recebe a prop `$isActive`. O `$` no prefixo indica que é uma prop customizada (transient prop) — ela controla a cor via função no template literal do styled-component |

### Como a prop `$isActive` funciona no estilo:

```ts
export const StyledLine = styled.div<StyledLineProps>`
  background-color: ${(props) => (props.$isActive ? '#FA641E' : '#EEEEEE')};
  // Laranja se ativo → cinza se inativo
`;
```
