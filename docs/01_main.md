# 01 — `main.tsx` — Ponto de entrada da aplicação

**Caminho:** `src/main.tsx`

---

## O que faz

É o arquivo raiz do React. Ele importa todos os componentes e os **monta em ordem** dentro do `#root` do HTML. Pense nele como o "diretor de palco" — ele não tem lógica própria, apenas decide quem aparece e em que ordem na tela.

---

## Código resumido

```tsx
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <Header />
    <Nav />
    <Form />
    <Section1 />
    <LineTrail />
    <PricingSection />
  </StrictMode>
)
```

---

## Funções e APIs do React utilizadas

| Função / API | O que faz aqui |
|---|---|
| `createRoot()` | Cria a raiz do React e conecta ao `<div id="root">` do HTML |
| `render()` | Renderiza a árvore de componentes dentro da raiz criada |
| `<StrictMode>` | Ativa verificações extras durante o desenvolvimento (detecta efeitos colaterais e APIs depreciadas) |

---

## Conceitos de JavaScript utilizados

| Conceito | Onde aparece |
|---|---|
| **Operador `!` (non-null assertion)** | `getElementById('root')!` — diz ao TypeScript que o elemento nunca será `null` |
| **Módulos ES (import/export)** | Todos os `import` no topo do arquivo |
