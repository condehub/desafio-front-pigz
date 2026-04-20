import { useState
 } from "react";
import { LineButton } from "./LineButton";
import * as S from '../styles'


export function LineTrail(){
  const [abaAtiva, setAbaAtiva] = useState('pigz-marketplace');

  return(
    <S.TrailContainer>

    <LineButton isActive={abaAtiva === 'pigz-marketplace'} onClick={() => setAbaAtiva('pigz-marketplace')} />

    <LineButton isActive={abaAtiva === 'pigz-gestao'} onClick={() => setAbaAtiva('pigz-gestao')} />

    <LineButton isActive={abaAtiva === 'delivery-gestao'} onClick={() => setAbaAtiva('delivery-gestao')} />

    <LineButton isActive={abaAtiva === 'online-payment'} onClick={() => setAbaAtiva('online-payment')} />

    </S.TrailContainer>
  )
  
}