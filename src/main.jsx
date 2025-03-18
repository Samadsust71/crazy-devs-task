import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SidebarProvider } from './components/ui/sidebar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SidebarProvider style={{
    "--sidebar-width": "296px",
  }}>
    <App />
    </SidebarProvider>
  </StrictMode>,
)
