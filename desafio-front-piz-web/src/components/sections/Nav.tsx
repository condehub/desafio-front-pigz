import imgHamburguer from '../../assets/hamburger-with-floating-ingredients.png';
import * as S from '../styles/styles.ts'

function Nav() {
  return (
    <S.SectionLaranja>
  <S.ContainerCentral>
    
    {/* COLUNA ESQUERDA: Agrupa todos os textos juntos */}
    <S.GrupoTexto>
      <S.Titulo>Pigz: tudo que você precisa para vender ainda mais!</S.Titulo>
      <S.Paragrafo>
        Temos uma equipe ansiosa para cadastrar seus produtos no Pigz Marketplace e deixar sua loja prontinha para iniciar as vendas.
      </S.Paragrafo>
    </S.GrupoTexto>

    {/* COLUNA DIREITA: Apenas a imagem */}
    <S.Hamburguer src={imgHamburguer} alt="Hambúrguer flutuando com ingredientes soltos" />

  </S.ContainerCentral>
</S.SectionLaranja>
  );
}

export default Nav;