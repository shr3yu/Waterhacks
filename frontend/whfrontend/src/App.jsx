import Search from "./Pages/Search";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./Pages/Test";
import Profile from "./Pages/Profile";

/*
routes: the different pages users can go to 

the path "/" means that https://localhost:8000 will show whatever is on the Home.jsx

if we add another path "/example", we would need to go to https://localhost:8000/example to see it
*/

const routes = (
  <Router>
    <Routes>
      <Route path="/" exact element={<Search />} /> 
      <Route path="/home" exact element={<Test />} /> 
      <Route path="/profile" exact element={<Profile/>}/>
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
