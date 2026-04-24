# 📚 Documentação dos Componentes — Pigz Frontend

Visão geral de todos os componentes construídos no projeto `desafio-front-piz-web`.

---

## Estrutura de arquivos

```
src/
├── main.tsx                        → Ponto de entrada da aplicação
└── components/
    ├── GlobalStyle.ts              → Estilos globais (reset + fonte)
    ├── styles.ts                   → Todos os Styled Components centralizados
    ├── Nav.tsx                     → Seção hero (banner laranja)
    ├── header/
    │   └── Header.tsx              → Barra de navegação fixa no topo
    ├── form/
    │   └── Form.tsx                → Formulário multi-etapas
    ├── buttons/
    │   ├── LineButton.tsx          → Botão de linha individual (trail)
    │   └── LineTrail.tsx           → Trilha de navegação com cards animados
    ├── cards/
    │   ├── Card.tsx                → Cards de funcionalidades (seção 1)
    │   ├── CardFooter.tsx          → Texto de rodapé da seção de cards
    │   ├── FeatureCard.tsx         → Card laranja de detalhe de feature
    │   └── PricingCard.tsx         → Cards de planos e preços
    └── sections/
        └── CardsSection.tsx        → Seção que agrupa imagem, texto e cards
```

---

## Índice dos componentes

| Arquivo | Descrição rápida |
|---|---|
| [01 — main.tsx](./01_main.md) | Raiz da aplicação, monta todos os componentes |
| [02 — GlobalStyle](./02_globalstyle.md) | Reset CSS e fonte Poppins global |
| [03 — Header](./03_header.md) | Navbar fixa com logo e botão |
| [04 — Nav](./04_nav.md) | Banner hero laranja |
| [05 — Form](./05_form.md) | Formulário multi-etapas com `useState` |
| [06 — CardsSection](./06_cardssection.md) | Seção com imagem + texto + cards |
| [07 — Card](./07_card.md) | Grid de cards de funcionalidades |
| [08 — CardFooter](./08_cardfooter.md) | Texto de rodapé da seção de cards |
| [09 — LineButton](./09_linebutton.md) | Botão de linha da trilha |
| [10 — LineTrail](./10_linetrail.md) | Trilha animada com `useState` + `useEffect` |
| [11 — FeatureCard](./11_featurecard.md) | Card de detalhe laranja |
| [12 — PricingCard](./12_pricingcard.md) | Cards de preços e planos |
| [13 -- Footer ]
