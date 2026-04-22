# 06 — `CardsSection.tsx` — Seção de funcionalidades

**Caminho:** `src/components/sections/CardsSection.tsx`

---

## O que faz

Monta a **seção do meio da página**: imagem do celular Pigz, o título "Você tem um novo Pigzdido!" e os 4 cards de funcionalidades. É basicamente uma cola que organiza outros componentes dentro de containers estilizados.

---

## Código

```tsx
export function Section1() {
  return (
    <>
      <S.ContainerSection>
        <S.ImgContainer>
          <S.PigzLogo src={pigzLogo} />
        </S.ImgContainer>
      </S.ContainerSection>

      <S.ContainerSection>
        <S.PigzTexto>Você tem um novo Pigzdido!</S.PigzTexto>
      </S.ContainerSection>

      <S.ContainerSection>
        <CardContainer />
      </S.ContainerSection>

      <CardFooter />
    </>
  );
}
```

---

## Funções e APIs do React utilizadas

| Função / API | O que faz aqui |
|---|---|
| **Componente funcional** | `Section1` retorna JSX que agrupa outros componentes |
| **Fragment `<></>`** | Agrupa os múltiplos `<S.ContainerSection>` sem criar um `<div>` extra no DOM |

---

## Conceitos de JavaScript utilizados

| Conceito | Onde aparece |
|---|---|
| **Composição de componentes** | `<CardContainer />` e `<CardFooter />` são componentes importados e usados como se fossem tags HTML |

---

## Styled Components usados

| Componente | Comportamento |
|---|---|
| `S.ContainerSection` | `<section>` com flexbox e `justify-content: center` |
| `S.ImgContainer` | `<div>` com `margin: -40px 0` para o efeito de "sobrepor" a seção |
| `S.PigzLogo` | `<img>` do celular com `width: 60%` |
| `S.PigzTexto` | `<h1>` centralizado, negrito, `font-size: 36pt` com `max-width: 400px` |
