import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import New from "./components/New";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Router>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/new" element={<New />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
