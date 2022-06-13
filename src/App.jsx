import "./CSS/App.css";
import "./Components/firebaseConfig";
import Read from "./Components/CRUD";
import Picture from "./Components/Picture";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/picture">Picture</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Read />}></Route>
          <Route exact path="/picture" element={<Picture />}></Route>
        </Routes>
      </div>
    </Router>
  );
  <Read />;
}

export default App;
