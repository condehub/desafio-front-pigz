import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Header } from './components/Header.tsx'
import Nav from './components/Nav.tsx'
import { Form } from './components/form/Form.tsx'
import { Section1 } from './components/sections/CardsSection.tsx'

<link rel="stylesheet" href="https://use.typekit.net/iiz4uxt.css"></link>

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
     <Header />
     <Nav />
     <Form />
     <Section1 />
  </StrictMode>,
)


