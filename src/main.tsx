import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/styles/index.css'
import { Header } from './components//header/Header.tsx'
import Nav from './components/sections/Nav.tsx'
import { Form } from './components/form/Form.tsx'
import { Section1 } from './components/sections/CardsSection.tsx'
import { LineTrail } from './components/buttons/LineTrail.tsx'
import { GlobalStyle } from './components/styles/GlobalStyle.ts'
import { PricingSection } from './components/cards/PricingCard.tsx'
import { Footer } from './components/footer/Footer.tsx'

<link rel="stylesheet" href="https://use.typekit.net/iiz4uxt.css"></link>

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
     <Header />
     <Nav />
     <Form />
     <Section1 />
     <LineTrail />
     <PricingSection />
     <Footer />
  </StrictMode>,
)


