import React from 'react'
import ReactDOM from 'react-dom/client'
import ResetCSS from './styles/ResetCSS.js'
import GlobalCSS from './styles/GlobalCSS.js'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResetCSS />
    <GlobalCSS />
    <App />
  </React.StrictMode>,
)
