# 10 — `LineTrail.tsx` — Trilha de navegação animada

**Caminho:** `src/components/buttons/LineTrail.tsx`

---

## O que faz

É o componente mais **complexo do projeto**. Exibe uma trilha de 4 linhas clicáveis e um card de feature que muda automaticamente a cada 10 segundos ou quando o usuário clica em uma linha.

---

## Código simplificado

```tsx
const ORDEM_DAS_ABAS = ['pigz-marketplace', 'pigz-gestao', 'delivery-gestao', 'online-payment'];

export function LineTrail() {
  const [abaAtiva, setAbaAtiva] = useState('pigz-marketplace');

  useEffect(() => {
    const relogio = setInterval(() => {
      setAbaAtiva((abaAtual) => {
        const ondeEstou = ORDEM_DAS_ABAS.indexOf(abaAtual);
        const proximaParada = (ondeEstou + 1) % ORDEM_DAS_ABAS.length;
        return ORDEM_DAS_ABAS[proximaParada];
      });
    }, 10000);

    return () => clearInterval(relogio);
  }, []);

  return (
    <>
      <S.TrailContainer>
        <LineButton isActive={abaAtiva === 'pigz-marketplace'} onClick={() => setAbaAtiva('pigz-marketplace')} />
        {/* ... demais LineButtons ... */}
      </S.TrailContainer>

      <S.ConteudoContainer>
        {abaAtiva === 'pigz-marketplace' && <FeatureCard titulo="..." descricao="..." imagemUrl={...} />}
        {/* ... demais FeatureCards ... */}
      </S.ConteudoContainer>
    </>
  );
}
```

---

## Funções e APIs do React utilizadas

| Função / API | O que faz aqui |
|---|---|
| `useState('pigz-marketplace')` | Armazena qual aba está ativa no momento. Começa na primeira |
| `useEffect(() => { ... }, [])` | Executa o código do timer **uma vez** após o componente aparecer na tela. O `[]` vazio como dependência garante que não se repete |
| **Função de cleanup do `useEffect`** | `return () => clearInterval(relogio)` — limpa o timer quando o componente é removido da tela, evitando vazamento de memória |

---

## Conceitos de JavaScript utilizados

| Conceito | Onde aparece |
|---|---|
| **`setInterval(fn, 10000)`** | Executa a função a cada 10.000ms (10 segundos) |
| **`clearInterval(relogio)`** | Para o timer pelo ID retornado pelo `setInterval` |
| **`.indexOf(abaAtual)`** | Encontra a posição da aba atual no array |
| **Operador módulo `%`** | `(ondeEstou + 1) % ORDEM_DAS_ABAS.length` — faz o índice "dar a volta" de 3 para 0 (loop infinito) |
| **Callback no `setState`** | `setAbaAtiva((abaAtual) => ...)` — usa o valor mais atual do estado (não o valor capturado no closure) — essencial dentro de `setInterval` |
| **Constante de array fora do componente** | `ORDEM_DAS_ABAS` é declarada fora do componente para não ser recriada a cada renderização |
| **Renderização condicional com `&&`** | Exibe o `FeatureCard` correto de acordo com `abaAtiva` |

---

## Styled Components usados

| Componente | Comportamento |
|---|---|
| `S.TrailContainer` | `<div>` com flexbox em linha para as 4 linhas, `width: 70%`, centralizado |
| `S.ConteudoContainer` | `<div>` que centraliza o card de feature com padding entre as linhas e o card |
