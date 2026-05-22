import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { getRouter } from './router'
import { Maintenance } from './components/Maintenance'
import './styles.css'

const router = getRouter()

// Toggle this flag to enable/disable maintenance mode
// Toggle this flag to enable/disable maintenance mode
//const IS_MAINTENANCE_MODE = false; // غيّر هذه القيمة لإيقاف وضع الصيانة

const IS_MAINTENANCE_MODE = false;


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {IS_MAINTENANCE_MODE ? (
      <Maintenance />
    ) : (
      <RouterProvider router={router} />
    )}
  </React.StrictMode>,
)

