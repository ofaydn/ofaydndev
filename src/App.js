import React from 'react';
import './App.css';
//import Logo from "./components/logo/index.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.js";
import Blog from "./pages/blog.js";
import Arsal from "./pages/arsal.js";
function App() {
///*<Logo/>*/
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/arsal" element={<Arsal/>} />
      </Routes>
    </Router>
    
    
    
  );
}

export default App;
