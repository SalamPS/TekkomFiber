import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Viewer from './Viewer.jsx'
import './css/index.css'
import './css/Viewer.css'
import './css/App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Viewer />
  </React.StrictMode>,
)
