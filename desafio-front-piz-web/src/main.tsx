import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Header } from './components//header/Header.tsx'
import Nav from './components/Nav.tsx'
import { Form } from './components/form/Form.tsx'
import { Section1 } from './components/sections/CardsSection.tsx'
import { LineTrail } from './components/buttons/LineTrail.tsx'
import { GlobalStyle } from './components/GlobalStyle.ts'

<link rel="stylesheet" href="https://use.typekit.net/iiz4uxt.css"></link>

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
     <Header />
     <Nav />
     <Form />
     <Section1 />
     <LineTrail />
  </StrictMode>,
)


