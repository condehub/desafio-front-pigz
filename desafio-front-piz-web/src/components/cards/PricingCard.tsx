import * as S from '../styles/styles';
import whatsappIcon from '../../assets/whatsapp-icon.png';

/**
 * PricingCard
 * ------------
 * Card reutilizável de plano/preço. Suporta modo de destaque (isHighlighted).
 *
 * Props:
 * - title: string           — nome do plano (ex.: "Pigz").
 * - subtitle: string        — tagline do plano.
 * - features: string[]      — lista de funcionalidades inclusas.
 * - price: string           — valor do plano (ex.: "R$199/mês").
 * - ctaLabel: string        — texto do botão de ação.
 * - isHighlighted?: boolean — quando true, inverte cores (fundo laranja, textos e botão branco).
 * - onCtaClick?: () => void — callback opcional ao clicar no botão.
 *
 * Estilos: PricingCardBox · PricingHeader · PricingTitle · PricingSubtitle ·
 *          PricingFeatureList · PricingFeatureItem · PricingPriceBadge ·
 *          PricingPrice · PricingCTA (styles.ts)
 *
 * ---
 *
 * PricingSection
 * ---------------
 * Seção completa de planos. Renderiza dois PricingCards lado a lado (desktop)
 * ou empilhados (mobile), seguidos de um bloco de contato via WhatsApp.
 *
 * Estilos: PricingWrapper · PricingSectionHeader · PricingSectionTitle ·
 *          PricingSectionDescription · PricingSection · ContactWrapper ·
 *          ContactText · ContactPhoneWrapper · ContactIcon · ContactPhoneNumber (styles.ts)
 */
interface PricingCardProps {
  title: string;
  subtitle: string;
  features: string[];
  price: string;
  ctaLabel: string;
  isHighlighted?: boolean;
  onCtaClick?: () => void;
}

export function PricingCard({ title, subtitle, features, price, ctaLabel, isHighlighted, onCtaClick }: PricingCardProps) {
  return (
    <S.PricingCardBox $isHighlighted={isHighlighted}>
      <S.PricingHeader>
        <S.PricingTitle $isHighlighted={isHighlighted}>{title}</S.PricingTitle>
        <S.PricingSubtitle $isHighlighted={isHighlighted}>{subtitle}</S.PricingSubtitle>
      </S.PricingHeader>

      <S.PricingFeatureList>
        {features.map((feature) => (
          <S.PricingFeatureItem $isHighlighted={isHighlighted} key={feature}>{feature}</S.PricingFeatureItem>
        ))}
      </S.PricingFeatureList>

      <S.PricingPriceBadge>
        <S.PricingPrice>{price}</S.PricingPrice>
      </S.PricingPriceBadge>

      <S.PricingCTA $isHighlighted={isHighlighted} onClick={onCtaClick}>{ctaLabel}</S.PricingCTA>
    </S.PricingCardBox>
  );
}


export function PricingSection() {
  const pigzFeatures = [
    'Pigz Marketplace',
    'Página exclusiva',
    'Pigz Gestão Desktop e Mobile',
    'Gestão de entregadores',
    'Vias de impressão personalizáveis',
  ];

  const paymentFeatures = [
    'Aceite Pix e Cartão de Crédito',
    'Antecipação Pix automática',
    'Não dependa de maquininha de cartão',
    'Segurança para receber pedidos',
    'Agilidade para entregar',
  ];

  return (
    <S.PricingWrapper>
      <S.PricingSectionHeader>
        <S.PricingSectionTitle>E mais: suporte que realmente funciona!</S.PricingSectionTitle>
        <S.PricingSectionDescription>
          Respostas automáticas e robôs? Aqui não. Nossa equipe está sempre disponível pra ajudar você e seus clientes.
        </S.PricingSectionDescription>
      </S.PricingSectionHeader>

      <S.PricingSection>
        <PricingCard
          title="Pigz"
          subtitle="Tudo o que você precisa"
          features={pigzFeatures}
          price="R$199/mês"
          ctaLabel="Vender no Pigz agora"
        />
        <PricingCard
          title="Pagamento On-line"
          subtitle="Segurança e agilidade"
          features={paymentFeatures}
          price="2,99% por transação"
          ctaLabel="Saiba mais"
        />
      </S.PricingSection>

      <S.ContactWrapper>
        <S.ContactText>Fale com a Pigz</S.ContactText>
        <S.ContactPhoneWrapper>
          <S.ContactIcon src={whatsappIcon} alt="WhatsApp icone" />
          <S.ContactPhoneNumber>95 3224-2603</S.ContactPhoneNumber>
        </S.ContactPhoneWrapper>
      </S.ContactWrapper>
    </S.PricingWrapper>
  );
}
