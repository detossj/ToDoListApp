import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 import './index.css'
import { ToDoListApp } from './ToDoListApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToDoListApp></ToDoListApp>
  </StrictMode>,
)
