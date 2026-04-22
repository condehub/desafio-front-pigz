# 11 — `FeatureCard.tsx` — Card de detalhe laranja

**Caminho:** `src/components/cards/FeatureCard.tsx`

---

## O que faz

Renderiza o **card laranja** que aparece abaixo da trilha de linhas. Exibe o título, a descrição e a imagem da feature selecionada. É renderizado condicionalmente pelo `LineTrail`. Assim como o `LineButton`, é um componente "de apresentação" — recebe dados via props e não tem lógica própria.

---

## Código

```tsx
interface FeatureCardProps {
  titulo: string;
  descricao: string;
  imagemUrl: string;
  imagemAlt: string;
}

export function FeatureCard({ titulo, descricao, imagemUrl, imagemAlt }: FeatureCardProps) {
  return (
    <S.FeatureContainer>
      <S.FeatureTitle>{titulo}</S.FeatureTitle>
      <S.OrangeCard>
        <S.FeatureDescription>{descricao}</S.FeatureDescription>
        <S.FeatureImage src={imagemUrl} alt={imagemAlt} />
      </S.OrangeCard>
    </S.FeatureContainer>
  );
}
```

---

## Funções e APIs do React utilizadas

| Função / API | O que faz aqui |
|---|---|
| **Props** | Recebe `titulo`, `descricao`, `imagemUrl` e `imagemAlt` do `LineTrail`. Cada vez que a aba muda, o `LineTrail` passa props diferentes e o React re-renderiza o card |
| **Componente funcional puro** | Sem estado, sem efeitos — apenas transforma props em visual |

---

## Conceitos de TypeScript utilizados

| Conceito | Onde aparece |
|---|---|
| **Interface** | `interface FeatureCardProps` — define os tipos exatos que cada prop deve ter |
| **`string`** | Tipo de todas as props — `titulo`, `descricao`, `imagemUrl`, `imagemAlt` |

---

## Styled Components usados

| Componente | Comportamento |
|---|---|
| `S.FeatureContainer` | `<div>` em coluna, centralizada, com animação `fadeUp` ao aparecer |
| `S.FeatureTitle` | `<h2>` escuro, `font-size: 32pt`, negrito, abaixo das linhas e acima do card |
| `S.OrangeCard` | `<div>` com `background-color: #FA641E`, bordas bem arredondadas (`40px`), `min-height: 440px` |
| `S.FeatureDescription` | `<p>` branco com texto centralizado |
| `S.FeatureImage` | `<img>` com `max-width: 400px` que fica na parte inferior do card |

### Animação `fadeUp`

O `FeatureContainer` usa um `keyframe` do styled-components que faz o card deslizar de baixo para cima e aparecer com `opacity 0 → 1` toda vez que é montado:

```ts
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; }
`;
```
