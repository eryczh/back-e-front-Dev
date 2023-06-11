import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Header from "../components/Header";
import Login from './pages/Login';
import Register from './pages/Register';
import Performance from './components/Performance';



export const AppRouter = () => {
  return (
    <Router>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/sobre" element={<Sobre />} />
            

        </Routes>
    </Router>
  );
};
