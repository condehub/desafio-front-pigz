# 04 — `Nav.tsx` — Banner Hero

**Caminho:** `src/components/Nav.tsx`

---

## O que faz

Renderiza a **seção hero** — o grande banner laranja logo abaixo do Header. Contém o título principal da página, a imagem de hambúrguer com ingredientes flutuantes e o parágrafo de descrição.

---

## Código

```tsx
function Nav() {
  return (
    <S.Texto>
      <S.Container>
        <S.TopSection>
          <S.FirstText>Pigz: tudo o que você precisa para vender ainda mais!</S.FirstText>
          <S.Hamburguer src={hamburguerFoto} alt="Hambúrguer com ingredientes flutuantes" />
        </S.TopSection>

        <S.Paragrafo>
          Temos uma equipe ansiosa para cadastrar seus produtos...
        </S.Paragrafo>
      </S.Container>
    </S.Texto>
  );
}
```

---

## Funções e APIs do React utilizadas

| Função / API | O que faz aqui |
|---|---|
| **Componente funcional** | `Nav` retorna JSX puro, sem estado ou efeitos |
| **Default export** | `export default Nav` — pode ser importado com qualquer nome |

---

## Conceitos de JavaScript utilizados

| Conceito | Onde aparece |
|---|---|
| **Import de imagem (PNG)** | `import hamburguerFoto from '../assets/...'` — Vite resolve e converte em URL |

---

## Styled Components usados

| Componente | Comportamento |
|---|---|
| `S.Texto` | `<section>` com `background-color: #FA641E` (laranja Pigz) + `margin-top: 80px` para não ficar atrás do Header fixo |
| `S.Container` | `<div>` centralizadora com `max-width: 1200px` |
| `S.TopSection` | `<div>` com `flexbox` colocando título e imagem lado a lado |
| `S.FirstText` | `<h2>` branco, `font-size: 40pt`, bem destacado |
| `S.Hamburguer` | `<img>` com `max-width: 60%` e `object-fit: contain` |
| `S.Paragrafo` | `<p>` branco, `font-size: 16pt`, fica abaixo do TopSection |
