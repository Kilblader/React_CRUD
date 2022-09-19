import "./CSS/App.css";
import "./Components/firebaseConfig";
import Read from "./Components/CRUD";
import Picture from "./Components/Picture";
import Gym from "./Components/Gym";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/picture">Picture</Link>
          </li> */}
          <li>
            <Link to="/gym">Gym</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Gym />}></Route>
          <Route exact path="/picture" element={<Picture />}></Route>
          {/* <Route exact path="/gym" element={<Gym />}></Route> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
