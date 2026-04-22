# 07 — `Card.tsx` — Grid de cards de funcionalidades

**Caminho:** `src/components/cards/Card.tsx`

---

## O que faz

Renderiza os **4 cards de funcionalidades** do Pigz (Marketplace, É fácil e rápido, Pigz Gestão, Vias de impressão), cada um com ícone, título e subtítulo.

---

## Código simplificado

```tsx
function CardContainer() {
  const [cards] = useState([
    { id: 1, icon: marketplaceLogo, title: 'Marketplace', subtitle: 'Pra sua loja vender mais' },
    { id: 2, icon: phoneLogo, title: 'É fácil e rápido', subtitle: 'Fazer um pedido no Pigz' },
    { id: 3, icon: pigzGestao, title: 'Pigz Gestão', subtitle: 'Você no controle, sempre' },
    { id: 4, icon: printerLogo, title: 'Vias de impressão', subtitle: 'Personalizáveis' },
  ]);

  return (
    <div className="card-container">
      {cards.map((card) => (
        <S.GridContainer>
          <S.CardWrapper key={card.id}>
            <S.LogoImage src={card.icon} />
            <S.Title>{card.title}</S.Title>
            <S.Subtitles>{card.subtitle}</S.Subtitles>
          </S.CardWrapper>
        </S.GridContainer>
      ))}
    </div>
  );
}
```

---

## Funções e APIs do React utilizadas

| Função / API | O que faz aqui |
|---|---|
| `useState([...])` | Armazena o array de dados dos cards. O `[cards]` sem setter indica que os dados são **somente leitura** — nunca mudam após a criação |

---

## Conceitos de JavaScript utilizados

| Conceito | Onde aparece |
|---|---|
| **Array de objetos** | Cada card é um objeto `{ id, icon, title, subtitle }` dentro de um array |
| **`.map()`** | Itera o array de cards e transforma cada objeto em um trecho de JSX |
| **`key`** | Propriedade especial do React no `.map()`: usa `card.id` para identificar cada item e otimizar re-renderizações |
| **Desestruturação implícita** | `card.icon`, `card.title` etc. acessam campos do objeto diretamente |

---

## Styled Components usados

| Componente | Comportamento |
|---|---|
| `S.GridContainer` | `<div>` com flexbox em coluna, `gap: 20px` |
| `S.CardWrapper` | `<div>` com fundo `#FAFAFA`, `border-radius: 20%`, hover com borda e sombra |
| `S.LogoImage` | `<img>` do ícone com `width: 50%` |
| `S.Title` | `<h2>` negrito preto |
| `S.Subtitles` | `<p>` preto |
