import React from 'react';
import './App.css';
//import Logo from "./components/logo/index.js"
import Navbar from "./components/navbar/index.js"
import Intro from "./components/introduction/index.js"
import Skills from "./components/skills/index.js";
function App() {
///*<Logo/>*/
  return (
    <div className='mainclass'>
      <Navbar title="homepage" link="/homepage" 
      title2="blog" link2="/blog"
      title3="arsal" link3="/arsal"/>
      <Intro/>
      <Skills/>
    </div>
  );
}

export default App;
