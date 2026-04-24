# 13 — `Footer.tsx` — Rodapé da aplicação

**Caminho:** `src/components/footer/Footer.tsx`

---

## O que faz

Renderiza o **rodapé (footer)** da landing page. Ele é estruturado em diferentes seções: uma marca inicial com subtítulo, uma grade de colunas contendo links úteis (Sobre, Portal do Parceiro, etc.), informações de contato (Fale Conosco), ícones de redes sociais e botões para download do aplicativo (App Store e Google Play). Na parte inferior, inclui links de termos, privacidade, copyright e o logo da Orange Labs.

---

## Código resumido

```tsx
export function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterContent>
        {/* Top: Logo & Subtitle */}
        <S.FooterBrand>
          <S.FooterLogo src={pigzCinza} alt="Pigz Logo Cinza" />
          <S.FooterSubtitle>Tudo que você precisa.</S.FooterSubtitle>
        </S.FooterBrand>

        {/* Middle: Links Grid */}
        <S.FooterGrid>
           {/* Coluna 1: Pigz (Links) */}
           {/* Coluna 2: Fale Conosco */}
           {/* Coluna 3: Redes Sociais */}
           {/* Coluna 4: App Links (App Store e Google Play) */}
        </S.FooterGrid>
      </S.FooterContent>

      <S.FooterDivider />

      {/* Bottom: Termos, Copyright e Logo Orange Labs */}
      <S.FooterBottom>
        <S.FooterBottomLinks>
           {/* Links de Privacidade e Ajuda */}
        </S.FooterBottomLinks>
        <S.FooterCopyright>
          Pigz © Todos os direitos reservados.
        </S.FooterCopyright>
        <S.OrangeLabsIcon src={logoOrangeLabs} alt="Orange Labs" />
      </S.FooterBottom>
    </S.FooterContainer>
  );
}
```

---

## Funções e APIs do React utilizadas

| Função / API | O que faz aqui |
|---|---|
| **Componente funcional** | `Footer` é uma função que retorna a estrutura JSX final da página. |
| **Named export** | `export function Footer()` — permite importar o componente de forma segura e explícita no `main.tsx`. |

---

## Conceitos de JavaScript / Recursos utilizados

| Conceito / Recurso | Onde aparece |
|---|---|
| **Import de Imagens (PNG)** | Foram importados vários recursos como `pigz-cinza.png`, `selo-app-store.png`, `selo-google-play.png`, logos sociais (`logo-linkedin.png`, `logo-instagram.png`, `logo-facebook.png`, `logo-youtube.png`), ícone `icone-fale-conosco.png` e a logo da `logo-orange-labs.png`. O Vite empacota essas imagens para uso no JSX. |
| **Links externos e âncoras** | Uso de tags `<a>` com `target='_blank'` e `rel="noopener noreferrer"` para navegação segura a redes sociais, lojas de aplicativos e WhatsApp. |
| **Import com namespace (`* as S`)** | Importa os styled components sob o objeto `S`, centralizando os estilos e evitando conflitos. |

---

## Styled Components usados

| Componente | Comportamento |
|---|---|
| `S.FooterContainer` | Container principal do rodapé, englobando todas as seções e definindo cores de fundo e espaçamentos globais. |
| `S.FooterBrand` / `S.FooterLogo` | Agrupa a logo principal do rodapé (`pigzCinza`) e o seu respectivo subtítulo. |
| `S.FooterGrid` | Estrutura de grid ou flexbox que divide o conteúdo intermediário em colunas responsivas. |
| `S.FooterColumn` / `S.FooterColumnTitle` | Coluna individual que organiza os títulos e suas respectivas listas de links. |
| `S.FooterSocialList` / `S.FooterSocialIcon` | Organiza as logos das redes sociais horizontalmente, possivelmente com efeitos de hover em cada ícone. |
| `S.StoreBadge` | `<img>` dos selos de download da App Store e Google Play. |
| `S.FooterDivider` | Uma linha horizontal separando o conteúdo principal da área de copyright. |
| `S.FooterBottom` / `S.OrangeLabsIcon` | Área inferior aglutinando os termos de uso, os direitos reservados e a logo da Orange Labs no canto. |
