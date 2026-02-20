import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterContextProvider } from 'react-router'
import { router } from './router/route.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterContextProvider router={router}>

    </RouterContextProvider>
  </StrictMode>
)
