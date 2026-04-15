import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Header } from './components/Header.tsx'
import TextPigz from './components/TextPigz.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
     <Header />
     <TextPigz />
  </StrictMode>,
)
