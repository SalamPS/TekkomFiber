import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from './components/App.jsx';
import Viewer from './components/Viewer.jsx';

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/">
        </Route>
      </Routes>
    </Router>
  );
}
