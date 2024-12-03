import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserProvider } from './myContext/context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
    <App />

    </UserProvider>
  </StrictMode>,
)
