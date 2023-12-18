import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './css/index.css'
import './css/App.css'
import './css/Viewer.css'

import Error from './components/App.jsx';
import App from './components/App.jsx';
import Viewer from './components/Viewer.jsx';

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} index></Route>
        <Route path="*" element={<Error />} index></Route>

        <Route path="viewer/" element={<Viewer />}/>
        <Route path="viewer/:part/" element={<Viewer />}/>
      </Routes>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
)
