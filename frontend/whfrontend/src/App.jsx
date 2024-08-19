import Home from "./Pages/Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const routes = (
  <Router>
    <Routes>
      <Route path="/" exact element={<Home />} />
      {/* Add more routes as needed */}
    </Routes>
  </Router>
);

function App() {
  return (
    <>
      <div>{routes}</div>
    </>
  );
}

export default App;
