import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MemoryCards from './Memory-Cards'
import '../styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MemoryCards />
  </StrictMode>,
)