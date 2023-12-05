import React, { Suspense } from 'react'
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
        <Route path="/">
          <Route index element={<Suspense fallback={<div>Loading...</div>}>
            <App />
          </Suspense>}/>
          <Route path="*" element={<Suspense fallback={<div>Loading...</div>}>
            <Error/>
          </Suspense>}/>

          <Route path="viewer/" element={<Suspense fallback={<div>Loading...</div>}>
            <Viewer/>
          </Suspense>}/>
          <Route path="viewer/:part/" element={<Suspense fallback={<div>Loading...</div>}>
            <Viewer/>
          </Suspense>}/>
        </Route>
      </Routes>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
)
