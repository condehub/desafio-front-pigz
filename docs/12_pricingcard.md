# 12 — `PricingCard.tsx` — Cards de preços e planos

**Caminho:** `src/components/cards/PricingCard.tsx`

---

## O que faz

Exporta **dois componentes**:

- `PricingCard` — componente genérico e reutilizável que renderiza um único card de plano
- `PricingSection` — monta a seção completa com título, descrição e os dois cards empilhados

---

## Estrutura visual

```
PricingSection (renderizada no main.tsx)
│
├── Título: "E mais: suporte que realmente funciona!"
├── Descrição: "Respostas automáticas e robôs?..."
│
└── PricingSection (styled, coluna)
    ├── PricingCard: Pigz — R$199/mês
    └── PricingCard: Pagamento On-line — 2,99% por transação
```

---

## Código — `PricingCard` (componente reutilizável)

```tsx
interface PricingCardProps {
  title: string;
  subtitle: string;
  features: string[];
  price: string;
  ctaLabel: string;
  onCtaClick?: () => void;
}

export function PricingCard({ title, subtitle, features, price, ctaLabel, onCtaClick }: PricingCardProps) {
  return (
    <S.PricingCardBox>
      <S.PricingHeader>
        <S.PricingTitle>{title}</S.PricingTitle>
        <S.PricingSubtitle>{subtitle}</S.PricingSubtitle>
      </S.PricingHeader>

      <S.PricingFeatureList>
        {features.map((feature) => (
          <S.PricingFeatureItem key={feature}>{feature}</S.PricingFeatureItem>
        ))}
      </S.PricingFeatureList>

      <S.PricingPriceBadge>
        <S.PricingPrice>{price}</S.PricingPrice>
      </S.PricingPriceBadge>

      <S.PricingCTA onClick={onCtaClick}>{ctaLabel}</S.PricingCTA>
    </S.PricingCardBox>
  );
}
```

---

## Funções e APIs do React utilizadas

| Função / API | O que faz aqui |
|---|---|
| **Props** | Todos os textos e lista de features chegam via props — torna o componente 100% reutilizável para os dois cards |
| **Componente funcional** | Sem estado ou efeitos, apenas renderiza o que recebe |

---

## Conceitos de JavaScript utilizados

| Conceito | Onde aparece |
|---|---|
| **`.map()` em array de strings** | `features.map((feature) => <S.PricingFeatureItem key={feature}>...)` — transforma cada string do array em um `<li>` |
| **`key={feature}`** | Usa o texto da feature como chave única do React (funciona pois os textos não se repetem) |
| **Prop opcional `?`** | `onCtaClick?:` — o `?` indica que a prop é opcional; se não for passada, o botão simplesmente não tem handler |

---

## Conceitos de TypeScript utilizados

| Conceito | Onde aparece |
|---|---|
| **Interface** | `interface PricingCardProps` — define o contrato de todos os dados que o card precisa |
| **`string[]`** | Tipo de `features` — um array de strings |
| **`() => void` opcional** | `onCtaClick?: () => void` — função de clique opcional |

---

## Styled Components usados

| Componente | Comportamento |
|---|---|
| `S.PricingWrapper` | Container externo da seção inteira, em coluna, com `font-family: 'Poppins'` |
| `S.PricingSectionHeader` | Centraliza o título e descrição com `max-width: 560px` |
| `S.PricingSectionTitle` | `<h2>` negrito, `font-size: 32pt`, cor `#1a1a1a` |
| `S.PricingSectionDescription` | `<p>` preto, `font-size: 16pt`, `line-height: 1.6` |
| `S.PricingSection` | Container dos cards em coluna com `gap: 24px` |
| `S.PricingCardBox` | O card em si: fundo `#fafafa`, `border-radius: 32px`, `max-width: 500px` |
| `S.PricingHeader` | `<div>` que agrupa título e subtítulo com `text-align: left` |
| `S.PricingTitle` | `<h2>` do nome do plano |
| `S.PricingSubtitle` | `<p>` cinza claro do subtítulo |
| `S.PricingFeatureList` | `<ul>` sem bullet, `text-align: left`, em coluna com `gap: 12px` |
| `S.PricingFeatureItem` | `<li>` preto, `font-size: 13pt` |
| `S.PricingPriceBadge` | `<div>` branca com `border-radius: 50px` — destaca o preço |
| `S.PricingPrice` | `<p>` negrito com o valor do plano |
| `S.PricingCTA` | `<button>` com gradiente laranja, pill shape, hover animado |
