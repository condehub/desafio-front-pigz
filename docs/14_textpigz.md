# 14 — `TextPigz.tsx` — Texto Principal do Banner

**Caminho:** `src/components/sections/TextPigz.tsx`

---

## O que faz

Este componente renderiza o conteúdo textual e uma imagem que compõem o texto principal do Hero/Banner da aplicação. 
Atualmente, ele utiliza uma tag `div` com a classe `.texto` para exibir o título principal ("Pigz: tudo que você precisa pra vender mais!"), a imagem representativa de um hambúrguer e um parágrafo de apoio sobre a equipe do Pigz Marketplace.

---

## Código resumido

```tsx
function TextPigz() {
  return (
    <div className="texto">
      <h2>Pigz: tudo que você precisa pra vender mais!</h2>
      <img src='hamburguerFoto'></img>
      <p>Temos uma equipe ansiosa para cadastrar seus produtos no Pigz Marketplace e deixar sua loja prontinha para iniciar as vendas.</p>
    </div>
  )
}

export default TextPigz;
```

---

## Observações

- A estilização está sendo referenciada pela classe `texto` (`className="texto"`), indicando que os estilos podem estar sendo aplicados via classes CSS diretamente em outro arquivo, possivelmente aguardando uma refatoração para Styled Components que o equalize ao restante do projeto.
