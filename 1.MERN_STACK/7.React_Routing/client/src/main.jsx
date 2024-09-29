// MERN_DEVELOPER_ASSIGNMENT\1.MERN_STACK\7.React_Routing\client\src\main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
//import './index.css'

createRoot(document.getElementById('root')).render(
  <Router>
    <StrictMode>
      <App />
    </StrictMode>
  </Router>
)
