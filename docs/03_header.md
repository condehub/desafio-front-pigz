# 03 — `Header.tsx` — Barra de navegação

**Caminho:** `src/components/header/Header.tsx`

---

## O que faz

Renderiza a **navbar fixa no topo** da página com o logo da Pigz à esquerda e o botão "Já sou parceiro" à direita. Por ser `position: fixed`, ela permanece visível mesmo quando o usuário rola a página.

---

## Código

```tsx
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
```

---

## Funções e APIs do React utilizadas

| Função / API | O que faz aqui |
|---|---|
| **Componente funcional** | `Header` é uma função que retorna JSX — o padrão moderno do React |
| **Named export** | `export function Header()` — permite importar pelo nome exato |

---

## Conceitos de JavaScript utilizados

| Conceito | Onde aparece |
|---|---|
| **Import de imagem (SVG)** | `import pigzLogo from '../../assets/pigz-logo.svg'` — o Vite transforma o SVG em uma URL utilizável como `src` |
| **Import com namespace (`* as S`)** | Importa todos os styled components de `styles.ts` sob o objeto `S`, evitando conflitos de nomes |

---

## Styled Components usados

| Componente | Comportamento |
|---|---|
| `S.HeaderContainer` | `<header>` com `position: fixed`, ocupa 100% da largura |
| `S.HeaderContent` | `<div>` com `flexbox` para separar logo e botão (`space-between`) |
| `S.Logo` | `<img>` com altura de 40px |
| `S.PartnerButton` | `<button>` com gradiente laranja, bordas pill e hover animado |
